// ! 1550. Three Consecutive Odds
// * https://leetcode.com/problems/three-consecutive-odds/description/?envType=daily-question&envId=2024-07-01

// ? Given an integer array arr, return true if there are three consecutive odd 
// ? numbers in the array. Otherwise, return false.

// ? arr = [2,6,4,1] ===> 1 ===> false
// ? arr = [1,2,34,3,4,5,7,23,12] ===> 5, 7, 23 ===> true


var threeConsecutiveOdds = function(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      count++

      if (count === 3) {
        return true
      }
    } else {
      count = 0
    }
  }

  return false
};


function threeConsecutiveOdds(arr) {
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
      count = 0;
    } else {
      count++
    }

    if(count === 3) return true
  }

  return false
};