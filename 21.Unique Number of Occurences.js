var uniqueOccurrences = function (arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.get(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }

  let values = [];

  map.forEach((value, key) => {
    values.push(value);
  });

  let valueSet = new Set(values);

  if (valueSet.size === values.length) return true;

  return false;
};
