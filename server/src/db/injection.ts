import { Router } from "express";
import Database from "better-sqlite3";
// ajpk
const db = new Database("injection_nova.db", { verbose: console.log });
db.exec("CREATE TABLE IF NOT EXISTS demo (info TEXT)");

const router = Router();

router.post("/inject", (req, res) => {
  const userText = req.body.text;
  // INJECT');INSERT INTO demo (info)  VALUES ('OOPS
  const query = `INSERT INTO demo (info)
           VALUES ('${userText}')`;
  db.exec(query);
  res.json({ info: userText });
});

router.post("/inject-safe", (req, res) => {
  const userText = req.body.text;
  const query = db.prepare("INSERT INTO demo (info) VALUES (?)");
  const result = query.run(userText);
  res.json(result);
});

router.get("/injects", (_req, res) => {
  const query = db.prepare("SELECT * FROM demo");
  res.json(query.all());
});

export default router;
