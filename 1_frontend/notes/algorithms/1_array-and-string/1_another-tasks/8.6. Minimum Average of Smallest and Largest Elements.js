// ! 3194. Minimum Average of Smallest and Largest Elements
// ! Link: https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/description/

// ? You have an array of floating point numbers averages which is initially
// ? empty. You are given an array nums of n integers where n is even.

// ? You repeat the following procedure n / 2 times: Remove the smallest element,
// ? minElement, and the largest element maxElement, from nums. Add (minElement +
// ? maxElement) / 2 to averages.Return the minimum element in averages.

// ? Step ===> nums =================> averages
// ? 0	===> [7, 8, 3, 4, 15, 13, 4, 1] ===>	[]
// ? 1	===> [7, 8, 3, 4, 13, 4] ===>	[8]
// ? 2	===> [7, 8, 4, 4] ===>	[8,8]
// ? 3  ===> [7, 4]	===> [8, 8, 6]
// ? 4  ===> [] ===> [8,8,6,5.5] 

var minimumAverage = function(nums) {
  nums.sort((a, b) => a - b);
  
  let res = [];

  for (let i = 0; i < nums.length / 2; i++) {
    let min = nums[i];                        // ? 1, 3, 4, 4
    let max = nums[nums.length - 1 - i];      // ? 15, 13, 8, 7
    res.push((min + max) / 2);
  }

  return Math.min(...res);
};


// * Two pointers 
var minimumAverage = function(nums) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let min = Infinity;

  while(left < right) {
    let average = (nums[left] + nums[right]) / 2;
    if (average < min) { 
      min = average
    }
    left++
    right--
  }
  return min
};