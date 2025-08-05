import Cell from "./Cell";

const NUMBER_OF_ROWS = 10;
const NUMBER_OF_COLS = 10;
const NUMBER_OF_MINES = 10;

interface GridCell {
  hasMine: boolean;
  adjacentMines: number;
}

function Minesweeper() {
  let grid: GridCell[][] = [];

  for (let row = 0; row < NUMBER_OF_ROWS; row++) {
    const gridRow = [];
    for (let col = 0; col < NUMBER_OF_COLS; col++) {
      gridRow.push({ hasMine: false, adjacentMines: 0 });
    }
    grid.push(gridRow);
  }

  // Randomly place mines
  for (let i = 0; i < NUMBER_OF_MINES; i++) {
    const row = Math.floor(Math.random() * NUMBER_OF_ROWS);
    const col = Math.floor(Math.random() * NUMBER_OF_COLS);
    if (!grid[row][col].hasMine) {
      grid[row][col].hasMine = true;
      // Increment adjacent mine counts
      for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
          if (
            r >= 0 &&
            r < NUMBER_OF_ROWS &&
            c >= 0 &&
            c < NUMBER_OF_COLS &&
            !(r === row && c === col)
          ) {
            grid[r][c].adjacentMines++;
          }
        }
      }
    } else {
      i--;
    }
  }

  return (
    <div className="m-10 w-fit">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="p-0 m-0 flex">
          {row.map((_, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              hasMine={grid[rowIndex][colIndex].hasMine}
              adjacentMines={grid[rowIndex][colIndex].adjacentMines}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Minesweeper;
