import Pressable from "../Primitives/Pressable";

interface Props {
  onClick: () => void;
}

const AddTaskButton = ({ onClick }: Props) => {
  return (
    <Pressable
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-black text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl"
    >
      +
    </Pressable>
  );
};

export default AddTaskButton;
