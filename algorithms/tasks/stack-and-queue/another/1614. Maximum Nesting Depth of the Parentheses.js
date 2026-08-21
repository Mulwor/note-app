// ! 1614. Maximum Nesting Depth of the Parentheses
// ? Given a valid parentheses string s, return the nesting depth of s. The nesting
// ? depth is the  maximum number of nested parentheses.

// ? Input: s = "(1+(2*3)+((8)/4))+1" ===> Output: 3
// ? Input: s = "(1)+((2))+(((3)))" ===> Output: 3

var maxDepth = function(s) {
  let result = 0;
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      counter += 1
    } else if (s[i] == ")") {
      counter -= 1
    }

    result = Math.max(result, counter)
  }

  return result
};
