// ! 125. Valid Palindrome
// ! Link: https://leetcode.com/problems/valid-palindrome/description/

// ? A phrase is a palindrome if, after converting all uppercase letters into
// ? lowercase letters and removing all non-alphanumeric characters, it reads 
// ? the same forward and backward. Alphanumeric characters include letters and numbers.
// ? Given a string s, return true if it is a palindrome, or false otherwise.

// ? 1. Input: s = "A man, a plan, a canal: Panama" ===> true 
// ? Explanation: "amanaplanacanalpanama" is a palindrome.

// ? Input: s = "race a car" ===> Output: false

var isPalindrome = function(s) {
  const transform = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = transform.length - 1;

  while (left < right) {
    if (transform[left] !== transform[right]) {
        return false
    }

    left++;
    right--;
  }

  return true
};