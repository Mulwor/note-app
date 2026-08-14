// ? Given a string s, reverse only all the vowels in the string and return it. The vowels 
// ? are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, 
// ? more than once.

var reverseVowels = function(s) {
  let ans = "";
  let array = [];
  const vowels='AEIOUaeiou'

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      array.push(i);              // [ 0, 2, 5, 6 ]
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      // ? Если символ гласный, берём индекс последней гласной из `array` и
      // ? добавляем её в итоговую строку.
      // ? s[array.pop()] - A e undefined undefined
      // ? s[array.pop() || 0] - A e I I 
      ans += s[array.pop() || 0];
    } else { 
      ans += s[i];
    } 
  }

  return ans;
};