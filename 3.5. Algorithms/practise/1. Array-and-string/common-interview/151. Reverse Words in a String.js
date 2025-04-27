// ! 151. Reverse Words in a String
// * https://leetcode.com/problems/reverse-words-in-a-string/description/

// ? Given an input string s, reverse the order of the words. A word is defined as a sequence of
// ? non-space characters. The words in `s` will be separated by at least one space. Return a string
// ? of the words in reverse order concatenated by a single space.  Note that s may contain leading
// ? or trailing spaces or multiple spaces between two words. The returned string  should only have  
// ? a single space separating the words. Do not include any extra spaces.

// ? Input: s = "the sky is blue"  ====> Output: "blue is sky the"
// ? Input: s = "  hello world  "  ====> Output: "world hello"
// ? Input: s = "a good   example" ====> Output: "example good a"


// * =============================================================================================


// ! 1. Решение
var reverseWords = function(s) {
  // ? split(" ") - Худший случай: O(n), где n — длина строки.
  // ? reverse() - Это сложность: O(m).
  // ? filter(item => item !== "") - Сложность: O(m).
  // ? join(" ") - Худший случай: O(n), так как нужно склеить все слова в одну строку.
  return s.split(" ").reverse().filter((item) => item !== "").join(" ")
};



// ! 1.1. Решение
var reverseWords = function(s) {
  // ? split(" ") - Худший случай: O(n), где n — длина строки.
  // ? reverse() - Это сложность: O(m).
  // ? filter(item => item !== "") - Сложность: O(m).
  // ? join(" ") - Худший случай: O(n), так как нужно склеить все слова в одну строку.
  return s.split(" ").reverse().filter((item) => item).join(" ")
};



// ! 2. Решение
var reverseWords = function(s) {
  let removeSpace = s.replace(/ +(?= )/g,'').trim()
  // s.replace(/\s+/g," ")

  return removeSpace.split(' ').reverse('').join(' ')
};



// ! 3. Решение
var reverseWords = function(s) {
  let words = s.split(' ');
  let res = [];

  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i]) res.push(words[i]);
  }

  return res.join(' ');
};