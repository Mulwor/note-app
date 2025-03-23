// ! 1678. Goal Parser Interpretation
// * https://leetcode.com/problems/goal-parser-interpretation/description/

// ? You own a Goal Parser that can interpret a string command. The command consists 
// ? of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will 
// ? interpret "G" as the string "G", "()" as the string "o",  and "(al)" as the string 
// ? "al". The interpreted strings are then concatenated in the original order. Given the
// ? string command, return the Goal Parser's interpretation of command.

var interpret = function(command) {
  return command.replaceAll('()', "o").replaceAll("(al)", 'al')
};

var interpret = function(command) {
  let output = [];

  for(let i = 0; i < command.length; i++){
    if (command[i] === "G") {
      output.push("G")
    } else if (command[i] === "(" && command[i + 1] === ")"){
      output.push("o")
    } else if (
      command[i] === "(" && command[i + 1] === "a" 
      && command[i + 2] === "l" && command[i + 3] === ")"
    ) {
      output.push("al")
    }
  }

  return output.join("")
};

var interpret = function(command) {
  let result = command.replace(/\(\)/g, "o");

  return result.replace(/\(al\)/g, "al");
};

var interpret = function(command) {
  return command.split("()").join("o").split("(al)").join("al");
};