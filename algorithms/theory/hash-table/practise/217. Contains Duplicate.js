// ! 217. Contains Duplicate
// ! Link: https://leetcode.com/problems/contains-duplicate/description/

// ? Given an integer array nums, return true if any value appears at least
// ? twice in the array, and return false if every element is distinct.
// ? Input: nums = [1,2,3,1] ====> Output: true
// ? Input: nums = [1,2,3,4] ====> Output: false

// ===================================================
var containsDuplicate = function(nums) {
  let set = new Set(nums);

  return set.size !== nums.length
};

// ===================================================
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

// ===================================================
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

// ====================================================
var containsDuplicate = function(nums) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let getValueMap = map.get(nums[i]) || 0;

        if (getValueMap > 0) {
            return true;
        }

        map.set(nums[i], getValueMap + 1);
    }

    return false;
};