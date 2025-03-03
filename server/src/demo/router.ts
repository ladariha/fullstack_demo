import { Router } from "express";

const router = Router();

router.get(/v.?\/users\/(.*)/, (_req, res) => {
  res.send("Hello users 2");
});
router.get(/v.?\/users/, (_req, res) => {
  res.send("Hello users 1");
});

router.get(/v.?\/user/, (_req, res) => {
  res.send("Hello 1");
});

router.get(/v.?\/user\/(.*)/, (_req, res) => {
  res.send("Hello 2");
});

router.get("/v:version/admins/:adminId", (_req, res) => {
  res.send("Admins 1");
});
router.get("/v:version/admins/1", (_req, res) => {
  res.send("Admins 2");
});
export default router;
