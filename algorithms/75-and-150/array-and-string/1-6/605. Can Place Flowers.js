// ! 605. Can Place Flowers
// ? https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

// ! Description
// ? You have a long flowerbed in which some of the plots are planted, and some 
// ? are not. However, flowers cannot be planted in adjacent plots. Given an
// ? integer array flowerbed containing 0's and 1's, where 0 means empty and 
// ? 1 means not empty, and an integer n, return true if n new flowers can be
// ? planted in the flowerbed without violating the no-adjacent-flowers rule
// ? and false otherwise.

// ! Examples
// ? Input: flowerbed = [1,0,0,0,1], n = 1    // true
// ? Input: flowerbed = [1,0,0,0,1], n = 2    // false

var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length && n > 0; i++) {
    const current = flowerbed[i];
    const prev = flowerbed[i - 1];
    const next = flowerbed[i + 1];

    if (current === 0 && prev !== 1 && next !== 1) {
      n--;
      i++; // пропускаем следующую клетку, т.к. она станет соседом
    } 
  }

  return n === 0;
}