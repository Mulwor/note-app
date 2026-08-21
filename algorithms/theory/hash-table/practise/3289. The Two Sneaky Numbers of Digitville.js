// ! 3289. The Two Sneaky Numbers of Digitville

// ? In the town of Digitville, there was a list of numbers 
// ? called nums containing integers from 0 to n - 1. Each 
// ? number was supposed to appear exactly once in the list, 
// ? however, two mischievous numbers sneaked in an additional
// ? time, making the list longer than usual.

// ? As the town detective, your task is to find these two
// ? sneaky numbers. Return an array of size two containing
// ? the two numbers (in any order), so peace can return 
// ? to Digitville.

// ? Input: nums = [0,1,1,0] => Output: [0,1]
// ? Input: nums = [0,3,2,1,3,2] => Output: [2,3]
// ? Input: nums = [7,1,5,4,3,4,6,0,9,5,8,2] => Output: [4,5]

var getSneakyNumbers = function(nums) {
  let map = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    // Если нет у мапа значения то добавь его, если оно уже есть
    // то запушь в массив
    if (!map.has(nums[i])) {
      map.set(nums[i], true);
    } else {
      result.push(nums[i]);
    }
  }
    
  return result;
};

var getSneakyNumbers = function(nums) {
  let set = new Set()
  let res = []

  for (const num of nums) {
    if (set.has(num)) {
      res.push(num)
    } else {
      set.add(num)
    }
  }

  return res
};