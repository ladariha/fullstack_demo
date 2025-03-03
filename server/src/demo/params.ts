import { Router } from "express";

const router = Router();

router.get("/:userId", (req, res) => {
  const queryParams = req.query || {};
  res.send("Hello user " + req.params.userId + " , queryParams\n" + JSON.stringify(queryParams, null, 2));
});

export default router;
