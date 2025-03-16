// ! 13. Roman to Integer
// ! Link: https://leetcode.com/problems/roman-to-integer/description/

// ? В строке мы получаем римские цифры, необходимо их преобразовать в числа
// ? и сложить

var romanToInt = function(s) {
  const map = new Map([
    [ "I", 1 ],
    [ "V", 5 ],
    [ "X", 10 ],
    [ "L", 50 ],
    [ "C", 100 ],
    [ "D", 500 ],
    [ "M", 1000 ]
  ])

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result += map.get(s[i])
  }

  return result
};

// ? Однако нужно также учитывать, что есть цифры например - IV, которые приходят из s. 
// ? И его нужно преобразовать в определенное соответствующее число 
// ! Первое решение
var romanToInt = function(s) {
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

// ! Второе решение
var romanToInt = function(s) {
  const numerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }

  let result = 0;

  for(let i = 0; i < s.length; i++){
    // 1000, 100
    // 100, 1000
    // 10, 100
    // 1, 5
    if(numerals[s[i]] < numerals[s[i + 1]]) {
      // ? В таком случае выполняется логика, которая увеличивает результат 
      // ? на разницу между значениями следующего и текущего символов
      result += nextI - currentI;
      // ? Пропускает следующий индекс IV
      i++
    } else {
      result += currentI
    }
  } return result
};