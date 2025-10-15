function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

console.log(twoSumSorted([1, 2, 3, 4, 5], 9)); // [3, 4]
console.log(twoSumSorted([1, 2, 3, 4, 5], 10)); // null