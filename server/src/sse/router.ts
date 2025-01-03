import { Router } from "express";
import { randomUUID } from "crypto";
const router = Router();

type Listener = (message: string, event?: string) => void;
const listeners = new Map<string, Listener>();

router.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  let idCounter = 0;
  const listener = (message: string, event?: string) => {
    idCounter += 1;
    if (event) {
      res.write(`event: ${event}\n`);
    }
    res.write(`data: ${JSON.stringify({ message })}\n`);
    res.write(`id: ${idCounter}\n\n`);
  };

  const id = randomUUID();
  listeners.set(id, listener);

  listener("Connected");

  req.on("close", () => {
    listeners.delete(id);
  });

  setInterval(() => {
    const now = new Date().toLocaleTimeString();
    listeners.forEach((listener) => listener(`Ping ${now}`, "ping"));
  }, 6000);
});

export default router;
