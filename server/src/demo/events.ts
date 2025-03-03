import { Router } from "express";

const router = Router();
let idCounter = 2;
const data = {
  items: [
    {
      id: 1,
      location: "Praha",
      title: "Super akce",
      dates: [
        {
          timestamp: 1726514405258,
          records: [
            { name: "Honza", answer: "yes" },
            { name: "Jana", answer: "no" }
          ]
        },
        {
          timestamp: 1726600861177,
          records: [{ name: "Jana", answer: "no" }]
        }
      ]
    },
    {
      id: 2,
      location: "Brno",
      title: "Super akce 2",
      dates: [
        {
          timestamp: 1726514405258,
          records: [
            { name: "Honza", answer: "no" },
            { name: "Jana", answer: "no" },
            { name: "Petr", answer: "no" }
          ]
        },
        {
          timestamp: 1726600861177,
          records: [{ name: "Jana", answer: "no" }]
        }
      ]
    }
  ]
};

router.post("/events", (req, res) => {
  // validace dat !!!
  idCounter += 1;
  data.items.push({
    ...req.body,
    id: idCounter
  });
  res.send("OK");
});
router.get("/events", (_req, res) => {
  res.json(data);
});

router.get("/events/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const theEvent = data.items.find((x) => x.id === id);
  if (!theEvent) {
    res.status(404).send("Not Found");
  } else {
    res.json(theEvent);
  }
});

export default router;
