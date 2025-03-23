// ! 1464. Maximum Product of Two Elements in an Array
// * Link: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/

// ? Given the array of integers nums, you will choose two different indices i and j of that 
// ? array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
// ? Input: nums = [3,4,5,2] ======> Output: 12 
// ? Input: nums = [1,5,4,5] ======> Output: 16
// ? Input: nums = [3,7] ======> Output: 12

// ! Первое решение
var maxProduct = function(nums) {
  let result = nums.sort((a, b) => b - a)
  
  return (result[0] - 1) * (result[1] - 1)
};

// ! Второе решение
var maxProduct = function(nums) {
  let firstMax = 0;
  let secondMax = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstMax) {
      secondMax = firstMax;
      firstMax = nums[i];
    } else if (nums[i] > secondMax) {
      secondMax = nums[i];
    }
  }

  return (firstMax - 1) * (secondMax - 1);
};