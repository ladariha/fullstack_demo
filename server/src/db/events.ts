import Database from "better-sqlite3";

const db = new Database("events.db", { verbose: console.log });

type UserRecord = {
  name: string;
  answer: "yes" | "no" | "if-needed";
};

type DateRecord = {
  timestamp: number;
  records: UserRecord[];
};

type PollingEvent = {
  location?: string | null;
  title: string;
  id: number;
  dates: DateRecord[];
};

export const createSchema = () => {
  db.exec(`
CREATE TABLE IF NOT EXISTS \`event\` (
  \`title\` VARCHAR(255) NULL,
  \`id\` INTEGER PRIMARY KEY AUTOINCREMENT,
  \`location\` VARCHAR(512) NULL);



CREATE TABLE IF NOT EXISTS\`dates\` (
  \`id\` INTEGER PRIMARY KEY AUTOINCREMENT,
  \`timestamp\` INT NULL,
  \`event_id\` INT NOT NULL);


CREATE TABLE IF NOT EXISTS \`responses\` (
  \`id\` INTEGER PRIMARY KEY AUTOINCREMENT,
  \`user\` VARCHAR(512) NULL,
  \`answer\` VARCHAR(45) NULL,
  \`dates_id\` INT NOT NULL,
  \`dates_event_id\` INT NOT NULL);

`);
};

export const addEvent = (newEvent: PollingEvent) => {
  const query = db.prepare(`INSERT INTO event (title, location) VALUES (?, ?);`);
  const newEventDb = query.run(newEvent.title, newEvent.location || "");
  const newEventId = newEventDb.lastInsertRowid;

  const addDateQuery = db.prepare(`INSERT INTO dates (timestamp, event_id) VALUES (?, ?);`);
  addDateQuery.run(Date.now(), newEventId);
};
export const getEvents = () => {
  const query = db.prepare<[], PollingEvent>(
    `SELECT e.* FROM event e;`
  );

  const events: PollingEvent[] = query.all();
  events.forEach((e: PollingEvent) => {
    const queryDates = db.prepare<[number], DateRecord>(
      `SELECT d.* FROM dates d WHERE event_id = ?;`
    );

    const result: DateRecord[] = queryDates.all(e.id);
    e.dates = result.map((entry) => {
      return {
        records: [],
        timestamp: entry.timestamp
      };
    });
  });

  return events;
};
export const getEvent = (eventId: number): PollingEvent => {
  const query = db.prepare<[number], PollingEvent>(`SELECT e.* FROM event e WHERE id = ?;`);
  const event = query.all(eventId);
  return event[0];
};
