import { useState } from "react";

interface CellProps {
  row: number;
  col: number;
  hasMine: boolean;
}

function Cell(props: CellProps) {
  const [isMined, setIsMined] = useState(false);

  const getColourClass = () => {
    const isLight =
      (props.row % 2 === 0 && props.col % 2 === 1) ||
      (props.row % 2 === 1 && props.col % 2 === 0);

    if (isMined) {
      return isLight ? "bg-stone-200" : "bg-stone-300";
    }
    return isLight ? "bg-green-500" : "bg-green-600";
  };

  return (
    <span
      className={`
        w-6 h-6 
        sm:w-8 sm:h-8 
        md:w-10 md:h-10 
        lg:w-12 lg:h-12 
        inline-flex items-center justify-center 
        text-xs sm:text-sm md:text-base lg:text-lg
        ${getColourClass()}
      `}
      key={`${props.row}-${props.col}`}
      onClick={() => {
        setIsMined(true);
      }}
    >
      {isMined && props.hasMine ? "💣" : ""}
    </span>
  );
}
export default Cell;
