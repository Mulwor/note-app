// ! 1768. Merge-strings-alternately
// * https://leetcode.com/problems/merge-strings-alternately/description/

// ? You are given two strings word1 and word2. Merge the strings by adding letters 
// ? in alternating order, starting with word1. If a string is longer than the other, 
// ? append the additional letters onto the end of the merged string. Return the merged string.

// ? First-example: Input: word1 = "abc", word2 = "pqr" ===> "apbqcr"
// ? Second-example: Input: word1 = "ab", word2 = "pqrs" ===> "apbqrs"
// ? Third-example: Input: word1 = "abcd", word2 = "pq" ===> "apbqcd"

// ! Первое решение (мое)
var mergeAlternately = function(word1, word2) {
  let result = [];                                            // O(1)
  let maxLength = Math.max(word1.length, word2.length);       // O(1)
  // let maxLength = word1.length > word2.length ? word1.length : word2.length;

  for (let i = 0; i < maxLength; i++) {                       // O(n)
    result.push(word1[i])                                     // O(1)
    result.push(word2[i])
  }

  return result.filter((el) => el !== undefined).join("")     // O(n)
};

// ! Второе решение
var mergeAlternately = function(word1, word2) {
  let res = "";
  let maxLength = Math.max(word1.length, word2.length); 

  for (let i = 0; i < maxLength; i++) {
    // Проверяет на undefined
    if (word1[i]) res += word1[i];
    if (word2[i]) res += word2[i];
  } 

  return res;
};