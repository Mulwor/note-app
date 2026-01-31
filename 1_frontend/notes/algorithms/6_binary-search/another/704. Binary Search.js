// ? Given an array of integers nums which is sorted in ascending order,
// ? and an integer target, write a function to search target in nums. 
// ? If target exists, then return its index. Otherwise, return -1.

// ? You must write an algorithm with O(log n) runtime complexity.

// ! Example___1
// ? Input: nums = [-1,0,3,5,9,12], target = 9
// ? Output: 4
// ? Explanation: 9 exists in nums and its index is 4

// ! Example___2
// ? Input: nums = [-1,0,3,5,9,12], target = 2
// ? Output: -1
// ? Explanation: 2 does not exist in nums so return -1

var search = function(nums, target) {
  // [-1, 0, 3, 5, 9, 12]
  let min = 0;
  let max = nums.length - 1;      // 5

  while (min <= max) {
    // 0 <= 5

    let middle = Math.floor((min + max) / 2);  
    // Первый цикл: (0 + 5) / 2 => 2.5 => 2
    // Второй цикл: (3 + 5) / 2 => 4

    if (nums[middle] === target) {
      // Первый цикл: nums[2] === 9 ===> 3 === 9
      // Второй цикл: nums[4] === 9 ===> 9 === 9 возвращает 4
      return  middle; 
    } else if (nums[middle] < target){
      // Первый цикл: 3 < 9 ===> (0 + 5)/2 => 2.5 => 2 + 1 => 3
      min =  middle + 1;
    } else if (nums[middle] > target){
      max =  middle - 1;    // Сдвиг влево
    }
  }

  return -1;
};

// ? 