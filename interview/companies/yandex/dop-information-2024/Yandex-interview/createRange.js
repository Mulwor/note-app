// console.log(range([4, 8], [1, 3, 4, 5, 8, 9]));
// console.log(range([5], [2, 4, 6, 8]));
// console.log(range([5, 10, 15], [3, 5, 7, 9, 11, 13, 15, 17, 19]));
// console.log(range([], [1, 2, 3]));
// console.log(range([2, 6, 8], []));
// console.log(range([3, 5, 7], [1, 2, 3, 8, 9]));
// console.log(range([-1, 0, 1], [-100, 100]));

function range(line, arr) {
  line.push(Infinity);
  const ranges = [[-Infinity, line[0]]];

  for (let i = 0; i < line.length - 1; i++) {
    ranges.push([line[i], line[i + 1]]);
  }
  let i = 0;

  const preRes = [];

  ranges.forEach((el) => {
    let sum = 0;
    let k = 0;

    while (i < arr.length && el[0] < arr[i] && arr[i] <= el[1]) {
      sum += arr[i];
      k++;
      i++;
    }

    preRes.push({
      quantity: k,
      sum: sum,
    });
  });

  return preRes;
}
