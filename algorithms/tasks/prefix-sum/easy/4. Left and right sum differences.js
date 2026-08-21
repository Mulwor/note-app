// ! 2574. Left and Right Sum Differences
// ! Link: https://leetcode.com/problems/left-and-right-sum-differences/description/

// ? Given a 0-indexed integer array nums, find a 0-indexed integer array
// ? answer where: answer[i] = |leftSum[i] - rightSum[i]|. Examples: 

// ? Input: nums = [10,4,8,3] ====> Output: [15,1,11,22]

// *  left sum:
// *  1. 0 + 10 => 10
// *  2. 0 + 10 + 4 => 14
// *  3. 0 + 10 + 4 + 8 => 22
// *  Result: [0, 10, 14, 22]

// *  right sum:
// *  1. 0 + 3 => 3
// *  2. 0 + 3 + 8 => 11
// *  3. 0 + 3 + 8 + 4 => 15
// *  Result: [0, 3, 11, 15]

// ? Result [0, 10, 14, 22] - [15, 11, 3, 0] ===> [15,1,11,22]

const leftRightDifference = function(nums) {
  let leftSum = new Array(nums.length).fill(0);        // * [ 0, 0, 0, 0 ]
  let rightSum = new Array(nums.length).fill(0);     
  let result = []

  for (let i = 1; i < nums.length; i++) {
    // console.log(nums[i])                            // * nums[i] ===> 4, 8, 3
    leftSum[i] += leftSum[i - 1] + nums[i - 1];
    // ? leftSum[0, 0, 0] += leftSum[0, 10, 14] + nums[10, 4, 8]
  }

  // ? nums.length - 2 ===> цикл начинается с предпоследнего элемента массива. Например
  // ? у [0, 1, 2, 3, 4] будет 3. Цикл будет идти пока не достигнет меньше или равно нулю
  // ? i-- означает, цикл идет по массиву справа налево.
  for (let i = nums.length - 2; i >= 0; i--) {
    // console.log(nums[i])                            // * nums[i] ===> 8, 14, 10
    rightSum[i] = rightSum[i + 1] + nums[i + 1];
    // ? rightSum[0, 0, 0] = rightSum[0, 3, 11] + nums[3, 8, 14]
  }
    
  for (let i = 0; i < nums.length; i++) {
    result.push(Math.abs(leftSum[i] - rightSum[i]));
  }
    
  return answer;
};