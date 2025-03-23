// ! 2011. Final Value of Variable After Performing Operations
// * https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

// ? There is a programming language with only four operations and one variable X:
// ? ++X and X++ increments the value of the variable X by 1.
// ? --X and X-- decrements the value of the variable X by 1.

// ? Initially, the value of X is 0. Given an array of strings operations containing a
// ? list of operations, return the final value of X after performing all the operations.

// ! Первое решение
var finalValueAfterOperations = function(operations) {
  let result = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "--X") {
      --result
    } else if (operations[i] === "X--") {
      result--
    } else if (operations[i] === "++X") {
      ++result
    } else if (operations[i] === "X++") {
      result++
    }
  }

  return result
};

// ! Второе решение
var finalValueAfterOperations = function(operations) {
  let sum = 0
  
  for (let i = 0; i < operations.length; i++) {
    if(operations[i] == "--X" || operations[i] == "X--") {
      sum--
    } else {
      sum++ 
    }
  }
  
  return sum 
};

// ! Третье решение
var finalValueAfterOperations = function(operations) {
  let result = 0;

  for(i = 0; i < operations.length; i++) {
    if(operations[i].includes("++")) {
      result++
    }
    if(operations[i].includes("--")) {
      result--
    }
  }

  return result
};

// ! Четвертое решение
var finalValueAfterOperations = function(operations) {
  let x = 0;
  
  for (let i = 0; i < operations.length; i++) {
    
    if (operations[i].includes("++")) {
      if (operations[i][0] === "X") {
        x++
      } else {
        ++x
      }
    } else {
      if (operations[i][0] === "X") {
        x--
      } else {
        --x   
      }
    }
  }
  return x
};