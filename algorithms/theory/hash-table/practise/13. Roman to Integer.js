// ! 13. Roman to Integer
// ! Link: https://leetcode.com/problems/roman-to-integer/description/

// ? В строке мы получаем римские цифры, необходимо их преобразовать в числа
// ? и сложить

// ? Input: s = "III" => Output: 3
// ? Input: s = "LVIII" => Output: 58
// ? Input: s = "MCMXCIV" => Output: 1994, where M = 1000, CM = 900, XC = 90 and IV = 4.

// ! ===========================================================
// ? O(1)
const map = new Map([
  [ "I", 1 ],
  [ "V", 5 ],
  [ "X", 10 ],
  [ "L", 50 ],
  [ "C", 100 ],
  [ "D", 500 ],
  [ "M", 1000 ]
])

var romanToInt = function(s) {
  // ? Каждая операция замены выполняется за 𝑂(𝑛), где 𝑛 - длина строки s. Так как
  // ? выполняется 6 замен подряд, их совокупная временная сложность будет 𝑂(6𝑛), что 
  // ? упрощается до 𝑂(𝑛)
  s = s.replace("IV","IIII");
  s = s.replace("IX","VIIII");
  s = s.replace("XL","XXXX");
  s = s.replace("XC","LXXXX");
  s = s.replace("CD","CCCC");
  s = s.replace("CM","DCCCC");

  // ? O(1)
  let result = 0;

  // ? O(n)
  for (let i = 0; i < s.length; i++) {
      result += map.get(s[i])
  }

  return result
};

// ! ===========================================================
var romanToInt = function(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let current = map.get(s[i])     // ? 1000, 100, 1000, 10, 100, 1, 5
    let next = map.get(s[i + 1])    // ? 100, 1000, 10, 100, 1, 5 undefined

    if (current < next) {
      result -= current
    } else {
      result += current
    }
  }
  return result;  
};