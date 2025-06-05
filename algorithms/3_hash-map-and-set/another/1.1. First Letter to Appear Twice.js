// ! 2351. First Letter to Appear Twice
// ! Link: https://leetcode.com/problems/first-letter-to-appear-twice/description/

// ? Необходимо вернуть символ, который повторяется дважды подряд или просто два раза.
// ? Input: s = "abccbaacz" =====> Output: "c"
// ? Input: s = "abcdd" =====> Output: "d"

// ! Первое решение
var repeatedCharacter = function(s) {
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      return s[i]
    }
    
    set.add(s[i])
  }
};

// ! Второе решение
var repeatedCharacter = function(s) {
  const set = new Set();
  
  for (const letter of s) {
    if (set.has(letter)) {
      return letter;
    }
      
    set.add(letter);
  }
};


// ! Третье решение
var repeatedCharacter = function (s) {
  let hashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      return s[i];
    }

    hashMap.set(s[i], 1); 
  }
}
