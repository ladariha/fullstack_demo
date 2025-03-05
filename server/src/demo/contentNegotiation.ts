import { Router } from "express";

const router = Router();

// curl -X GET "http://localhost:4000/content/data" -v
router.get("/data", (_req, res) => {
  res.format({
    "text/plain": () => {
      res.send("Hello, this is plain text.");
    },
    "text/html": () => {
      res.send("<h1>Hello, this is HTML!</h1>");
    },
    "application/json": () => {
      res.json({ message: "Hello, this is JSON!" });
    },
    default: () => {
      res.status(406).send("Not Acceptable");
    }
  });
});

export default router;
