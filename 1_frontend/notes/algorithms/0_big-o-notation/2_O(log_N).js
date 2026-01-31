// !=============================== Пример №0 - Бинарный поиск =================================
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Нашли элемент
    } else if (arr[mid] < target) {
      left = mid + 1; // Ищем в правой половине
    } else {
      right = mid - 1; // Ищем в левой половине
    }
  }

  return -1; // Элемент не найден
}

const arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(arr, 7)); // Выведет: 3

// !=============================== Пример №1 - Поиск степени двойки ==================================
function isPowerOfTwo(n) {
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return n === 1;
}

console.log(isPowerOfTwo(8));  // true
console.log(isPowerOfTwo(10)); // false

// !=============================== Пример №2 - Логарифмическая рекурсия ==================================
function logRecursion(n) {
  if (n <= 1) return;
  console.log(n);
  logRecursion(Math.floor(n / 2));
}

logRecursion(16); // 16, 8, 4, 2

// !=============================== Пример №3 - Быстрое возведение в степень =================================
function power(base, exponent) {
  let result = 1;
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result *= base;
    }
    base *= base;
    exponent = Math.floor(exponent / 2);
  }
  return result;
}

console.log(power(2, 10)); // 1024

