# Этап 1: платформа

## Что из себя представляет данная секция 

Платформа длится около часа, за это время собеседующий должен решить как можно больше задач (~5). Во время данного этапа собеседующий не должен ничего гуглить, дебажить и использовать console.log. В случае если возникают вопрос, то можно спросить у интервюера, но большое кол-во вопросов может сказаться на том, что данную платформу не сможете пройти.

## Задачи

<details>
<summary>Приведены 9 секций с кодом. Какой будет результат вызова каждого</summary>

```js
// 1.
console.log(typeof []);

// 2.
console.log(typeof null);

// 3.
console.log(1 + "2");

// 4.
console.log("4" - 2);

// 5
const first = () => console.log("Один");
const second = () => console.log("Два");
const third = () => console.log("Три");

first();
setTimeout(second, 0);
third();

// 6
var a = 2;
var b = a;
b++

console.log(a);
console.log(b);

// 7
var c = [1, 2, 3]
var d = c;
d.push(4);
console.log(c);
console.log(d);

// 8
{
  console.log(i);
  var i = 10;
  console.log(i)
}

// 9
{
  console.log(i);
  const i = 10;
  console.log(i)
}
```
</details>

<details>
<summary>Необходимо сверху вниз пройтись и рассказать максимально подробно объяснить, что происходит в каждой строчке кода, как она исполняется и куда она передается в управления, какие строчку может не попадать</summary>

```js
Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => { throw x } )
  .then((x) => console.log(x))
  .catch((err) => console.log(err))
  .then(x => Promise.resolve(x))
  .catch((err) => console.log(err))
  .then((x) => console.log(x))

```


</details>

<details>
<summary>Необходимо написать функцию strjoin, которая склеивает строки через разделитель</summary>

```js
function strjoin() {
  // code here
}

console.log(strjoin('.', 'a', 'b', 'c')); // 'a.b.c.
console.log(strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f')); // a-b-c-d-e-f

// Доп.вопрос, что вернет если мы добавим только разделитель
console.log(strjoin('.'));

// Напиши решение с помощью ЕС6, и до ЕС5;

// Что такое arguments

```
</details>

<details>
<summary>Вам задана строка, состоящая из латинских букв, пробелов и знаков преминания. Строка называется панграммой, если она содержит каждую из 26 латинских букв хотя бы раз. Определите является ли строка панграммой
</summary>

```js
const LETTERS = [
    "A", "B", "C", "D", "E",
    "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", 
    "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", 
    "Z"
]

function isPangram(text) {
    // your code her
}

console.log(isPangram('A pangram or holoalphabetic sentence is a sentence using every letter of a gived alphabet at least once'))
console.log(isPangram('Waltz, bad nymph, for quick jigs vex'))
```
</details>


<details>
<summary>Необходимо реализовать функцию carry</summary>

```js
function sum(a,b,c) {
  return a + b + c  
}

function curry(fn) {
  // TODO
}

carry(sum)(1, 2, 3);
curry(sum)(1, 2)(3);
curry(sum)(1)(2)(3);
```

</details>

<details>
<summary>Необходимо сложить все промисы</summary>


```js

function sumPromises(...promises) {
  // TODO  
}

// Пример использования
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);

sumPromises(promise1, promise2).then(console.log); // 3
```

<details>
<summary>Ответ</summary>

```js
function sumPromises(...promises) {
  return Promise.all(promises)
    .then(results => results.reduce((sum, value) => sum + value, 0));
}
```

</details>
</details>
<details>
<summary>Дана асинхронная функция fn и время t в миллисекундах, нужно вернуть новую версию этой функции, выполнение которой ограничено заданным временем.
</summary>

Функция fn принимает аргументы, переданные в эту новую функцию.
  
Возвращаемая функция работает по следующим правилам: 
- если fn выполнится за заданное время t, то функция резолвит полученные данные;
- если fn не выполнился за заданное время t, то функция реджектит строку "Time limit exceeded"

```js
const timeLimited = function (fn, t) {
  // Your code
}
```

<details>
<summary>Ответ</summary>

