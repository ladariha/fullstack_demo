import { Router } from "express";

const router = Router();
// curl -F 'file=@/home/vlriha/Downloads/image1.png' http://localhost:4000/upload -vvv

router.post("/upload", async (req, res) => {
  if (!req.files?.file) {
    res.status(422).send("No files were uploaded");
    return;
  }
  const uploadedFile = req.files.file;
  res.json(uploadedFile);
});

export default router;
