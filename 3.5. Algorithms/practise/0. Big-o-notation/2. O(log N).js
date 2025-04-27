// ? O(log N) логарифмическая сложность. Размер входных данных уменьшается вдвое
// ? на каждом шаге.

// !=============================== Пример №0 =================================
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
      
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}

// !=============================== Пример №1 =================================
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function searchInBST(root, target) {
  if (!root) return false;
  if (root.value === target) return true;
  
  if (target < root.value) return searchInBST(root.left, target);
  else return searchInBST(root.right, target);
}

// !=============================== Пример №2 =================================
function fastPow(x, n) {
  if (n === 0) return 1;
  if (n % 2 === 0) return fastPow(x * x, n / 2);
  else return x * fastPow(x, n - 1);
}

// !=============================== Пример №3 =================================
function searchInSortedMatrix(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return [row, col];
    if (matrix[row][col] < target) row++;
    else col--;
  }
  
  return [-1, -1];
}

// !=============================== Пример №4 =================================
function findMinInRotatedArray(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  
  return nums[left];
}

// !=============================== Пример №5 =================================
function countDigits(num) {
  return Math.floor(Math.log10(num)) + 1;
}

