// ! 1832. Check if the Sentence Is Pangram

// ? A pangram is a sentence where every letter of the English alphabet appears 
// ? at least once. Given a string sentence containing only lowercase English letters, 
// ? return true if sentence is a pangram, or false otherwise.

// ? Input: sentence = "thequickbrownfoxjumpsoverthelazydog" ===> Output: true
// ? Input: sentence = "leetcode" ===> Output: false

// ! Мой вариант
var checkIfPangram = function(sentence) {
  const set = new Set()

  for (let i = 0; i < sentence.length; i++) {
    set.add(sentence[i])
  }

  return set.size === 26
};

// ! Можно исключить цикл написав так
var checkIfPangram = function(sentence) { 
  const set = new Set(sentence);

  return set.size === 26

  // ? Еще один вариант сокращения
  // return [...new Set(sentence)].length == 26
};
