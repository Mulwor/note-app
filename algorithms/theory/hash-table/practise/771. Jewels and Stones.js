// ! 771. Jewels and Stones

// ? You're given strings jewels representing the types of 
// ? stones that are jewels, and stones representing the stones
// ? you have. Each character in stones is a type of stone you
// ? have. You want to know how many of the stones you have 
// ? are also jewels. Letters are case sensitive, so "a" is considered a 
// ? different type of stone from "A".

// ? Input: jewels = "aA", stones = "aAAbbbb"
// ? Output: 3

// ? Input: jewels = "z", stones = "ZZ"
// ? Output: 0

var numJewelsInStones = function(jewels, stones) {
  let counter = 0;
  let map = new Map();

  for (let i = 0; i < jewels.length; i++) {
    map.set(jewels[i], true)
  }

  for (let j = 0; j < stones.length; j++) {
    if (map.has(stones[j])) {
      counter++
    }
  }

  return counter
};

// ===================================================
var numJewelsInStones = function(jewels, stones) {
  let mySet = new Set(jewels);
  let count = 0;
  
  for(let i=0;i<stones.length;i++){
    if(mySet.has(stones[i])){
      count++;
    }
  }
    
  return count;
};