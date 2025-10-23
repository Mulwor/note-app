function removeZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr);
  return arr;
}

removeZero([1, 0, 8, 9]);
removeZero([0, 0, 9, 4, 2]);
removeZero([0, 0, 0, 0, 0]);
removeZero([]);
