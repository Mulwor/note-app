// ! 58. Length of Last Word
// * Links: https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150

// ? Given a string s consisting of words and spaces, 
// ? return the length of the last word in the string.
// ? A word is a maximal substring consisting of 
// ? non-space characters only.

// Input: "Hello World" => 5 (world.length)
// Input: "   fly me   to   the moon  " => 4 (moon)
// Input: "luffy is still joyboy" => 6 (joyboy)


// ! ========================================================================================
var lengthOfLastWord = function(s) {
  const result = s.split(" ").filter(Boolean)

  return result[result.length - 1].length
};


// ! ========================================================================================
var lengthOfLastWord = function(s) {
  let word = s.trim().split(" ")

  return word[word.length - 1].length
};


// ! ========================================================================================
var lengthOfLastWord = function(s) {
  let count = 0;
  
  for(let i = s.length - 1; i>=0; i--){
    if(s[i]!=" ") {
      count++;
    } else {
      if(count!=0){
        break;
      }
    }
  }
    
  return count;
};