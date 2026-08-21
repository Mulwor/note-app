// ! 1528. Shuffle String
// ! Link: https://leetcode.com/problems/shuffle-string/

// ? You are given a string s and an integer array indices of the same length. 
// ? The string s will be shuffled such that the character at the ith position 
// ? moves to indices[i] in the shuffled string.

// ? Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// ? Output: "leetcode"

// ! =====================================================================
var restoreString = function(s, indices) {
  let result = [];
  
  for(let i = 0; i < s.length; i++) {
    // ? Помести символ s[i] в массив result на позицию, указанную в массиве indices[i]
    // ? На 0-й итерации: s[0] = 'c', и её поместят на indices[0] = 3 позицию, т.е. result[3] = 'c'
    // ? На 1-й итерации: s[1] = 'o', и её поместят на indices[1] = 1 позицию, т.е. result[1] = 'o'.
    result[indices[i]] = s[i]
  }

  return result.join('')
};

// ! =====================================================================
var restoreString = function(s, indices) {
  return indices
    .reduce((acc, idx, i) => {
      acc[idx] = s[i];
      return acc;
    }, [])
    .join("");
};

// ! =====================================================================
var restoreString = function(s, indices) {
  const map = new Map();
  
  for (let i = 0; i < s.length; i++) {
    map.set(indices[i], s[i]);
  }
  
  let result = '';
  for (let i = 0; i < s.length; i++) {
    result += map.get(i);
  }
  
  return result;
};

// ! =====================================================================
// ? Мое решение, не самое лучшее
var restoreString = function(s, indices) {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    map.set(indices[i], s[i])
  }

  const sort = new Map([...map].sort((a, b) => a[0] - b[0]))
  return Array.from(sort.values()).join("")
};