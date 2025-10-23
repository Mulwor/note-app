function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  let regex = /[a-zа-я0-9]/;

  while (left < right) {
    // charAt() возвращает символ по указанному индексу из строки
    const charL = str.charAt(left).toLowerCase();
    const charR = str.charAt(right).toLowerCase();
    //если charL не является альфанумерическим символом, то указатель left инкрементируется (увеличивается на 1)
    if (!charL.match(regex)) {
      left++;
      continue;
    }
    if (!charR.match(regex)) {
      right--;
      continue;
    }
    if (charL !== charR) {
      return false;
    }
    right--;
    left++;
  }
  return true;
}
