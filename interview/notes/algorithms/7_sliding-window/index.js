// ? Скользящее окно (sliding window) — это алгоритмическая техника, которая используется для работы с 
// ? подмножествами данных в массиве или строке. Она помогает эффективно находить, например, сумму или
// ? максимум подмножества данных фиксированного размера, проходя по массиву с минимальными вычислениями.

function maxSum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  // Сдвигаем окно по массиву
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // Добавляем новый элемент и убираем старый
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

const arr = [1, 2, 3, 4, 5];
const k = 3;
console.log(maxSum(arr, k)); // Вывод: 12