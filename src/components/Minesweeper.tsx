import { useState, useEffect } from "react";
import Cell from "./Cell";

const NUMBER_OF_ROWS = 10;
const NUMBER_OF_COLS = 10;
const NUMBER_OF_MINES = 10;

interface GridCell {
  hasMine: boolean;
  adjacentMines: number;
  isRevealed: boolean;
}

function Minesweeper() {
  const [grid, setGrid] = useState<GridCell[][]>([]);

  // Initialize grid once when component mounts
  useEffect(() => {
    initializeGrid();
  }, []);

  const initializeGrid = () => {
    let newGrid: GridCell[][] = [];

    // Create empty grid
    for (let row = 0; row < NUMBER_OF_ROWS; row++) {
      const gridRow = [];
      for (let col = 0; col < NUMBER_OF_COLS; col++) {
        gridRow.push({ hasMine: false, adjacentMines: 0, isRevealed: false });
      }
      newGrid.push(gridRow);
    }

    // Randomly place mines
    let minesPlaced = 0;
    while (minesPlaced < NUMBER_OF_MINES) {
      const row = Math.floor(Math.random() * NUMBER_OF_ROWS);
      const col = Math.floor(Math.random() * NUMBER_OF_COLS);

      if (!newGrid[row][col].hasMine) {
        newGrid[row][col].hasMine = true;
        minesPlaced++;

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
              newGrid[r][c].adjacentMines++;
            }
          }
        }
      }
    }

    setGrid(newGrid);
  };

  // Open adjacent cells
  const openAdjacentCells = (
    row: number,
    col: number,
    currentGrid: GridCell[][]
  ) => {
    if (row < 0 || row >= NUMBER_OF_ROWS || col < 0 || col >= NUMBER_OF_COLS) {
      return currentGrid;
    }
    if (currentGrid[row][col].isRevealed) {
      return currentGrid;
    }

    // Create a new grid with the cell revealed
    const newGrid = currentGrid.map((row) => [...row]);
    newGrid[row][col].isRevealed = true;

    // If no adjacent mines, recursively open adjacent cells
    if (newGrid[row][col].adjacentMines === 0) {
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (i !== row || j !== col) {
            const updatedGrid = openAdjacentCells(i, j, newGrid);
            // Update newGrid with changes from recursive call
            for (let x = 0; x < NUMBER_OF_ROWS; x++) {
              for (let y = 0; y < NUMBER_OF_COLS; y++) {
                if (updatedGrid[x][y].isRevealed) {
                  newGrid[x][y].isRevealed = true;
                }
              }
            }
          }
        }
      }
    }

    return newGrid;
  };

  const handleCellClick = (row: number, col: number) => {
    if (grid[row][col].isRevealed) {
      return; // Already revealed
    }

    if (grid[row][col].hasMine) {
      // Game over, reveal all mines
      const newGrid = grid.map((gridRow) =>
        gridRow.map((cell) =>
          cell.hasMine ? { ...cell, isRevealed: true } : cell
        )
      );
      setGrid(newGrid);
    } else {
      const updatedGrid = openAdjacentCells(row, col, grid);
      setGrid(updatedGrid);
    }
  };

  return (
    <div className="m-10 w-fit">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="p-0 m-0 flex">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              hasMine={cell.hasMine}
              adjacentMines={cell.adjacentMines}
              isRevealed={cell.isRevealed}
              onClick={cell.isRevealed ? undefined : handleCellClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Minesweeper;
