// ! 349. Intersection of Two Arrays
// ! Link https://leetcode.com/problems/intersection-of-two-arrays/description/

// ? Given two integer arrays nums1 and nums2, return an array of their intersection. 
// ? Each element in the result must be unique and you may return the result in any order.
// ? Input: nums1 = [1,2,2,1], nums2 = [2,2] ========> Output: [2]
// ? Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] ========> Output: [9,4]

var intersection = function(nums1, nums2) {
  let set = new Set(nums1);
  let filterSet = new Set()

  for (let element of nums2){
    if (set.has(element)) {
      filterSet.add(element)
    }
  }

  return [...filterSet]
};

// ! ==========================================================
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result = [];

  for (let nums of set2) {
    if (set1.has(nums)) {
      result.push(nums)
    }
  }

  return result
};


// ! ==========================================================
var intersection = function(nums1, nums2) {
  let result = [];
  
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if(nums1[i] == nums2[j]){
        result.push(nums1[i])
        break
      }
    }
  }
      
  return [...new Set(result)]  
};


// ! ==========================================================
var intersection = function (nums1, nums2) {
  let set = new Set();

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      set.add(nums1[i])
    };
  }

  return Array.from(set);
};


// ! ==========================================================
var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  
  return [...new Set(nums2.filter(x => set.has(x)))];
};