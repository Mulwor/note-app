// ! 3065. Minimum Operations to Exceed Threshold Value I
// * Link: https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/description/

// ? You are given a 0-indexed integer array nums, and an integer k. In one operation, you can remove 
// ? one occurrence of the smallest element of nums. Return the minimum number of operations needed 
// ? so that all elements of the array are greater than or equal to k.

var minOperations = function(nums, k) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    // ? 2, 10, 11, 1, 3 < 10
    if (nums[i] < k) {
      sum++
    }
  }

  return sum
};

minOperations([2,11,10,1,3], 10)
minOperations([1,1,2,4,9], 1)
minOperations([1,1,2,4,9], 9)

var minOperations = function(nums, k) {
  return nums.filter(num => {
    return num < k;
  }).length;
};

var minOperations = function (nums, k) {
  // ? 1. Next < k ? 1 : 0 — проверяет, меньше ли текущий элемент next числа k. Если да, 
  // ? то возвращает 1.
  // ? 2. На каждом шаге reduce добавляет 1 к carry, если текущий элемент меньше k, и 0 в противном случае.
  return nums.reduce((carry, next) => carry + (next < k ? 1 : 0), 0)
};