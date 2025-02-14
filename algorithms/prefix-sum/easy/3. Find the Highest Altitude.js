// ? 1732. Find the Highest Altitude
// ? https://leetcode.com/problems/find-the-highest-altitude/description/

// ? Input: gain = [-5,1,5,0,-7] ===> Output: 1
// ? Input: gain = [-4,-3,-2,-1,4,3,2] ===> Output: 0

// * Мое решение
var largestAltitude = function(gain) {    
  let result = 0;
  
  let array = [];
  
  for (let i = 0; i < gain.length; i++) {
    array.push(result += gain[i])
  }
  
  return Math.max(...array) > 0 ? Math.max(...array) : 0
};


// * С помощью prefix-sum-array => 1
var largestAltitude = function(gain) {     
  let result = new Array(gain.length).fill(0);

  for (let i = 1; i < gain.length + 1; i++) {
    result[i] = result[i - 1] + gain[i - 1]
  }

  return Math.max(...result)
};


var largestAltitude = function(gain) {
  let result = [];
  result[0] = 0;

  for (let i = 0; i < gain.length; i++) {
    result[i + 1] = result[i] + gain[i];
  }

  return Math.max(...result);
};