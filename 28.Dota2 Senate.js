var predictPartyVictory = function (senate) {
  let radiantIndexes = [];
  let direIndexes = [];

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] == "R") radiantIndexes.push(i);
    else direIndexes.push(i);
  }

  while (radiantIndexes.length > 0 && direIndexes.length > 0) {
    const r = radiantIndexes.shift();
    const d = direIndexes.shift();

    if (r < d) radiantIndexes.push(senate.length + r);
    else direIndexes.push(senate.length + d);
  }

  return radiantIndexes.length > 0 ? "Radiant" : "Dire";
};
