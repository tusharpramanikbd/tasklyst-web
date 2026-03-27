import Pressable from "../Primitives/Pressable";
import Typography from "../Primitives/Typography";
import View from "../Primitives/View";
import BaseBottomSheet from "./BaseBottomSheet";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmBottomSheet = ({ isOpen, onClose, onConfirm }: Props) => {
  return (
    <BaseBottomSheet isOpen={isOpen} onClose={onClose}>
      <View className="flex flex-col gap-4">
        <Typography type="large">Are you sure?</Typography>
        <Typography>This action cannot be undone.</Typography>

        <View className="flex flex-col gap-3 mt-4">
          <Pressable
            onClick={onConfirm}
            className="bg-black text-white p-2 rounded"
          >
            Confirm
          </Pressable>

          <Pressable onClick={onClose} className="border p-2 rounded">
            Cancel
          </Pressable>
        </View>
      </View>
    </BaseBottomSheet>
  );
};

export default ConfirmBottomSheet;
