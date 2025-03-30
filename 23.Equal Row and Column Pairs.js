// var equalPairs = function (grid) {
//   let n = grid.length;

//   let transposedGrid = grid[0]?.map((_, colIndex) =>
//     grid.map((row) => row[colIndex])
//   );

//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (JSON.stringify(grid[i]) === JSON.stringify(transposedGrid[j]))
//         count++;
//     }
//   }
//   return count;
// };

var equalPairs = function (grid) {
  let countPair = 0;
  const hashArr = [];

  for (let i = 0; i < grid.length; i++) {
    let hash = 0;
    for (let j = 0; j < grid.length; j++) {
      hash = grid[i][j] + (hash << 6) + (hash << 16) - hash;
    }
    hashArr.push(hash);
  }

  for (let i = 0; i < grid.length; i++) {
    let hash = 0;
    for (let j = 0; j < grid.length; j++) {
      hash = grid[j][i] + (hash << 6) + (hash << 16) - hash;
    }    

    for (let k = 0; k < hashArr.length; k++) {
        if (hash === hashArr[k]) {
            countPair++;
        }
      }
  }

  return countPair;
};
