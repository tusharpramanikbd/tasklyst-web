import { useEffect, useState } from "react";
import type { Task } from "../db/tasklystDB";
import {
  createTaskDB,
  deleteTaskDB,
  listTasksDB,
  moveTaskToNextDayDB,
  renameTaskDB,
  toggleTaskDoneDB,
} from "../db/crudTasks";

const useDBTaskManager = (date: string) => {
  const [taskLists, setTaskLists] = useState<Task[]>([]);

  const loadTasks = async () => {
    const db = await listTasksDB(date);
    setTaskLists(db);
  };

  const addTask = async (title: string) => {
    await createTaskDB(title);
    loadTasks();
  };

  const deleteTask = async (taskId: string) => {
    await deleteTaskDB(taskId);
    loadTasks();
  };

  const renameTask = async (taskId: string, taskName: string) => {
    await renameTaskDB(taskId, taskName);
    loadTasks();
  };

  const updateTaskStatus = async ({
    taskId,
    isDone,
  }: {
    taskId: string;
    isDone: boolean;
  }) => {
    await toggleTaskDoneDB(taskId, isDone);
    loadTasks();
  };

  const moveTaskToNextDay = async (id: string, nextDate: string) => {
    await moveTaskToNextDayDB(id, nextDate);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return {
    taskLists,
    addTask,
    renameTask,
    updateTaskStatus,
    deleteTask,
    moveTaskToNextDay,
  };
};

export default useDBTaskManager;
