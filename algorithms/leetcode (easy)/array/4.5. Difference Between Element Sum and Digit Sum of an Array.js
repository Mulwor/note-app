// ! 2535. Difference Between Element Sum and Digit Sum of an Array
// * https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/

// ? You are given a positive integer array nums.
// ? The element sum is the sum of all the elements in nums. The digit sum is the
// ? sum of all the digits (not necessarily distinct) that appear in nums.
// ? Return the absolute difference between the element sum and digit sum of nums.

// ? Note that the absolute difference between two integers x and y is defined as |x - y|.


var differenceOfSum = function(nums) {
  let elementSum = 0;
  let digitSum = 0;
  let digit = nums.join("").split("").map((str) => parseInt(str, 10))

  for (let i = 0; i < nums.length; i++) {
    elementSum += nums[i]
  }

  for (let j = 0; j < digit.length; j++) {
    digitSum += digit[j]
  }

  return elementSum - digitSum
};


var differenceOfSum = function(nums) {
  let elementSum = 0;
  let digitSum = 0;
  let digits = nums.join('').split('')

  for (let i = 0; i < digits.length; i++) {
    digitSum += parseInt(digits[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    elementSum += nums[i]
  }

  return elementSum - digitSum
};

var differenceOfSum = function(nums) {
  const getElementsSum = (elements) => elements.reduce((partialSum, num) => partialSum + num, 0);
  const getDigitSum = (digits) => digits.reduce((acc, num) => {
      const numArray = num.toString().split('').map(s => Number(s));
      return acc + getElementsSum(numArray);
  }, 0);

  const elementsSum = getElementsSum(nums);
  const digitSum = getDigitSum(nums);

  return Math.abs(elementsSum - digitSum);
};