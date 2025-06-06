// ! Theory on: https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
// ! Do not return anything, modify nums1 in-place instead.

// ? Examples:

// ? Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// ? Output: [1,2,2,3,5,6]

// ? Input: nums1 = [1], m = 1, nums2 = [], n = 0
// ? Output: [1]

// ? Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// ? Output: [1]

// ? Первое решение
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m)                         // 1, 2, 3

  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i])
  }

  return nums1.sort((a, b) => a - b)
};

var merge = function (nums1, m, nums2, n) {
  nums2.forEach((e) => {
    nums1.splice(nums1.indexOf(0), 1, e)
  })
  
  nums1.sort((a, b) =>a-b)
};

// ? Теория: splice()
// ? array.splice(start, deleteCount, itemN) 
// ? start - Индекс, по которому начинает изменять массив.

// ? Второе решение

var merge = function(nums1, m, nums2, n) {
  let lastNums1Index = m - 1;
  let lastNums2Index = n - 1;
  let mergedIndex = m + n - 1;

  while (lastNums2Index >= 0) {
    if (lastNums1Index >= 0 && nums1[lastNums1Index] > nums2[lastNums2Index]) {
      nums1[mergedIndex--] = nums1[lastNums1Index--];
    } else {
      nums1[mergedIndex--] = nums2[lastNums2Index--];
    }
  }
};

