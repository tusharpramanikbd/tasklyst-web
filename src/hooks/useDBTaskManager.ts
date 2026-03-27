import { useEffect, useEffectEvent, useState } from "react";

export interface ITask {
  id: string;
  title: string;
  isDone: boolean;
  createdAt: number;
  updatedAt: number;
}

const STORAGE_KEY = "tasklyst_tasks";

const getStoredTasks = (): ITask[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const setStoredTasks = (tasks: ITask[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

const useDBTaskManager = () => {
  const [taskLists, setTaskLists] = useState<ITask[]>([]);

  const setTaskListsEvent = useEffectEvent(() => {
    setTaskLists(getStoredTasks());
  });

  useEffect(() => {
    setTaskListsEvent();
  }, []);

  const addTask = async (title: string) => {
    const newTask: ITask = {
      id: crypto.randomUUID(),
      title,
      isDone: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const updated = [newTask, ...getStoredTasks()];
    setStoredTasks(updated);
    setTaskLists(updated);
  };

  const deleteTask = async (taskId: string) => {
    const updated = getStoredTasks().filter((t) => t.id !== taskId);
    setStoredTasks(updated);
    setTaskLists(updated);
  };

  const updateTask = async ({
    taskId,
    taskName,
    isDone,
  }: {
    taskId: string;
    taskName?: string;
    isDone?: boolean;
  }) => {
    const updated = getStoredTasks().map((task) =>
      task.id === taskId
        ? {
            ...task,
            title: taskName ?? task.title,
            isDone: isDone ?? task.isDone,
            updatedAt: Date.now(),
          }
        : task,
    );

    setStoredTasks(updated);
    setTaskLists(updated);
  };

  return {
    taskLists,
    addTask,
    deleteTask,
    updateTask,
  };
};

export default useDBTaskManager;
