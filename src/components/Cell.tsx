interface CellProps {
  row: number;
  col: number;
  hasMine: boolean;
  adjacentMines: number;
  isRevealed: boolean;
  isFlagged: boolean;
  onClick?: (row: number, col: number) => void;
  onContextMenu?: (row: number, col: number) => void;
}

function Cell(props: CellProps) {
  const getClasses = () => {
    const isLight =
      (props.row % 2 === 0 && props.col % 2 === 1) ||
      (props.row % 2 === 1 && props.col % 2 === 0);

    if (props.isRevealed) {
      return isLight ? "bg-stone-200 " : "bg-stone-300";
    } else {
      return isLight
        ? "bg-green-500 cursor-pointer hover:opacity-80 transition-opacity"
        : "bg-green-600 cursor-pointer hover:opacity-80 transition-opacity";
    }
  };

  const getDisplayContent = () => {
    if (!props.isRevealed) {
      return props.isFlagged ? "🚩" : "";
    } else if (props.hasMine) {
      return "💣";
    } else {
      return props.adjacentMines === 0 ? "" : props.adjacentMines;
    }
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
        ${getClasses()}
      `}
      onClick={() => {
        props.onClick?.(props.row, props.col);
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        props.onContextMenu?.(props.row, props.col);
      }}
    >
      {getDisplayContent()}
    </span>
  );
}

export default Cell;
