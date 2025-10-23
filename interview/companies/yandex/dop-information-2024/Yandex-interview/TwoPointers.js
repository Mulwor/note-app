function findCommonElements(arr1, arr2) {
  let result = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
      if (arr1[pointer1] === arr2[pointer2]) {
          result.push(arr1[pointer1]);
          pointer1++;
          pointer2++;
      } else if (arr1[pointer1] < arr2[pointer2]) {
          pointer1++;
      } else {
          pointer2++;
      }
  }

  return result;
}

const sortedArray1 = [2, 4, 6, 8, 10];
const sortedArray2 = [3, 5, 6, 8, 9, 10];

const commonElements = findCommonElements(sortedArray1, sortedArray2);
console.log(commonElements);  // Ожидаемый результат: [6, 8, 10]
