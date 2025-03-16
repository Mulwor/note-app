// ! 2828. Check if a String Is an Acronym of Words
// ? https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/

// * Есть аккроним начинающаяся на abc необходимо проверить содержит ли первый
// * элемент данный символ. 1 символ - 1 слово

// ? Input: words = ["alice","bob","charlie"], s = "abc"
// ? Output: true

// ? Input: words = ["an","apple"], s = "a"
// ? Output: false

var isAcronym = function(words, s) {
  if (words.length !== s.length) return false;

  for (let i = 0; i < words.length; i++) {
    if (words[i][0] !== s[i]) return false;
    //  if(words[i].slice(0,1) !== s[i]) return false
  }

  return true;
};

var isAcronym = function(words, s) {
  let concatStr = "";

  for (let i = 0; i < words.length; i++) {
    concatStr+=words[i][0];
  }

  return concatStr === s;
};