```js
const timeLimited = function (fn, t) {
  return async function (...args) {
    // Обещание, которое сработает, если функция превысит лимит
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time limit exceeded"), t);
    });

    // Запускаем fn с переданными аргументами
    const fnPromise = fn(...args);

    // Возвращаем результат того, кто быстрее завершится
    return Promise.race([fnPromise, timeoutPromise]);
  };
};
```

</details>
</details>

<details>
<summary>Необходимо реализовать метод groupBy, расширяющий стандартные методы массивов.</summary>

Метод должен возвращать сгруппированную версию массива - объект, в котором
каждый ключ является результатом выполнения переданной функции fn(arr[i]), а
каждое значение - массивом, содержащим все элементы исходного массива с этим 
ключом

```js

Array.prototype.groupBy


// Пример №1
const array1 = [
    { id: 1 },
    { id: 1 },
    { id: 3 }
]

const fn = (item) => item.id;

console.log(array1,groupBy(fn));
// {
//   1: [ {id: 1}, { id: 1 }]
//   2: [ {id: 2}]   
// }

// Пример №2
const array2 = [1, 2, 3];
console.log(array2.groupBy(String));
// {
//   "1": [1]
//   "2": [2]   
//   "3": [3]   
// }


// Пример №3
const array3 = [3.3, 0.5, 1.4];
console.log(array2.groupBy(Math.round));
// {
//   3: [3.3]
//   1: [0.5, 1.4]   
// }
```

</details>

<details>
<summary>Даны два отсортированных списка с интервалами присутствия пользователей в онлайне в течение дня. Начало интервала строго меньше конца. Нужно вычислить интервалы, когда оба пользователя были в онлайне.</summary>


```js
intersection(
    [(8, 12), (17, 22)],
    [(5, 11), (14, 18), (20, 23)]
) // [(8, 11), (17, 18), (20, 22)]

intersection(
    [(9, 15), (18, 21)],
    [(10, 14), (21, 22)]
) // [(10, 14)]

function intersection(user1, user2) {
  // your code here
}
```

</details>

<details>
<summary> Необходимо проверить решение задачи по двум сервисом, вызвав checkResult(url1, solution), checkResult(url2, solution) checkResult: (url: string, solution: string | number) => Promise<boolean>;</summary>

- Если оба запроса вернули true - вывести success;
- Если хоть один вернул false - вывести fail
- Если хоть один не ответил - вывести error;
- Если хоть один отвечает дольше 1 сек - вывести timeout


```js
import {checkResult} from 'myLib'

const solution = "Any answer";
const url1 = "yandex.ru";
const url2 = "google.com";

checkResult(url1, solution);
checkResult(url2, solution)
```
</details>

<details>
<summary>Необходимо написать функцию, которая на вход принимает url, асинхронно ходит по этому URL - get запросом и возвращает json.</summary>

Для получение данных использовать fetch. Можно использовать только Promise API. Если во время запроса произошла ошибка, то пробовать запросить еще 5 раз. Если в итоге информацию получить не удалось, вернуть ошибку "Заданный url недоступен

```js
function get(url) {
    // code here
}

get(url)
.then(res => console.log(res))
.catch(err => console.error(err))
```

</details>

<details>
<summary>Добавить описание</summary>

```js
function camelToSnake(text) {
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    // Проверяем, является ли символ заглавной буквой
    if (char >= 'A' && char <= 'Z') {
      // Добавляем подчеркивание, если это не первый символ
      if (i !== 0) result += '_';
      result += char.toLowerCase();
    } else {
      result += char;
    }
  }
  
  return result;
}
```

</details>

<details>
<summary>Добавить описание</summary>


```js
function callLimit(fn, limit, callback) {
  let count = 0;

  function limitedFn(...args) {
    if (count < limit) {
      count++;
      fn(...args);

      if (count === limit && typeof callback === 'function') {
        callback();
      }
    }
  }

  limitedFn.reset = function() {
    count = 0;
  };

  return limitedFn;
}
```
</details>




--- 
Источники: 
1. [Даниил Лаптев](https://www.youtube.com/watch?v=CblVMItA3fM)
2. [itrostic](https://www.youtube.com/watch?v=jNgOQjznh-E)
