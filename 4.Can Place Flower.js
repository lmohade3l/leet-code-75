const canPlaceFlowers = (flowerbed, n) => {
  let temp = [...flowerbed];
  let flag = 0;
  if (flowerbed?.length === 1) {
    if (flowerbed[0] === 0 && n === 1) return true;
    if (flowerbed[0] === 0 && n === 0) return true;
    if (flowerbed[0] === 1 && n === 0) return true;
    if (flowerbed[0] === 1 && n === 1) return false;
  }
  for (let i = 0; i < flowerbed?.length; i++) {
    // if(flowerbed[i]===1) continue;
    if (i === 0 && temp[i] === 0 && temp[i + 1] === 0) {
      temp[i] = 1;
      flag++;
    } else if (
      i === flowerbed?.length - 1 &&
      temp[i] === 0 &&
      temp[i - 1] === 0
    ) {
      temp[i] = 1;
      flag++;
    } else if (
      i !== 0 &&
      temp[i] === 0 &&
      temp[i - 1] === 0 &&
      temp[i + 1] === 0
    ) {
      temp[i] = 1;
      flag++;
    }
  }
  return flag < n ? false : true;
};
