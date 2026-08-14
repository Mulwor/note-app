// ! 217. Contains Duplicate
// ! Link: https://leetcode.com/problems/contains-duplicate/description/

// ? Given an integer array nums, return true if any value appears at least
// ? twice in the array, and return false if every element is distinct.
// ? Input: nums = [1,2,3,1] ====> Output: true
// ? Input: nums = [1,2,3,4] ====> Output: false

// ! Решение, но не по условию
var containsDuplicate = function(nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i])
  }

  return set.size !== nums.length

  // * return new Set(nums).size !== nums.length;
};

// ! Первое решение
var containsDuplicate = function (nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    
    set.add(num);
  }
  
  return false;
};

// ! Второе решение
var containsDuplicate =(nums)=> {
  let numCount = {};
 
  for (let i = 0; i < nums.length; i++) {
    if (numCount[nums[i]]) {
      return true;
    } 
    
    numCount[nums[i]] = 1;
  }
 
  return false;
};    