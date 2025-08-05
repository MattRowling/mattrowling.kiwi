import { useState } from "react";

interface CellProps {
  row: number;
  col: number;
  hasMine: boolean;
  adjacentMines: number;
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
        sm:w-8 sm:h-8 sm:text-sm
        md:w-10 md:h-10 md:text-base
        lg:w-12 lg:h-12 lg:text-lg
        inline-flex items-center justify-center 
        text-stone-600 font-bold   
        ${getColourClass()}
      `}
      key={`${props.row}-${props.col}`}
      onClick={() => {
        setIsMined(true);
      }}
    >
      {isMined
        ? props.hasMine
          ? "💣"
          : props.adjacentMines === 0
          ? ""
          : props.adjacentMines
        : ""}
    </span>
  );
}
export default Cell;
