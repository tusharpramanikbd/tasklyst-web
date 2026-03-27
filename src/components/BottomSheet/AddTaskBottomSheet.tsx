import { useState, memo } from "react";
import BaseBottomSheet from "./BaseBottomSheet";
import View from "../Primitives/View";
import Typography from "../Primitives/Typography";
import Pressable from "../Primitives/Pressable";
import { useDBContext } from "../../contexts/DBContext";

type TAddTaskBottomSheet = {
  isOpen: boolean;
  onClose: () => void;
};

const AddTaskBottomSheet = ({ isOpen, onClose }: TAddTaskBottomSheet) => {
  const [taskName, setTaskName] = useState("");
  const { addTask } = useDBContext();

  const handleCreate = async () => {
    if (!taskName.trim()) return;

    await addTask(taskName);
    setTaskName("");
    onClose();
  };

  return (
    <BaseBottomSheet isOpen={isOpen} onClose={onClose}>
      <View className="flex flex-col gap-4">
        <Typography type="large">Create Task</Typography>

        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
          className="border p-2 rounded"
        />

        <Pressable
          onClick={handleCreate}
          className="bg-black text-white p-2 rounded"
        >
          Create
        </Pressable>
      </View>
    </BaseBottomSheet>
  );
};

export default memo(AddTaskBottomSheet);
