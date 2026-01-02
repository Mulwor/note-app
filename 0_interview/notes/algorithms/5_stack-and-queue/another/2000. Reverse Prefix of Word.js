// ! 2000. Reverse Prefix of Word
// ? Link: https://leetcode.com/problems/reverse-prefix-of-word/

// ? Given a 0-indexed string word and a character ch, reverse the
// ?  segment of word that starts at index 0 and ends at the index of 
// ? the first occurrence of ch (inclusive). If the character ch does
// ? not exist in word, do nothing.

// ? For example, if word = "abcdefd" and ch = "d", then you should reverse the 
// ? segment that starts at 0 and ends at 3 (inclusive). The resulting string 
// ? will be "dcbaefd". Return the resulting string.

// ? Input: word = "abcdefd", ch = "d" ====> Output: "dcbaefd"
// ? Input: word = "xyxzxe", ch = "z" ====> Output: "zxyxxe"


var reversePrefix = function(word, ch) {
  let limit = word.indexOf(ch) + 1;                               // O(1) => O(n)
  
  let firstValue = word.split("", limit).reverse().join("");      // O(n)

  let array = [];                                                 // O(1)

  for (let i = limit; i < word.length; i++) {                     // O(n)
      array.push(word[i])
  }

  let secondValue = array.join("")

  return `${firstValue}${secondValue}`
};


var reversePrefix = function(word, ch) {
  let f = word.slice(0, word.indexOf(ch) + 1).split("").reverse("").join("");
  let s = word.slice(word.indexOf(ch) + 1);
  
  return f + s;
};

const reversePrefix = (word, ch) => {
  let i = 0;
  let j = word.indexOf(ch)

  if(j === -1) return word;

  while (i <= j) {
      if(word[i] !== word[j]) {
        word = word.slice(0, i) + word[j] + word.slice(i + 1, j) + word[i] + word.slice(j + 1)
      }
      i++
      j--
  }

  return word
};