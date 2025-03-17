// ! 1323. Maximum 69 Number
// ! https://leetcode.com/problems/maximum-69-number/description/

// ? You are given a positive integer num consisting only of digits 6
// ? and 9. Return the maximum number you can get by changing at most
// ? one digit (6 becomes 9, and 9 becomes 6).

// ? Input: num = 9669 ====> Output: 9969
// ? Input: num = 9996 ====> Output: 9999
// ? Input: num = 9999 ====> Output: 9999

var maximum69Number  = function(num) {
  return Number(num.toString().replace('6', '9'));
}

var maximum69Number  = function(num) {
  return parseInt(num.toString().replace('6','9'))
};

var maximum69Number  = function(num) {
  const split = num.toString().split("");
 
  for (let i = 0; i < split.length; i++) {
    if (split[i] === "6") {
      split[i] = "9";
      // * Выходит при первом нахождение символа
      break;
    }
  }

  return parseInt(split.join(""));
};