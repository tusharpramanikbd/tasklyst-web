import { useState, useEffect } from "react";
import BaseBottomSheet from "./BaseBottomSheet";
import View from "../Primitives/View";
import Pressable from "../Primitives/Pressable";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onDone: (taskName: string) => void;
  taskName: string;
}

const EditBottomSheet = ({ isOpen, onClose, onDone, taskName }: Props) => {
  const [value, setValue] = useState(taskName);

  useEffect(() => {
    setValue(taskName);
  }, [taskName]);

  return (
    <BaseBottomSheet isOpen={isOpen} onClose={onClose}>
      <View className="flex flex-col gap-4">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-2 rounded"
        />

        <View className="flex flex-col gap-3 mt-4">
          <Pressable
            onClick={() => onDone(value)}
            className="bg-black text-white p-2 rounded"
          >
            Done
          </Pressable>

          <Pressable onClick={onClose} className="border p-2 rounded">
            Cancel
          </Pressable>
        </View>
      </View>
    </BaseBottomSheet>
  );
};

export default EditBottomSheet;
