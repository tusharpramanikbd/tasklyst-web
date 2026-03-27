import { Dexie, type EntityTable } from "dexie";

type Task = {
  id: string;
  title: string;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
};

const db = new Dexie("Tasklyst") as Dexie & {
  tasks: EntityTable<Task, "id">;
};

// Schema declaration:
db.version(1).stores({
  tasks: "id, title, isDone, createdAt, updatedAt",
});

export type { Task };
export { db };
