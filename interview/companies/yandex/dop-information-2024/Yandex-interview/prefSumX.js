// вернуть отрезок сумма которого равна х
function findSubSum(arr, x) {
  const prefSum = [arr[0]];
  const map = {};
  for (let i = 1; i < arr.length; i++) {
    prefSum[i] = arr[i] + prefSum[i - 1];
  }

  console.log(prefSum);

  for (let i = 0; i < prefSum.length; i++) {
    if (prefSum[i] === x) return [0, i];
    const target = prefSum[i] + x;
    if (map.hasOwnProperty(prefSum[i])) {
      //   console.log(prefSum[i], map, target);
      return [map[prefSum[i]] + 1, i];
    } else {
      map[target] = i;
    }
  }

  return false;
}

console.log(findSubSum([9, -6, 5, 4, -2], 10));
