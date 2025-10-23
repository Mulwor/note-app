// сколько было максимум людей в гостинице за раз

function maxVisitors(arr) {
  let max = 0;
  let res = 0;
  const map = {};

  for (let el of arr) {
    if (el[0] > max) max = el[0];

    if (map.hasOwnProperty(el[0])) {
      map[el[0]][0]++;
    } else {
      map[el[0]] = [1, 0];
    }

    if (map.hasOwnProperty(el[1])) {
      map[el[1]][1]++;
    } else {
      map[el[1]] = [0, 1];
    }
  }
  let k = 0;
  for (let i = 0; i <= max; i++) {
    if (map.hasOwnProperty(i)) {
      k += map[i][0] - map[i][1];
    }
    if (res < k) res = k;
  }
  // console.log(map, max);
  return res;
}

console.log(
  maxVisitors([
    [0, 1],
    [1, 5],
    [3, 4],
    [4, 5],
  ])
);

console.log(
  maxVisitors([
    [1, 2],
    [2, 3],
  ])
);

function maxVisit(arr) {
  const map = {};
  let max = 0;
  arr.sort((a, b) => a[0] - b[0]);
  console.log(arr);
  let i = 0;
  let k = 0;
  //for (let i = 0; i < arr.length; i++) {
  while (i < arr.length) {
    const cur = arr[i][0];
    // console.log(map, cur);
    while (i < arr.length && arr[i][0] === cur) {
      if (map[arr[i][0]]) {
        k -= map[arr[i][0]];
      }
      k++; // 1
      map[arr[i][1]]
        ? (map[arr[i][1]] = map[arr[i][1]] + 1)
        : (map[arr[i][1]] = 1);
      i++;
      if (max < k) max = k;
    }
    if (i + 1 < arr.length)
      for (let j = cur; j < arr[i][0]; j++) {
        console.log(j);
        if (map[j]) {
          k -= map[j];
        }
      }
  }
  return max;
}
