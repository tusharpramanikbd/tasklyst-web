import { useDBContext } from "../../contexts/DBContext";
import Checkbox from "../Primitives/Checkbox";
import Pressable from "../Primitives/Pressable";
import Typography from "../Primitives/Typography";
import View from "../Primitives/View";

interface Props {
  id: string;
  title: string;
  isDone: boolean;
  isLast?: boolean;
  isDisabled?: boolean;
}

const TaskItem = ({ id, title, isDone, isLast, isDisabled }: Props) => {
  const { updateTask, deleteTask } = useDBContext();

  const handleToggle = () => {
    if (isDisabled) return;

    updateTask({
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
          onClick={() => deleteTask(id)}
          disabled={isDisabled}
          className="text-gray-400"
        >
          ⋮
        </Pressable>
      </View>

      {!isLast && <div className="h-px bg-gray-200 w-full" />}
    </View>
  );
};

export default TaskItem;
