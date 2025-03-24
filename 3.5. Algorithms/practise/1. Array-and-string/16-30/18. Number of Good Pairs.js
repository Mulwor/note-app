// ! 1512. Number of good pairs
// * Link: https://leetcode.com/problems/number-of-good-pairs/

// ? Given an array of integers nums, return the number of good pairs.
// ? A pair (i, j) is called good if nums[i] == nums[j] and i < j

var numIdenticalPairs = function(nums) {
  let value = 0     // O(1)
  
  for (let i = 0; i < nums.length; i++) {         // O(n)
    for (let j = 0; j < nums.length; j++) {       // O(n)
      if (nums[i] == nums[j] && i < j) {           // O(1)        
        value++
      }
    }
  }

  return value;   // O(1)
};

// ? В первом цикле у нас идет чисто массив => 123. Цикл внутри другого цикла
// ? работает следующим образом. Срабатывает первый цикл, а затем идет второй цикл
// ? до конца и снова возвращает в начало и добавляет элемент
// * Вот пример: 
// * 1 (срабатывает первый цикл) 1, 2, 3 (срабатывает второй цикл), затем вернулся 
// * в начало
// * 2 (срабатывает первый цикл) 1, 2, 3 (срабатывает второй цикл), затем вернулся 
// * в начало
// * 3 (срабатывает первый цикл) 1, 2, 3 (срабатывает второй цикл), цикл закончился

// * Затем идет сравнения внутри цикла: 
// * 1. (nums[i] == nums[j]) ===> 1 == 1 (true); 1 == 2 (false); 1 == 3 (false); 2 == 1 (false); 2 == 2 true 