// ! 169. Majority Element
// * Links: https://leetcode.com/problems/majority-element/description/

// ? Given an array nums of size n, return the majority element.
// ? The majority element is the element that appears more
// ? than ⌊n / 2⌋ times. You may assume that the majority element
// ? always exists in the array.

// ! Input: nums = [3,2,3] ===> Output: 3
// ! Input: nums = [2,2,1,1,1,2,2] ===> Output: 2

var majorityElement = function(nums) {
  let map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }


  let maxKey = null;
  let maxCount = 0;

  // ? Проходит по ключу и значение из Hash table (map)
  for (let [key, count] of map) {
    // ? При каждой итерации проверяем больше ли текущий count чем maxCount
    // ? 2 > 0; 1 > 2 
    if (count > maxCount) {
      // ? Если да, то мы обновляем maxCount на новое большое значение
      maxCount = count;
      // ? А в maxKey запоминаем тек.ключ
      maxKey = key;
    }
  }

  return maxKey;
};

var majorityElement = function(nums) {
  let map = new Map();
  const half = nums.length / 2;

  for (let num of nums) {
    let count = (map.get(num) || 0) + 1;
    map.set(num, count);
    if (count > half) return num;
  }
};

// ! Python
// def majorityElement(nums):
//     counts = {}
//     half = len(nums) / 2
//     for num in nums:
//         count = counts.get(num, 0) + 1
//         counts[num] = count
//         if count > half:
//             return num