// ! 383. Ransom Note
// ! Link: https://leetcode.com/problems/ransom-note/description/

// ? Given two strings ransomNote and magazine, return true if ransomNote can be constructed 
// ? by using the letters from magazine and false otherwise. Each letter in magazine can only 
// ? be used once in ransomNote.

// * Input: ransomNote = "a", magazine = "b"    =======> Output: false
// * Input: ransomNote = "aa", magazine = "ab"  =======> Output: false
// * Input: ransomNote = "aa", magazine = "aab" =======> Output: true

var canConstruct = function(ransomNote, magazine) {
  for (const letter of magazine) {
    // ? В каждой итерации происходит попытка удалить первый найденный
    // ? символ letter из строки ransomNote с помощью метода replace.
    ransomNote = ransomNote.replace(letter, '')  
  }

  if (!ransomNote) {
    return true;
  }
  
  return false;
};