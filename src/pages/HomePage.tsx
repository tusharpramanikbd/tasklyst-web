import { useState } from "react";
import AddTaskBottomSheet from "../components/BottomSheet/AddTaskBottomSheet";
import ViewWrapper from "../components/Primitives/ViewWrapper";
import AddTaskButton from "../components/Task/AddTaskButton";
import TaskList from "../components/Task/TaskList";
import { DBProvider } from "../contexts/DBContext";

const HomePage = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  return (
    <DBProvider>
      <ViewWrapper className="p-6">
        <TaskList />

        <AddTaskButton onClick={() => setIsBottomSheetOpen(true)} />

        <AddTaskBottomSheet
          isOpen={isBottomSheetOpen}
          onClose={() => setIsBottomSheetOpen(false)}
        />
      </ViewWrapper>
    </DBProvider>
  );
};

export default HomePage;
