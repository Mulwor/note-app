// ! 1464. Maximum Product of Two Elements in an Array
// ! Link: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/

// ? Given the array of integers nums, you will choose two different indices i and j of that 
// ? array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Input: nums = [3,4,5,2] ======> Output: 12 
// Input: nums = [1,5,4,5] ======> Output: 16
// Input: nums = [3,7] ======> Output: 12

var maxProduct = function(nums) {
  let result = nums.sort((a, b) => b - a)
  
  return (result[0] - 1) * ( result[1] - 1)
};