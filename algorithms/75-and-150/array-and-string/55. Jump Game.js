// ! Task: 55. Jump Game
// ? Link: https://leetcode.com/problems/jump-game/description/

// ! Description
// ? You are given an integer array nums. You are initially positioned 
// ? at the array's first index, and each element in the array 
// ? represents your maximum jump length at that position. Return true 
// ? if you can reach the last index, or false otherwise.

// ! Examples
// ? Input: nums = [2,3,1,1,4] ===> Output: true
// ? Explanation: Jump 1 step from index 0 to 1, 
// ? then 3 steps to the last index.

var canJump = function(nums) {
  let goal = nums.length - 1

  for (let i = nums.length - 1; i >= 0; i--) {
    // На каждой итерации проверяем, можем ли мы добраться до goal
    // или перепрыгнуть его
    // nums[i] => 4, 1, 1, 3, 2
    // i => 4, 3, 2, 1, 0,
    // i + nums[i] => 8 4 3 4 2
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
};

var canJump = function (nums) {
  let start = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= start) {
      start = i;
    }
  }
  
  return start === 0;
};