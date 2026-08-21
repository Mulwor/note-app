Задачи от самого легкого к сложным:

- [3760. Maximum Substrings With Distinct Start](./practise/3760.%20Maximum%20Substrings%20With%20Distinct%20Start.js) - Научился добавлять и считать размер Set
- [1832. Check if the Sentence Is Pangram](./practise/1832.%20Check%20if%20the%20Sentence%20Is%20Pangram.js)
- [217. Contains Duplicate](./practise/217.%20Contains%20Duplicate.js) - Научился сравнивать set, и проверять есть ли данное значение в set. 
- [3668. Restore Finishing Order](./practise/3668.%20Restore%20Finishing%20Order.js) - Научился сравнивать два сета и проверять есть значение первого сета у второго
- [349. Intersection of Two Arrays](./practise/349.%20Intersection%20of%20Two%20Arrays%20-%201.js) 
- [2351. First Letter to Appear Twice](./practise/2351.%20First%20Letter%20to%20Appear%20Twice.js) - Научился возвращать значения у Set
- [771. Jewels and Stones](./practise/771.%20Jewels%20and%20Stones.js) - Научился работать с map, добавлять значения и проверять если есть значение то увеличивать счетчик на 1
- [3289. The Two Sneaky Numbers of Digitville](./practise/3289.%20The%20Two%20Sneaky%20Numbers%20of%20Digitville.js) и [442. Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/description/) - научился чекать значения и пушить их в массив
- [217. Contains Duplicate](./practise/217.%20Contains%20Duplicate.js) - Научился работать со счетчиком у map, который необходим для подсчёта количества вхождений элементов с использованием Map
- [13. Roman to Integer](./practise/13.%20Roman%20to%20Integer.js) - Научился преобразовывать входные данные в значение
- [1528. Shuffle String](./practise/1528.%20Shuffle%20String.js) - Научился менять ключи по индексу, сортировать map и преобразовывать в массив

https://leetcode.com/problems/single-number/description/

На будущее: 
- 3945. Digit Frequency Score
- 3541. Find Most Frequent Vowel and Consonant


---
242. Valid Anagram — проверить, являются ли две строки анаграммами.

Планы по выполнению:

136. Single Number — найти единственное число, которое встречается один раз (все остальные — по два).

350. Intersection of Two Arrays II — то же самое, но с учётом кратности.

1207. Unique Number of Occurrences — проверить, все ли частоты встречающихся чисел уникальны.

1365. How Many Numbers Are Smaller Than the Current Number — для каждого элемента посчитать, сколько других элементов меньше него.

575. Distribute Candies — задача про разделение конфет между братом и сестрой.

961. N-Repeated Element in Size 2N Array — в массиве из 2N элементов ровно один элемент повторяется N раз, найти его.

1512. Number of Good Pairs — посчитать количество пар (i, j), где nums[i] == nums[j] и i < j.

389. Find the Difference — даны две строки, одна — другая с перемешанными символами и одним добавленным. Найти добавленный символ.

387. First Unique Character in a String — найти первый неповторяющийся символ в строке.

202. Happy Number — классика, которая решается через детекцию цикла с помощью HashSet.

205. Isomorphic Strings — проверить, являются ли строки изоморфными.

290. Word Pattern — аналог изоморфных строк, но для слов.

409. Longest Palindrome — найти максимальную длину палиндрома, который можно составить из букв строки.

1189. Maximum Number of Balloons — посчитать, сколько раз можно собрать слово "balloon" из букв строки.

1002. Find Common Characters — найти общие символы для всех строк в массиве.

884. Uncommon Words from Two Sentences — найти слова, которые встречаются ровно один раз в одном из двух предложений.

645. Set Mismatch — набор [1..n], одно число потеряно, другое продублировано. Найти оба.

448. Find All Numbers Disappeared in an Array — в массиве [1..n] найти все отсутствующие числа.

---

Существует 3 паттерна:
1. Техника подсчета - дана строка, и нам необходимо переставить ее символы так, чтобы получился полиндром. Время от O(n) проходим строку 1 раз, память от О(k) - кол-во уникальных символов

Данная задача может также встреча в анаграммах и работой с частотой элементов
```js
function palindrome(s) {
  const count = new Map();

  for (const char of s) {
    count set(char, (count.get(char) || 0) + 1)
  }

  let addCount = 0;
  for (const freq of count.values()) {
    // Нечетное число повторений не более 1
    if (freq % 2 === 1) {
      addCount++
    }
  }

  return addCount <= 1;
}

```
3. KV-VK (Key value - value key) - дана строка нужно отсортировать ее от самых частых к редким. BBBBCCA => B4C2A1. Ему присуще 3 основные шага:
- KV - Делаем подсчет
- VK - Делаем инверсию ключа и значения и составляем список частот
- Формирования (собираем) результата

```js
function frequencySort(s) {
  const count = new Map();

  for (const char of s) {
    const set(char, (count.get(char) || 0) + 1);
  }

  const freqList = Array.from({ length: s.length + 1}, () => [])
  for (const [char, freq] of count.entries()) {
    freqList[freq].push(char);
  }

  const result = [];
  for (let freq = freqList.length - 1; freq > 0; freq--) {
    for (const char of freqList[freq]) {
      for (let i = 0; i < freq; i++) {
        result.push(char)
      }
    }
  }

  return result.join("")
}
```
Время O(n) проходим строку и список частот, память O(n) храним данный список и словарь 

2. Выбор ключа