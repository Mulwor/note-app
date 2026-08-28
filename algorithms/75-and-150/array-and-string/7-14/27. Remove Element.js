// ! 27. Remove Element
// * Links: https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

// ? Input: nums = [3,2,2,3], val = 3
// ? Output: 2, nums = [2,2,_,_]

// ? Input: nums = [0,1,2,2,3,0,4,2], val = 2
// ? Output: 5, nums = [0,1,4,0,3,_,_,_]

var removeElement = function(nums, val) {
  nums.splice(
    0,                       // 1) с какой позиции начинаем менять
    nums.length,             // 2) сколько элементов удаляем (все)
    ...nums.filter(item => item !== val)  // 3) что вставляем на их место
  );
  return nums.length;
};

// Two pointers
var removeElement = function(nums, val) {
  let left = 0;
   
  for (let right = 0; right < nums.length; right++) {
    // Если текущее значение не равно val, то мы присваиваем
    // левому указателю правый и увеличиваем левый указатель
    if (nums[right] !== val) {
      nums[left] = nums[right]
      left++
    }
  }

  return left;
};
/*
  step: 0 ===> right: 0 ===> nums[right] = 3
    (nums[right] !== val) ===> 3 !== 3 ===> don't move
    [3, 2, 2, 3]
  step: 1 ===> right: 1 ===> nums[right] = 2
    (nums[right] !== val) ===> 2 !== 3 ===> nums[0] = 2, left++
    [2, 2, 2, 3]
  step: 2 ===> right: 2 ===> nums[right] = 2
    (nums[right] !== val) ===> 2 !== 3 ===> nums[0] = 2, left++
    [2, 2, 2, 3]
  step: 3 ===> right: 0 ===> nums[right] = 3
    (nums[right] !== val) ===> 3 !== 3  ===> don't move
    [2, 2, 2, 3]
*/

