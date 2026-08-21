// ! Task: 1071. Greatest Common Divisor of Strings
// ? Link: https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

// ! Description
// ? For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... +
// ? t + t (i.e., t is concatenated with itself one or more times). Given two strings 
// ? str1 and str2, return the largest string x such that x divides both str1 and str2.

// ! Examples
// ? Input: str1 = "ABCABC", str2 = "ABC" ===> Output: "ABC"
// ? Input: str1 = "ABABAB", str2 = "ABAB" ===> Output: "AB"
// ? Input: str1 = "LEET", str2 = "CODE" ===> Output: ""

// ! Алгоритм Евклида 
// ? способ нахождения наибольшего общего делителя (НОД) двух чисел 
// ! `const formulaGcd = (a, b) => b === 0 ? a : formulaGcd(b, a % b);`, 
// ? что означает мы можем заменять большую пару чисел меньшей парой до тех
// ? пор, пока одно из чисел не разделится на другое нацело. Например:
// * 252 / 105 => 2 (в остатке 42); Теперь ищет НОД (105, 42)
// * 105 / 42 => 2 (в остатке 21); Теперь ищем НОД(42, 21).
// * 42 / 21 => 2 (в остатке 0); Делится нацело

// ! ==========================================================================
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  // ABCABCABC !== ABCABCABC
  // LEETCODE !== CODELEET
  // ABCABCABC !== ABCABCDEF  

  const formulaGcd = (a, b) => b === 0 ? a : formulaGcd(b, a % b);
  // 3, 6 ===> 6 === 0 ? a : formulaGcd(6, 3 % 6)

  const gcdLength = formulaGcd(str1.length, str2.length);
  // Возвращает часть строки от начального индекса до конечного (не включая его),
  return str1.substring(0, gcdLength);
};

// ! ==========================================================================
var gcdOfStrings = function (str1, str2) {
    const concatWord = str1.concat(str2);
    const potentialOutput = []

    for(let i = 0; i < concatWord.length; i++) {
        const candidateString = concatWord.slice(0, i);

        if(str1.length % candidateString.length === 0 && str2.length % candidateString.length === 0 &&
            candidateString.repeat(str1.length / candidateString.length) === str1 &&
            candidateString.repeat(str2.length / candidateString.length) === str2 ) {
            potentialOutput.push(candidateString)
        }
    }

    return potentialOutput.length > 0 ? potentialOutput.sort((a,b) => b.length - a.length)[0] : ''

}