// ! 28. Find the Index of the First Occurrence in a String
// * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

// ? Given two strings needle and haystack, return the
// ? index of the first occurrence of needle in haystack,
// ?  or -1 if needle is not part of haystack.

// ? Input: haystack = "sadbutsad", needle = "sad"
// ? Output: 0

// ? Input: haystack = "leetcode", needle = "leeto"
// ? Output: -1

var strStr = function(haystack, needle) {
  // ? возвращает первый индекс, по которому данный элемент может 
  // ? быть найден в массиве или -1, если такого индекса нет.
  return haystack.indexOf(needle);
}

var strStr = function(haystack, needle) {
  for (let i = 0; i <= haystack.length-needle.length; i++){
    if(haystack.slice(i, i + needle.length) === needle){
      return i;
    }
  }   
    
  return -1;
};