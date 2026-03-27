import { format } from "date-fns";
import { db, type Task } from "./tasklystDB";
import { v4 as uuidv4 } from "uuid";

const today = format(Date.now(), "dd-MM-yyyy");

export const createTaskDB = async (title: string): Promise<Task> => {
  const task: Task = {
    id: uuidv4(),
    title,
    createdAt: today,
    updatedAt: today,
    isDone: false,
  };
  await db.tasks.add(task);
  return task;
};

export const renameTaskDB = async (
  id: string,
  title: string,
): Promise<void> => {
  await db.tasks.update(id, { title, updatedAt: today });
};

export const toggleTaskDoneDB = async (id: string, isDone: boolean) => {
  await db.tasks.update(id, { isDone, updatedAt: today });
};

export const deleteTaskDB = async (id: string): Promise<void> => {
  await db.tasks.delete(id);
};

export const listTasksDB = async (date: string): Promise<Task[]> => {
  return await db.tasks.where("createdAt").equals(date).toArray();
};

export const moveTaskToNextDayDB = async (id: string, nextDate: string) => {
  const task = await db.tasks.get(id);
  if (!task) return;

  // Create a new task for the next day
  const newTask: Task = {
    ...task,
    id: uuidv4(),
    createdAt: nextDate,
    updatedAt: nextDate,
  };

  // Add the new task to the database
  await db.tasks.add(newTask);

  // Delete the old task
  await db.tasks.delete(id);
};
