// ! https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

// ? You are given two strings word1 and word2. Merge the strings by adding letters in
// ? alternating  order, starting with word1. If a string is longer than the other, 
// ? append the additional letters onto the end of the merged string. Return the merged 
// ? string.

// ? First-example: Input: word1 = "abc", word2 = "pqr" ===> "apbqcr"
// ? Second-example: Input: word1 = "ab", word2 = "pqrs" ===> "apbqrs"
// ? Third-example: Input: word1 = "abcd", word2 = "pq" ===> "apbqcd"

// ! ==================================== Первый способ ==========================================

var mergeAlternately = function(word1, word2) {
  let maxstr = Math.max(word1.length, word2.length);
  let result = "";

  for (let i = 0; i < maxstr; i++ ) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }

  return result
};

var mergeAlternately = function(word1, word2) {
  let maxLength = Math.max(word1.length, word2.length);    // O(1)

  let str = ""; 

  for (let i = 0; i < maxLength; i++) {
    if (word1[i]) str += word1[i]
    if (word2[i]) str += word2[i]
  }

  return str
};

// ! ==================================== Второй способ ==========================================

var mergeAlternately = function(word1, word2) {
  let result = [];                                            // O(1)
  let maxLength = Math.max(word1.length, word2.length);       // O(1)

  for (let i = 0; i < maxLength; i++) {                       // O(n)
    result.push(word1[i])                                     // O(1)
    result.push(word2[i])
  }

  return result.filter((el) => el !== undefined).join("")     // O(n)
};