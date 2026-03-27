import { useState } from "react";
import AddTaskBottomSheet from "../components/BottomSheet/AddTaskBottomSheet";
import ViewWrapper from "../components/Primitives/ViewWrapper";
import AddTaskButton from "../components/Task/AddTaskButton";
import TaskList from "../components/Task/TaskList";
import { DBProvider } from "../contexts/DBContext";
import Header from "../components/Primitives/Header";
import { useDateContext } from "../contexts/DateContext";

const HomePage = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const { isPastDates } = useDateContext();

  return (
    <DBProvider>
      <ViewWrapper className="p-6">
        <Header />
        <TaskList />

        <AddTaskButton
          onClick={() => setIsBottomSheetOpen(true)}
          isDisabled={isPastDates}
        />

        <AddTaskBottomSheet
          isOpen={isBottomSheetOpen}
          onClose={() => setIsBottomSheetOpen(false)}
        />
      </ViewWrapper>
    </DBProvider>
  );
};

export default HomePage;
