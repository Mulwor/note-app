// ! 80. Remove Duplicates from Sorted Array II
// ? Links: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/

// * Description: Отсортировать массив так чтобы элемент не встречался не более 2 раз

// ? Input: nums = [1,1,1,2,2,3]
// ? Output: 5, nums = [1,1,2,2,3,_]

// ? Input: nums = [0,0,1,1,1,1,2,3,3]
// ? Output: 7, nums = [0,0,1,1,2,3,3,_,_]

// ? Two pointers
var removeDuplicates = function(nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (left < 2 || nums[right] !== nums[left - 2]) {
      nums[left] = nums[right]
      left++
    }
  }  

  return left
};

var removeDuplicates = function(nums) {
  let left = 2;
  
  for (let right = 2; right < nums.length; right++) {
    if(nums[right] != nums[left-2]){
      nums[left]= nums[right]
      left++
    }
  }
    
  return left
};


// Hash map 
var removeDuplicates = function(nums) {
  let map = new Map()

  for(let i = 0; i < nums.length; i++) {
    let count = map.get(nums[i]) || 1
    
    if (count > 2) {
      nums.splice(i, 1)
      i--;
    } else{
      map.set(nums[i], count + 1)
    }
  }

  return nums.length;  
};