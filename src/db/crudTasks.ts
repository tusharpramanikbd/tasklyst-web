import { db, type Task } from "./tasklystDB";
import { v4 as uuidv4 } from "uuid";

export const createTaskDB = async (
  title: string,
  date: string,
): Promise<Task> => {
  const task: Task = {
    id: uuidv4(),
    title,
    isDone: false,
    sortId: Date.now(),
    taskDate: date,
  };
  await db.tasks.add(task);
  return task;
};

export const renameTaskDB = async (
  id: string,
  title: string,
): Promise<void> => {
  await db.tasks.update(id, { title });
};

export const toggleTaskDoneDB = async (id: string, isDone: boolean) => {
  await db.tasks.update(id, { isDone });
};

export const deleteTaskDB = async (id: string): Promise<void> => {
  await db.tasks.delete(id);
};

export const listTasksDB = async (date: string): Promise<Task[]> => {
  return (
    await db.tasks.where("taskDate").equals(date).sortBy("sortId")
  ).reverse();
};

export const moveTaskToNextDayDB = async (id: string, nextDate: string) => {
  const task = await db.tasks.get(id);
  if (!task) return;

  // Create a new task for the next day
  const newTask: Task = {
    ...task,
    id: uuidv4(),
    taskDate: nextDate,
  };

  // Add the new task to the database
  await db.tasks.add(newTask);

  // Delete the old task
  await db.tasks.delete(id);
};
