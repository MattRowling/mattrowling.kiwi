import Cell from "./Cell";

function Minesweeper() {
  const grid = [];

  for (let row = 0; row < 10; row++) {
    const gridRow = [];
    for (let col = 0; col < 10; col++) {
      gridRow.push({});
    }
    grid.push(gridRow);
  }

  return (
    <div className="text-black m-10 w-fit">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="p-0 m-0 flex">
          {row.map((_, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Minesweeper;
