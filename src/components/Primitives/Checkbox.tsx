interface Props {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

const Checkbox = ({ checked, onChange, disabled }: Props) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className="w-5 h-5 cursor-pointer"
    />
  );
};

export default Checkbox;
