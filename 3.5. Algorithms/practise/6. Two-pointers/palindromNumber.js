function isPalindromeNumber(num) {
  let s = num.toString();

  let left = 0;
  let right = s.length - 1;
  
  // ? Цикл работает до тех пор порка left меньше указателя right
  while (left < right) {
    // ? Если первый индекс не равен последнему верни false
    if (s[left] !== s[right]) {           
      return false;
    }
    // ? Если символы совпадают, сдвигаем указатели ближе к центру строки
    left++;
    right--;
  }
  
  return true;
}