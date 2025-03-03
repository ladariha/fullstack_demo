import session from "express-session";
import cors from "cors";
import { unless } from "./utils";
import compression from "compression";
import express, { Express } from "express";
import fileUpload from "express-fileupload";

export const configure = (app: Express) => {
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
};
