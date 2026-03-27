import { useDateContext } from "../../contexts/DateContext";

const Header = () => {
  const { formattedDate, handleLeftPress, handleRightPress, isToday } =
    useDateContext();

  return (
    <div className="flex items-center justify-between p-4 bg-black text-white">
      <button onClick={handleLeftPress}>←</button>

      <div>
        {formattedDate} {isToday && "(Today)"}
      </div>

      <button onClick={handleRightPress}>→</button>
    </div>
  );
};

export default Header;
