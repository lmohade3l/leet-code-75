var equalPairs = function (grid) {
  let n = grid.length;

  let transposedGrid = grid[0]?.map((_, colIndex) =>
    grid.map((row) => row[colIndex])
  );

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (JSON.stringify(grid[i]) === JSON.stringify(transposedGrid[j]))
        count++;
    }
  }
  return count;
};

