// ? Given an input string s, reverse the order of the words.

// ? A word is defined as a sequence of non-space characters. The words in 
// ? `s` will be separated by at least one space. Return a string of the words 
// ? in reverse order concatenated by a single space. 

// ? Note that s may contain leading or trailing spaces or multiple spaces between
// ? two words. The returned string should only have a single space separating
// ? the words. Do not include any extra spaces.

// ? Input: s = "the sky is blue"
// ? Output: "blue is sky the"

// ? Input: s = "  hello world  "
// ? Output: "world hello"

// ? Input: s = "a good   example"
// ? Output: "example good a"

var reverseWords = function(s) {
  let removeSpace = s.replace(/ +(?= )/g,'').trim()
  // s.replace(/\s+/g," ")

  return removeSpace.split(' ').reverse('').join(' ')
};

// o(n)
var reverseWords = function(s) {
  let words = s.split(' ');
  let res = [];

  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i]) res.push(words[i]);
  }

  return res.join(' ');
};

var reverseWords = function(s) {
  return s.split(" ").reverse().filter(w => w !== "").join(" ")
};