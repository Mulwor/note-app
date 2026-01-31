// ! 2956. Find Common Elements Between Two Arrays
// ! Link: https://leetcode.com/problems/find-common-elements-between-two-arrays/

// ? You are given two integer arrays nums1 and nums2 of sizes n and m, 
// ? respectively. Calculate the following values:

// ? answer1 : the number of indices i such that nums1[i] exists in nums2.
// ? answer2 : the number of indices i such that nums2[i] exists in nums1.
// ? Return [answer1,answer2].

// Input: nums1 = [2,3,2], nums2 = [1,2]
// Output: [2,1]

var findIntersectionValues = function(nums1, nums2) {
  let count1 = 0; 
  let count2 = 0; 
    
  for (let i = 0; i < nums1.length; i++) {
    // Есть массив и проверяет есть ли внутри элементы 1, 2 с помощью цикла
    if (nums2.includes(nums1[i])) {
      count1++;
    }
  }
    
  for (let j = 0; j < nums2.length; j++) {
    if (nums1.includes(nums2[j])) {
      count2++;
    }
  }
    
  return [count1, count2];
};

var findIntersectionValues = function(nums1, nums2) {
  let length1 = nums1.filter((num) => nums2.includes(num)).length
  let length2 = nums2.filter((num) => nums1.includes(num)).length

  return [length1, length2]
};


var findIntersectionValues = function(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let answer1 = 0;
  let answer2 = 0;

  for (let num of nums1){
    if(set2.has(num)){
      answer1++;
    }
  }
  for (let num of nums2){
    if(set1.has(num)){
      answer2++;
    }
  }
  return [answer1, answer2];
};