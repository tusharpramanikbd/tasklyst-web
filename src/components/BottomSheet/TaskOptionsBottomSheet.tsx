import { useState } from "react";
import { useDBContext } from "../../contexts/DBContext";
import BaseBottomSheet from "./BaseBottomSheet";
import View from "../Primitives/View";
import Typography from "../Primitives/Typography";
import Pressable from "../Primitives/Pressable";
import ConfirmBottomSheet from "./ConfirmBottomSheet";
import EditBottomSheet from "./EditBottomSheet";
import { useDateContext } from "../../contexts/DateContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  taskId: string;
  taskName: string;
}

const TaskOptionsBottomSheet = ({
  isOpen,
  onClose,
  taskId,
  taskName,
}: Props) => {
  const { deleteTask, renameTask, moveTaskToNextDay } = useDBContext();
  const { nextDate } = useDateContext();

  const [showConfirm, setShowConfirm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = async () => {
    await deleteTask(taskId);
    setShowConfirm(false);
    onClose();
  };

  const handleEdit = async (newName: string) => {
    await renameTask(taskId, newName);
    setShowEdit(false);
    onClose();
  };

  return (
    <>
      <BaseBottomSheet isOpen={isOpen} onClose={onClose}>
        <View className="flex flex-col gap-4">
          <Typography type="large">Options</Typography>

          <Pressable onClick={() => setShowEdit(true)}>Edit</Pressable>

          <Pressable onClick={() => setShowConfirm(true)}>Delete</Pressable>

          <Pressable
            onClick={() => {
              moveTaskToNextDay(taskId, nextDate);
              onClose();
            }}
          >
            Move to next day
          </Pressable>
        </View>
      </BaseBottomSheet>

      <ConfirmBottomSheet
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleDelete}
      />

      <EditBottomSheet
        isOpen={showEdit}
        onClose={() => setShowEdit(false)}
        onDone={handleEdit}
        taskName={taskName}
      />
    </>
  );
};

export default TaskOptionsBottomSheet;
