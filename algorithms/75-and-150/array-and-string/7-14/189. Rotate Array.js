// ! 189. Rotate Array
// ? Links: https://leetcode.com/problems/rotate-array/description/

// ! Description
// ? Given an integer array nums, rotate the array to the right by 
// ? k steps, where k is non-negative.

// ! Examples
// ? Input: nums = [1,2,3,4,5,6,7], k = 3 ====> Output: [5,6,7,1,2,3,4]
// ? Input: nums = [-1,-100,3,99], k = 2 ===> Output: [3,99,-1,-100]


var rotate = function(nums, k) {
  // Проходимся с конца массива и добавляем 3 новых айтема
  for (let i = nums.length - 1; i >= 0; i--) {
    // nums[i] => 7 6 5 4 3 2 1
    // nums[i + k] => 0 0 0 7 6 5 4
    nums[i + k] = nums[i]
  }

  // nums = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7]

  for (let j = k - 1; j >= 0; j--) {
    // nums[0] = 5, nums[1] = 6, nums[3] = 7 
    
    // nums.pop() => удаляет и возвращает
    // 3 => 7
    // 2 => 6
    // 1 => 5
    nums[j] = nums.pop()                // [3 2 1]
  }
};


var rotate = function(nums, k) {
    let n = nums.length;

    if (nums.length === 1){
      return;
    }

    if (k > n){
      k = k % n;
    }
    
    let arr = [];

    for(let i = n - k; i < nums.length; i++){
      arr.push(nums[i]); // 6,7,8
    }

    for(let i = 0; i < n - k; i++){
      arr.push(nums[i]); // 6,7,8,1,2,3,4,5
    }
    
    for(let i=0;i<nums.length;i++){
      nums[i] = arr[i];
    }
};


var rotate = function(nums, k) {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}