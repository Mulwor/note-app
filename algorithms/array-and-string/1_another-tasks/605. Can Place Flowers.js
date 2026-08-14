// ? You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in 
// ? adjacent plots. Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an 
// ? integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and 
// ? false otherwise.

var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    let prevValueInArray = flowerbed[i - 1] === 0;
    let nextValueInArray = flowerbed[i + 1] === 0;

    if (flowerbed[i] === 0 && (i === 0 || prevValueInArray) && (i === flowerbed.length - 1 || nextValueInArray)) {
      flowerbed[i] = 1;
      count++;
    }
    
    if (count >= n) {
      return true;
    }
  }

  return count >= n;
}