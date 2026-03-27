import { useDBContext } from "../../contexts/DBContext";
import Pressable from "../Primitives/Pressable";
import Typography from "../Primitives/Typography";
import View from "../Primitives/View";

interface Props {
  id: string;
  title: string;
  isDone: boolean;
  isLast?: boolean;
}

const TaskItem = ({ id, title, isDone }: Props) => {
  const { updateTask, deleteTask } = useDBContext();

  return (
    <View className="flex flex-row items-center justify-between border p-3 rounded">
      <Pressable
        onClick={() =>
          updateTask({
            taskId: id,
            isDone: !isDone,
          })
        }
      >
        <Typography className={isDone ? "line-through" : ""}>
          {title}
        </Typography>
      </Pressable>

      <Pressable onClick={() => deleteTask(id)}>❌</Pressable>
    </View>
  );
};

export default TaskItem;
