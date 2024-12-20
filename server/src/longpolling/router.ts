import { Router } from "express";
import { subscribe, EventName, publish } from "./pubSub";

const router = Router();

router.get("/", (_req, res) => {
  subscribe(EventName.NewData, () => {
    res.json({ newDataTimestamp: Date.now() });
  });

  setTimeout(() => {
    publish(EventName.NewData);
  }, 5000);
});

export default router;
