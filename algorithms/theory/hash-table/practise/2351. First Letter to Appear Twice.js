// ! 2351. First Letter to Appear Twice

// ? Given a string s consisting of lowercase English letters, 
// ? return the first letter to appear twice. Note:
// ? - A letter a appears twice before another letter b if the 
// ? second occurrence of a is before the second occurrence of b.
// ? - s will contain at least one letter that appears twice.

// ? Input: s = "abccbaacz" ===> Output: "c"
// ? Input: s = "abcdd" ===> Output "d"

function repeatedCharacter(s) {
  const set = new Set();
  
  for (const value of s) {
    if (set.has(value)) return value;
    set.add(value);
  }
  
  return '';
}

var repeatedCharacter = function(s) {
  let map = new Map(); 

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      return s[i]
    } else {
      map.set(s[i], true)
    }
  }  
};