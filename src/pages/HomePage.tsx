import TaskList from "../components/Task/TaskList";
import { DBProvider } from "../contexts/DBContext";

const HomePage = () => {
  return (
    <DBProvider>
      <TaskList />
    </DBProvider>
  );
};

export default HomePage;
