// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// отсортировать массив квадратов
var sortedSquares = function (nums) {
  const res = [];

  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    if (nums[l] * nums[l] > nums[r] * nums[r]) {
      res.push(nums[l] * nums[l]);
      l++;
    } else {
      res.push(nums[r] * nums[r]);
      r--;
    }
  }
  return res.reverse();
};
