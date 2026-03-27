import { useState } from "react";
import { useDBContext } from "../../contexts/DBContext";
import Checkbox from "../Primitives/Checkbox";
import Pressable from "../Primitives/Pressable";
import Typography from "../Primitives/Typography";
import View from "../Primitives/View";
import TaskOptionsBottomSheet from "../BottomSheet/TaskOptionsBottomSheet";

interface Props {
  id: string;
  title: string;
  isDone: boolean;
  isLast?: boolean;
  isDisabled?: boolean;
}

const TaskItem = ({ id, title, isDone, isLast, isDisabled }: Props) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const { updateTaskStatus } = useDBContext();

  const handleToggle = () => {
    if (isDisabled) return;

    updateTaskStatus({
      taskId: id,
      isDone: !isDone,
    });
  };

  return (
    <View className="flex flex-col gap-4">
      <View className="flex flex-row items-center gap-4 justify-between">
        <View className="flex flex-row items-center gap-3 flex-1">
          <Checkbox
            checked={isDone}
            onChange={handleToggle}
            disabled={isDisabled}
          />

          <Typography
            type="large"
            className={`flex-1 ${
              isDone ? "line-through text-gray-400" : ""
            } ${isDisabled ? "text-gray-300" : ""}`}
          >
            {title}
          </Typography>
        </View>

        <Pressable
          onClick={() => setIsOptionsOpen(true)}
          disabled={isDisabled}
          className="text-gray-400"
        >
          ⋮
        </Pressable>
      </View>

      {!isLast && <div className="h-px bg-gray-200 w-full" />}

      <TaskOptionsBottomSheet
        isOpen={isOptionsOpen}
        onClose={() => setIsOptionsOpen(false)}
        taskId={id}
        taskName={title}
      />
    </View>
  );
};

export default TaskItem;
