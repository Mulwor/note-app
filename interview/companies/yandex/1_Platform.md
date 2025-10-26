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
<summary>Необходимо пройтись по коду, рассказать максимально подробно объяснить, что происходит в каждой строчке кода</summary>

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
<summary>Панаграмма</summary>

Вам задана строка, состоящая из латинских букв, пробелов и знаков преминания. Строка называется панграммой, если она содержит каждую из 26 латинских букв хотя бы раз. Определите является ли строка панграммой

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

<details>
<summary>Ответ</summary>

```js
function isPangram(text) {
  const letters = new Set();
  for (const c of text.toUpperCase()) {
    if (c >= 'A' && c <= 'Z') {
      letters.add(c);
      if (letters.size === 26) return true;
    }
  }
  return false;
}
```

</details>
</details>

<details>
<summary>Реализовать функцию разделения слов</summary>

Необходимо написать функцию, которая разделит каждую строку в массиве `words` по строке `separator`. Необходимо вернуть массив получившихся после разделения строк,
 исключая пустые строки
 

```js
const splitWordsBySeparator = (words, separator) => {

  const res = []

  words.forEach((word) => {
    const splitted = word.split(separator).filter(Boolean);
    res.push(...splitted);

  })

  return res
};
```

</details>

<details>
<summary>Написать функцию sleep для создании задержки</summary>

function sleep(time = 100) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  })
}

</details>


<details>
<summary>Реализовать функцию carry (каррирование)</summary>

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

<details>
<summary>Ответ</summary>

```js
function curry(fn) {
  const arity = fn.length;

  function curried(...args) {
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curried(...args, ...newArgs);
      };
    }
  }

  return curried;
}
```

</details>

</details>
</details>

<details>
<summary>Сложить все промисы</summary>


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

<summary>Написать функцию timeLimited которая реджектит по истечению времени</summary>
Дана асинхронная функция fn и время t в миллисекундах, нужно вернуть новую версию этой функции, выполнение которой ограничено заданным временем.

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

```js
const timeLimited = function (fn, t) {
  return new Promise((res, rej) => {
    const timeout = setTimeout(() => {
      rej('Time limit exceeded')
    }, t)

    fn().then((value) => {
      clearTimeout(timeout)
      res(value)
    }).catch(() => {
      clearTimeout(timeout)
      rej('rejected')
    })
  })
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

<details>
<summary>Ответ</summary>

```js
Array.prototype.groupBy = function (fn) {
  const result = {};

  for (let item of this) {
    const key = fn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }
  return result;
};

const array1 = [{id: 1}, {id: 1}, {id: 2}];

const fn = (item) => item.id
```

</details>

</details>

<details>
<summary>Вычислить интервалы пользователей в двух отсортированных списка</summary>

Даны два отсортированных списка с интервалами присутствия пользователей в онлайне в течение дня. Начало интервала строго меньше конца. Нужно вычислить интервалы, когда оба пользователя были в онлайне.

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


<details>
<summary>Ответ</summary>

```js
function intersection(user1, user2) {
  const result = [];
  let i = 0, j = 0;

  while (i < user1.length && j < user2.length) {
    const [start1, end1] = user1[i];
    const [start2, end2] = user2[j];

    const start = Math.max(start1, start2);
    const end = Math.min(end1, end2);

    if (start < end) {
      result.push([start, end]);
    }

    if (end1 < end2) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}
```

```js
function intersectionTimeline(user1, user2) {
  const timeline1 = new Array(25).fill(0);
  const timeline2 = new Array(25).fill(0);

  for (const [start, end] of user1) {
    for (let h = start; h < end; h++) timeline1[h] = 1;
  }

  for (const [start, end] of user2) {
    for (let h = start; h < end; h++) timeline2[h] = 1;
  }

  const result = [];
  let start = null;

  for (let h = 0; h <= 24; h++) {
    if (timeline1[h] && timeline2[h]) {
      if (start === null) start = h;
    } else if (start !== null) {
      result.push([start, h]);
      start = null;
    }
  }

  return result;
}
```

</details>
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
<summary>Написать функцию, которая принимает url, асинхронно ходит по этому URL - get запросом и возвращает json.</summary>

Для получение данных использовать fetch. Можно использовать только Promise API. Если во время запроса произошла ошибка, то пробовать запросить еще 5 раз. Если в итоге информацию получить не удалось, вернуть ошибку "Заданный url недоступен

```js
function get(url) {
    // code here
}

get(url)
.then(res => console.log(res))
.catch(err => console.error(err))
```

<details>
<summary>Ответы</summary>

```js
function get(url) {
  let count = 0

  return new Promise((resolve, reject) => {
    function getRetried() {
      fetch(url).then((res) => {
        resolve(res.json())
      }).catch(() => {
        count += 1
        if (count >= 5) {
          reject('Заданный URL недоступен')
        } else {
          getRetried()
        }
      })
    }
    getRetried()
  })
}

// async function get(url) {
//   let count = 0;
//
//   while (count < 5) {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       return data;
//     } catch {
//       count++;
//       if (count >= 5) {
//         throw new Error('Заданный URL недоступен');
//       }
//     }
//   }
// }

// (async ()=>{
//   try {
//     const data = await get('url')
//     console.log(data)
//   } catch(e){
//     console.log(e);
//   }
// })()

// get('url').then(console.log).catch(console.log)
```
</details>

</details>

<details>
<summary>Необходимо написать функцию camelToSnake</summary>

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
<summary>Написать декоратор для функции, который ограничивает число вызовов</summary>

- callLimit(fn, limit, callback), принимает следующие аргументы:
- fn - функция, которую декодируем;
- limit - максимально число вызывов
- callback - вызывается, когда совершен последний вызов. Опционально
У вызываемой функции должен быть метод для перезагрузки счетчика в начальном положении

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


<details>
<summary>Необходимо написать функцию compose</summary>

```js
const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

console.log(compose(square, times2(2) === square(times(2))))
console.log(compose(square, times2, num)(3, 4) === square(times(sum(3, 4))))
```

</details>

<details>
<summary>Необходимо написать функцию auth() и tryAuth()</summary>

Функция `asyncAuth(callback)` принимает callback, в который может быть передана ошибка (первым аргументом) и данные с бекенда (вторым аргументом). 
`asyncAuth((error, data) => {})`

Вам нужно реализовать функцию `auth()`, которая вызывает `asyncAuth()`, но возвращает Promise

```js
function auth() {
  // asyncAuth((error, data) => {})`
}
// auth().then(data => ).catch(err => )
// await auth()
```

Функция tryAuth() использует auth() и в случае ошибки, совершает N дополнительных попыток. В случае, если все попытки провалились - вернуть последнюю ошибку

```js
async function tryAuth(n){
  try {

  } catch (err) {
    n -= 1;
    if (n === -1) err;
    return tryAuth(n) 
  }
}

```

</details>


--- 
Источники: 
1. [Даниил Лаптев](https://www.youtube.com/watch?v=CblVMItA3fM)
2. [itrostic](https://www.youtube.com/watch?v=jNgOQjznh-E)
3. [Misha - frontend dev](https://www.youtube.com/watch?v=0rZeskdTQRs)