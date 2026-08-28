// ! 345. Reverse Vowels of a String
// ? Given a string s, reverse only all the vowels in the 
// ? string and return it. The vowels are 'a', 'e', 'i', 
// ? 'o', and 'u', and they can appear in both lower and 
// ? upper cases, more than once.

reverseVowels("IceCreAm");          // ! "AceCreIm"
reverseVowels("leetcode");          // ! "leetcode"

// ! ========================================================================================

var reverseVowels = function(s) {
  let vowels = 'aeiouAEIOU';
  let resultVowels = [];
  let result = ""

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      resultVowels.push(s[i])
    }
  }

  let resultVowelsReverse = resultVowels.reverse()
  let vowelIndex = 0; // счётчик для массива перевёрнутых гласных

  for (let j = 0; j < s.length; j++) {
    if (vowels.includes(s[j])) {
      // берём следующую гласную из перевёрнутого массива
      result += resultVowelsReverse[vowelIndex];
      vowelIndex++; // переходим к следующей гласной
    } else {
      result += s[j];
    }
  }

  return result
};

// ! =======================================================
// ? Two pointers
var reverseVowels = function(s) {
    const vowels = new Set("aeiouAEIOU");
    const arr = s.split("");

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(arr[left])) {
          left++;
        }

        while (left < right && !vowels.has(arr[right])) {
          right--;
        }

        // Меняют местами элементы с индексами
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr.join("");
};