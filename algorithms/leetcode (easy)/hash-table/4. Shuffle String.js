// ! 1528. Shuffle String
// ! Link: https://leetcode.com/problems/shuffle-string/

// ? You are given a string s and an integer array indices of the same length. 
// ? The string s will be shuffled such that the character at the ith position 
// ? moves to indices[i] in the shuffled string.

// ? Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// ? Output: "leetcode"

// * Первое решение
var restoreString = function(s, indices) {
  let array = [];

  for (let i = 0; i < s.length; i++) {
    let newObj = {
      s: s[i],
      indices: indices[i]
    }
    array.push(newObj)
  }

  array.sort((a, b) => a.indices - b.indices)

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
      newArray.push(array[i].s)
  }

  return newArray.join("")
};

// * Второе решение
var restoreString = function(s, indices) {
  let result = [];
  // let result = new Array(indices.length);
  
  for(let i = 0; i < s.length; i++) {
    // ? Помести символ s[i] в массив result на позицию, указанную в массиве indices[i]
    // ? На 0-й итерации: s[0] = 'c', и её поместят на indices[0] = 3 позицию, т.е. result[3] = 'c'
    // ? На 1-й итерации: s[1] = 'o', и её поместят на indices[1] = 1 позицию, т.е. result[1] = 'o'.
    result[indices[i]] = s[i]
  }

  return result.join('')
};