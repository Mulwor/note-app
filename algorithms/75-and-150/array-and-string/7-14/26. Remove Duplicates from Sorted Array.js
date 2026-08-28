// ! 26. Remove Duplicates from Sorted Array
// * Links: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150


// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// ! Hash table
var removeDuplicates = function(nums) {
  let result = [...new Set(nums)]

  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i];
  }

  return result.length;
};

// ! Two pointer
var removeDuplicates = function(nums) {
  let left = 0;
   
  for (let right = 0; right < nums.length; right++) {
    // Если текущее значение не равно val, то мы присваиваем
    // левому указателю правый и увеличиваем левый указатель
    if (nums[right] !== nums[right + 1]) {
      nums[left] = nums[right]
      left++
    }
  }

  return left;
};

