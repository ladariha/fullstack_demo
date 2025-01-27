// import sqlite3 from 'sqlite3';

// // const db = new sqlite3.Database(':memory:');
// const db = new sqlite3.Database('/tmp/db.txt');

// db.serialize(() => {
//   // db.run("CREATE TABLE lorem (info TEXT)");

//   // const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   // for (let i = 0; i < 10; i++) {
//   //     stmt.run("Ipsum " + i);
//   // }
//   // stmt.finalize();
// db.run("show tables")
//   db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
//       console.log(row.id + ": " + row.info);
//   });
// });

// db.close();
import Database from "better-sqlite3";
const db = new Database("foobar.db", { verbose: console.log });
db.exec("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");
const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
for (let i = 0; i < 10; i++) {
  stmt.run("Ipsum " + i);
}

const result = db.prepare("SELECT rowid AS id, info FROM lorem").all();

console.log(">>> " + JSON.stringify(result, null, 2));
console.log(new Date().toLocaleTimeString());
