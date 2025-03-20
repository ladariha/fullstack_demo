import { Router } from "express";
import { createSchema, getEvents, addEvent, getEvent } from "../db/events";
createSchema();

const router = Router();

router.post("/events", (req, res) => {
  // // validace dat !!!

  addEvent({
    ...req.body
  });

  res.send("OK");
});
router.get("/events", (_req, res) => {
  res.json({ items: getEvents() });
});

router.get("/events/:id", (req, res) => {
  res.json(getEvent(parseInt(req.params.id, 10)));
});

export default router;
