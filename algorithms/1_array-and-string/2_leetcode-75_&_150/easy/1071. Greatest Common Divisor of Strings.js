// ! Task: 1071. Greatest Common Divisor of Strings
// ? Link: https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

// ! Description
// ? For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... +
// ? t + t (i.e., t is concatenated with itself one or more times). Given two strings 
// ? str1 and str2, return the largest string x such that x divides both str1 and str2.

// ! Examples
// ? Input: str1 = "ABCABC", str2 = "ABC" ===> Output: "ABC"
// ? Input: str1 = "ABABAB", str2 = "ABAB" ===> Output: "AB"
// ? Input: str1 = "LEET", str2 = "CODE" ===> Output: ""

// ! Resolve
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  // ABCABCABC !== ABCABCABC
  // LEETCODE !== CODELEET
  // ABCABCABC !== ABCABCDEF  

  const formulaGcd = (a, b) => b === 0 ? a : formulaGcd(b, a % b);
  // 3, 6 ===> 6 === 0 ? a : formulaGcd(6, 3 % 6)

  const gcdLength = formulaGcd(str1.length, str2.length);
  return str1.substring(0, gcdLength);
};