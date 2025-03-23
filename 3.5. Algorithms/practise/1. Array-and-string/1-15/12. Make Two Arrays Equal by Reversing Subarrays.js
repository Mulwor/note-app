// ! 1460. Make Two Arrays Equal by Reversing Subarrays
// * Link: https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/description/

// ? You are given two integer arrays of equal length target and arr. In one step, you can select 
// ? any non-empty subarray of arr and reverse it. You are allowed to make any number of steps.
// ? Return true if you can make arr equal to target or false otherwise.

// ? Input: target = [1,2,3,4], arr = [2,4,1,3] ===> true 
// ? Input: target = [7], arr = [7] ===> true
// ? Input: target = [3,7,9], arr = [3,7,11] ===> false
// ? Input: target = [360,392], arr = [392,360] ===> true
// ? Input: target = [392,360], arr = [360,392] ===> true

var canBeEqual = function(target, arr) {
  let sortArrayTarget = target.sort((a, b) => a - b);
  let sortArray = arr.sort((a, b) => a - b); 

  return JSON.stringify(sortArrayTarget) === JSON.stringify(sortArray)
  //  _.isEqual(target, arr);
};


var canBeEqual = function (target, arr) {
  const sortedTarget = target.sort();
  const sortedArr = arr.sort();

  for (let i = 0; i < target.length; i++) {
    if (sortedTarget[i] != sortedArr[i]) return false;
  }

  return true;
};

var canBeEqual = function(target, arr) {
  let arr1 = target.sort((a, b) => a - b).toString();
  let arr2 = arr.sort((a, b) => a - b).toString();
  
  return arr1 === arr2;
};