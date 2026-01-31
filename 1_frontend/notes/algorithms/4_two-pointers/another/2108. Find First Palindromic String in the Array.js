// ? 2108. Find First Palindromic String in the Array
// ! Link: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

// ? Given an array of strings words, return the first palindromic string 
// ? in the array. If there is no such string, return an empty string "".
// ? A string is palindromic if it reads the same forward and backward.

// ? Вернуть первый палиндром
// ? Input: words = ["abc","car","ada","racecar","cool"]
// ? Output: "ada"


// * Two pointer ===> 1
var firstPalindrome = function(words) {
  for(let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      return words[i];
    }
  }
  return '';
};

function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}


// ============================================================================

// * Array ===> 1
var firstPalindrome = function(words) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let reverse = words[i].split("").reverse().join("")
    
    if (words[i] === reverse) {
      result.push(words[i])
    }
  }

  return result.length === 0 ? "" : result[0]
};

// * Array ===> 2
var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    let reversed = words[i].split('').reverse().join('');
      
    if (reversed === words[i]) {
      return words[i]
    }
  }

  return ""
}
