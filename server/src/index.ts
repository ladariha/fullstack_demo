import express, { Express, Request, Response, NextFunction, RequestHandler } from "express";
import compression from "compression";
import cors from "cors";
import fileUpload from "express-fileupload";
import session from "express-session";
import router from "./login/router";
import longPolling from "./longpolling/router";
import passportRouter from "./login/googlePassport";
import passport from "passport";
import { createWsServer } from "./ws/index";
import sseRouter from "./sse/router";

const unless = (path: string, middleware: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (path === req.path) {
      return next();
    } else {
      return middleware(req, res, next);
    }
  };
};

const app: Express = express();
const port = process.env.PORT || 4000;
console.log("Starting... ");
const USE_PASSPORT = true;

app.set("trust proxy", 1);
app.use(session({
  resave: true,
  name: "sid",
  secret: "#$*&(^@&$*&^",
  saveUninitialized: true,
  cookie: {
    sameSite: false,
    secure: false,
    maxAge: 10000000000, // ms
  },
}));

app.use(cors({ credentials: true, origin: true }));
app.use(unless("/sse", compression({ threshold: 1, level: 6 })));
app.use(express.json());
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 }, useTempFiles: true,
  tempFileDir: "/tmp/",
}));

app.use((_req, _res, next) => {
  console.log("Time:" + Date.now());
  next();
});

if (USE_PASSPORT) {
  app.use(passport.authenticate("session"));
  app.use("/auth", passportRouter);
} else {
  app.use("/auth", router);
}
app.use("/sse", sseRouter);
app.use("/longpolling", longPolling);
// curl -F 'file=@/home/vlriha/Downloads/image1.png' http://localhost:4000/upload -vvv
app.post("/upload", async (req, res) => {
  if (!req.files?.file) {
    res.status(422).send("No files were uploaded");
    return;
  }
  const uploadedFile = req.files.file;
  res.json(JSON.stringify(uploadedFile));
});

app.get("/err", async () => {
  const x = new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject(new Error("oops"));
    }, 100);
  });
  await x;
});

app.get("/", (_req: Request, res: Response) => {
  // res.status(222).send('OK.');
  res
    .status(200)
    .setHeader("x-custom", 123)
    .setHeader("x-custom-2", 123)
    .send("ok");
});
const wsServer = createWsServer();

const server = app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
server.on("upgrade", (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, (socket) => {
    wsServer.emit("connection", socket, request);
  });
});

app.use((_req, res) => {
  res.status(404).send("Not found");
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("START");
  console.error(JSON.stringify(err));
  console.error(err.message);
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
