import Pressable from "../Primitives/Pressable";

interface Props {
  onClick: () => void;
  isDisabled?: boolean;
}

const AddTaskButton = ({ onClick, isDisabled }: Props) => {
  return (
    <Pressable
      onClick={onClick}
      disabled={isDisabled}
      className={`fixed bottom-6 right-6 bg-black text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl ${isDisabled ? "opacity-50" : ""} `}
    >
      +
    </Pressable>
  );
};

export default AddTaskButton;
