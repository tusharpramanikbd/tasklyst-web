import { useDBContext } from "../../contexts/DBContext";
import ScrollView from "../Primitives/ScrollView";
import Typography from "../Primitives/Typography";
import View from "../Primitives/View";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { taskLists } = useDBContext();

  if (!taskLists || taskLists.length === 0) {
    return (
      <View className="flex-1 items-center justify-center">
        <Typography>No tasks yet</Typography>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1">
      <View className="flex flex-col gap-4">
        {taskLists.map((task, index) => (
          <TaskItem
            key={task.id}
            {...task}
            isLast={index === taskLists.length - 1}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default TaskList;
