// ! 2913. Subarrays Distinct Element Sum of Squares I
// ! Link: https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/description/

// ? You are given a 0-indexed integer array nums. The distinct count of a subarray 
// ? of nums is defined as:

// ? Let nums[i..j] be a subarray of nums consisting of all the indices from i to j 
// ? such that 0 <= i <= j < nums.length. Then the number of distinct values in 
// ? nums[i..j] is called the distinct count of nums[i..j].

// ? Return the sum of the squares of distinct counts of all subarrays of nums.
// ? A subarray is a contiguous non-empty sequence of elements within an array.

// ? Input: nums = [1,2,1] =====> Output: 15
// ? [1]: 1 distinct value
// ? [2]: 1 distinct value
// ? [1]: 1 distinct value
// ? [1,2]: 2 distinct values
// ? [2,1]: 2 distinct values
// ? [1,2,1]: 2 distinct values
// ? The sum of the squares of the distinct counts in all subarrays is equal 
// ? to 12 + 12 + 12 + 22 + 22 + 22 = 15.

var sumCounts = function(nums) {
  let res = 0;
  
  // ? [1, 2, 1]
  for (let i = 0; i < nums.length; i++) {
    // ? Первая итерация по циклу: 1
    // ? Вторая итерация по циклу: 2
    // ? Третья итерация по циклу: 1

    // ? При каждой итерации создается new Set
    let set = new Set();
      
    for (let j = i; j < nums.length; j++) {          
    // * Можно заменить на for (let j = 0; j < nums.length; j++) {  if (j >= i) { ... }
      // ? Первая итерация по циклу: 1, 2, 1 
      // ? Вторая итерация по циклу: 2, 1
      // ? Третья итерация по циклу: 1
      
      set.add(nums[j])

      // * Добавляем результат первого цикла
      // ? Set(1) { 1 }     
      // ? Set(1) { 2 }
      // ? Set(1) { 1 }

      // * Добавляем второй цикла
      // ? Set(2) { 1, 2 }
      // ? Set(2) { 1, 2 }
      // ? Set(2) { 2, 1 }

      // ? 3. set.size – возвращает количество элементов внутри Set 
      // ? и возводит в степень.
      let value = set.size ** 2
      res += value
    }
  }

  return res;
};

