// ! 151. Reverse Words in a String
// * https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75

// ? Given an input string s, reverse the order of the words. A word is defined as 
// ? a sequence of non-space characters. The words in s will be separated by at least 
// ? one space.

// ? Return a string of the words in reverse order concatenated by a single space. Note 
// ? that s may contain leading or trailing spaces or multiple spaces between two words. 
// ? The returned string should only have a single space separating the words. Do not 
// ? include any extra spaces.

// ! ============================================ Example ===================================
reverseWords("the sky is blue");      // ! "blue is sky the"
reverseWords("  hello world  " );     // ! "world hello"
reverseWords("a good   example");     // ! "example good a"

// ! ========================================================================================
var reverseWords = function(s) {
  // ! .replace - Убираем все пробелы по середине
  // ! .trim - убираем в начале и в конце пробелы
  let removeSpace = s.trim().replace(/\s+/g, ' ').trim()

  return removeSpace.split(" ").reverse().join(" ")
};

// ! ========================================================================================

var reverseWords = function(s) {
  // ? .split(/\s+/) разделит строку везде, где встретится непрерывная последовательность 
  // ? из одного или нескольких пробельных символов.
  return s.trim().split(/\s+/).reverse().join(" ");
};

// ! =======================================================================================

var reverseWords = function(s) {
  return s.trim().split(" ").filter(Boolean).reverse().join(" ")
}

// ! =======================================================================================

var reverseWords = function(s) {
  let words = s.split(" ").filter(elem => elem !== '');

  let ans = "";
  for (let i = words.length - 1; i >= 0; i--){
    if (words[i] !== ''){
      ans += words[i];
      
      if( i > 0 && words[i] !== ''){
        ans += " ";
      }
    }
  }

  return ans;
};

var reverseWords = function(s) {
  s = s.split(" ")

  let res = []
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i]) {
      res.push(s[i])
    }
  }
  return res.join(" ")
};