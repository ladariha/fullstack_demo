import express, { Express, Request, Response, NextFunction } from "express";
import "dotenv/config";
import router from "./login/router";
import longPolling from "./longpolling/router";
import passportRouter from "./login/googlePassport";
import passport from "passport";
import { createWsServer } from "./ws/index";
import sseRouter from "./sse/router";
import { configure as configureMiddleware } from "./middleware";
import greedyRouter from "./demo/router";
import dbRouter from "./db/injection";
import paramsRouter from "./demo/params";
import eventsRouter from "./demo/events";
import negotiationRouter from "./demo/contentNegotiation";
import fileUploadRouter from "./demo/fileUpload";

console.log(".env test: " + process.env.heslo);

const app: Express = express();

const port = process.env.PORT || 4000;
console.log("Starting... ");
const USE_PASSPORT = true;
configureMiddleware(app);

app.use("/greedy", greedyRouter);
app.use("/params", paramsRouter);
app.use("/eventsapi", eventsRouter);
app.use("/content", negotiationRouter);
app.use("/fileupload", fileUploadRouter);
app.use("/db", dbRouter);

if (USE_PASSPORT) {
  app.use(passport.authenticate("session"));
  app.use("/auth", passportRouter);
} else {
  app.use("/auth", router);
}
app.use("/sse", sseRouter);
app.use("/longpolling", longPolling);

// test error endpoint
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

// Error handling confing
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
