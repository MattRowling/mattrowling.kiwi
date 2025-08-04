interface CellProps {
  row: number;
  col: number;
}

function Cell(props: CellProps) {
  return (
    <span
      className={
        (props.row % 2 === 0 && props.col % 2 === 1) ||
        (props.row % 2 === 1 && props.col % 2 === 0)
          ? "p-5 bg-green-500 inline-flex items-center justify-center"
          : "p-5 bg-green-600 inline-flex items-center justify-center"
      }
      key={`${props.row}-${props.col}`}
      onClick={() => {
        console.log(`Cell clicked at row: ${props.row}, col: ${props.col}`);
      }}
    ></span>
  );
}
export default Cell;
