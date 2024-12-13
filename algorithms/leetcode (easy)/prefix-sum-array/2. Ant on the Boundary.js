// ! 3028. Ant on the Boundary
// ! Link: https://leetcode.com/problems/ant-on-the-boundary/description/

// ? Пояснения - необходимо увеличивать счетчик когда у нас он доходит до границы
// ? 0 

var returnToBoundaryCount = function(nums) {
  let debounce = 0;
  let prefixSum = [];
  prefixSum[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i]

    if (prefixSum[i] === 0) {
      debounce++
    }
  }

  return debounce
};


var returnToBoundaryCount = function(nums) {
  let count = 0;
  let sum = 0;

  for(let i = 0; i < nums.length; i++) {
    sum += nums[i]
      
    if(sum == 0) {
      count++
    }
  }
  return count
}