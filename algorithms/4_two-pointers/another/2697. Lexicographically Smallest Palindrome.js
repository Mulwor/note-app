// ? 2697. Lexicographically Smallest Palindrome
// ! Link: https://leetcode.com/problems/lexicographically-smallest-palindrome/description/

// ? Input: s = "egcfe" ===> Output: "efcfe"
// ? Input: s = "abcd" ===> Output: "abba"

// ! Первое решение
var makeSmallestPalindrome = function(s) {
  let result = s.split("")

  let left = 0;
  let right = result.length - 1;

  while (left < right) {
    if (result[left] < result[right]) {
      result[right] = result[left]
    } else {
      result[left] = result[right]
    }

    left++
    right--
  }

  return result.join("")
};

// ! Второе решение
var makeSmallestPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;
  let str = s.split('');

  while(left < right) {
      if(str[left] !== str[right]) {
        if (str[left] < str[right]) {
          str[right] = str[left];
        } else {
          str[left] = str[right];
        }
      }
      
      left++;
      right--;
  }

  return str.join('');
};