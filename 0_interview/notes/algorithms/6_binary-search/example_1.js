let array = [-1, 0, 3, 5, 7, 9, 12];

let search = function(nums, target) {
  // Указатель на левую границу
  let left = 0;
  // Указатель на правую границу
  let right = nums.length - 1    
  // Будет хранится значения центра
  let mid;

  // Создаем цикл в котором мы будем итерироваться пока левая
  // сторона больше правой
  while(left <= right) {
    // Для того чтобы посчитать длину центрального указателя
    // мы должны взять длину текущего подмассива, разделить ее 
    // на два и получившемуся результат добавить позицию левого указа-
    // теля
    mid = Math.round((right - left) / 1) + left;

    if (target === nums[mid]) {
      return mid
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // Если искомого элемента не оказалось отправляем -1
  return -1;
}

console.log(search(array, 9))

// ! Другое решение 

var search2 = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const potentialMatch = nums[middle];

      if(target === potentialMatch) {
        return middle;
      } else if (target < potentialMatch){
        right = middle - 1;
      } else {
        left = middle + 1
      }
  }
  return -1
};