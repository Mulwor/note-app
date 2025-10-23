// количество пар чисел, разницы которых >= k
const data = [1, 2, 3, 4]; // k = 3;
//n log n через бин поиск, можно через окно за линию
function coupleNum(arr, k) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const target = arr[i] + k;
    let l = i;
    let r = arr.length - 1;
    while (l <= r) {
      const mid = Math.ceil((l + r) / 2);
      if (arr[mid] >= target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }

    if (arr[l] >= target) sum += arr.length - l;
    console.log(arr.length - l);
  }
  console.log(sum);
}
coupleNum(data, 3);
