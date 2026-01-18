# Этап 1: платформа

## Что из себя представляет данная секция 

Платформа длится около часа, за это время собеседующий должен решить как можно больше задач (~5). Во время данного этапа собеседующий не должен ничего гуглить, дебажить и использовать console.log. В случае если возникают вопрос, то можно спросить у интервюера, но большое кол-во вопросов может сказаться на том, что данную платформу не сможете пройти.

## Если хотите хорошо пройти данную секцию необходимо:
- Первые задачи в основном легкие, совет просто узнать, что выведется консоль или что-то простое;
- Решить задачи из [leetcode - Days 30](https://leetcode.com/studyplan/30-days-of-javascript/) - в основном задачи под номер 2 или 3 берутся от туда;

### Первые группа задач

<details>
<summary>9 кусков кода, результат каждого</summary>

```js
console.log(typeof []);         // 1. => object
console.log(typeof null);       // 2. => object
console.log(1 + "2");           // 3. => '12' - когда складывается число со строкой, то все остальные операнды превращаются в String 
console.log("4" - 2);           // 4. => 2, при вычитании происходит преобразование в Number(4) - 2 => 

// 5. => 132, в начале синхронные, а потом уже асинхронные операции
const first = () => console.log("Один");
const second = () => console.log("Два");
const third = () => console.log("Три");
first();
setTimeout(second, 0);
third();

// 6. => 2, 3, примитивы передаются по значению, происходит копирование и увеличивается счетчик на 1 
var a = 2;
var b = a;
b++
console.log(a);
console.log(b);

// 7. => У обоих 1234, так как у массивы (как и объекты) передаются по ссылке и они работают с одной и той же ссылкой
var c = [1, 2, 3]
var d = c;
d.push(4);
console.log(c);
console.log(d);

// 8. => undefined и 10. 
{
  console.log(i);
  var i = 10;
  console.log(i)
}

// Reference error, так как попал во временную мертвую зону и его нельзя вызвать до того как объявишь
{
  console.log(i);
  const i = 10;
  console.log(i)
}
```
</details>

<details>
<summary>3 куска кода, результат каждого</summary>

```js
var n = 1;

function f(n) {
  n = 3;
}
f(n)

console.log(n)     // 1, примитивные типы передаются по значению внутрь функции и если внутрь мы меняем его значения, то снаружи он остается таким же
```

```js
var obj = { a: 1 };

function f1(o) {
  o.a = 5;
}

f1(obj)
console.log(obj)  // { a: 5 } Во второй случае передается уже ссылка на объект.
```

```js
var obj = { a: 1 };

function f2(o) {
  o = { hello: 1 }
}

f2(obj)
console.log(obj)  // { a: 1 }, хоть и передается по ссылке но o внутри ведет уже на другую ссылку
```
</details>

<details>
<summary>Пройтись по Promise.resolve(1)</summary>

Пройтись по коду и рассказать максимально подробно объяснить, что происходит в каждой строчке кода

```js
Promise.resolve(1)                        // 1
  .then((x) => x + 1)                     // 2
  .then((x) => { throw x } )              // Выбрасываем ошибку и двойка отправляется в reject и идем сразу в catch
  .then((x) => console.log(x))            
  .catch((err) => console.log(err))       // обрабатываем эту ошибку и выводится число 2
  .then(x => Promise.resolve(x))          // Снова резолвим x, но он undefined, так как значение не передается
  .catch((err) => console.log(err))       // пропуска
  .then((x) => console.log(x))            // выводим

Ответ 2 undefined
```
</details>

<details>
<summary>Функция strjoin, которая склеивает строки через разделитель</summary>

```js
function strjoin(separator, ...word) {
  return words.join(separator)

}

// Можно сделать также с помощью аргумента сделать циклом пройтись и складывать строки
function strJoin(separator) {
  let result = '';
  
  // Начинаем с 1, потому что arguments[0] - это separator
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i];
    
    // Добавляем разделитель после каждого элемента, кроме последнего
    if (i < arguments.length - 1) {
      result += separator;
    }
  }
  
  return result;
}

console.log(strjoin('.', 'a', 'b', 'c')); // 'a.b.c.
console.log(strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f')); // a-b-c-d-e-f
console.log(strjoin('.'));               // ? 
```
</details>

</details>

<details>
<summary>Написать функцию задержки sleep</summary>

```js
function sleep(time = 100) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

console.log('Начало');
await sleep(2000);
console.log('Прошло 2 секунды');
```
</details>

<details>
<summary>Необходимо сложить все promise</summary>

Стоит отметить, что [задача взята из leetcode c небольшим изменением](https://leetcode.com/problems/add-two-promises/description/)

```js
function sumPromises(...promises) {
  return Promise.all(promises).then((result) => result.reduce(a, b) => a + b, 0);
}

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);

sumPromises(promise1, promise2).then(console.log); // 3
```

</details>
</details>


<details>
<summary>Реализовать функцию разделения слов - splitWordsBySeparator</summary>

Необходимо написать функцию, которая разделит каждую строку в массиве `words` по строке `separator`. Необходимо вернуть массив получившихся после разделения строк, исключая пустые строки. [Задача взята с leetcode](https://leetcode.com/problems/split-strings-by-separator/)

```js
const splitWordsBySeparator = (words, separator) => {
  let result = [];

  for (let i = 0; i < words.length; i++){
    // ['test', '', 'case']
    let splitting = words[i].split(separator).filter(Boolean);

    result.push(...splitting);
  }

  return result;
};

splitWordsBySeparator(["one.two.three", "four.five", "six"], '.')       // ["one", "two", "three", "four", "five", "six"]
splitWordsBySeparator(["hello-world", "this-is", "great"], '-')         // ["hello", "world", "this", "is", "great"]
splitWordsBySeparator(["test..case", "split.", ".start"], '.')          // ["test", "case", "split", "start"]
```

```js
var splitWordsBySeparator = function (words, separator) {
  let join = words.join(separator);         //  $easy$$$problem$
  let split = join.split(separator)         // [ '', 'easy', '', '', 'problem', '' ]

  return split.filter(Boolean)
};
```

</details>

<details>
<summary>Необходимо написать функцию camelToSnake</summary>

Преобразуйте строку из camelCase в snake_case. Мы внутри можем написать переменную, куда будем складывать символы. Затем нам необходимо пройтись по циклу и написать условия, которая будет проверять является ли символ заглавной буквой и напишем условия, если не первый символ, то мы не добавляем нижнее подчеркивания. 

```js
function camelToSnake(text) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i]

    // Сверяем букву которая приходит с большой буквой
    // и делаем так чтобы нижнее подчеркивание не было в самом начале
    if (char === char.toUpperCase() && i !== 0) {
      result += "_";
    }

    result += char.toLowerCase();
  }

  return result;
}

console.log(camelToSnake("updatedAt")); // "updated_at"
console.log(camelToSnake("XmlHttpRequest")); // "xml_http_request"
console.log(camelToSnake("XmlHttpRequestI")); // "xml_http_request_i"
```
</details>


<details>
<summary>Панаграмма</summary>

Панграмма (с греч. — «все буквы»), или разнобуквица, — короткий текст, использующий все или почти все буквы алфавита, по возможности не повторяя их.

Вам задана строка, состоящая из латинских букв, пробелов и знаков преминания. Строка называется панграммой, если она содержит каждую из 26 латинских букв хотя бы раз. Определите является ли строка панграммой. [Похожая задача с leetcode](https://leetcode.com/problems/check-if-the-sentence-is-pangram/)


```js
const letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function isPangram(text) {
  let set = new Set();

  for (let i = 0; i < text.length; i++) {
    let newTextWithUpperCase = text[i].toUpperCase()
        
    if (newTextWithUpperCase >= letter[0] && newTextWithUpperCase <= letter[25]) {
      set.add(text[i])
    }
  }

  return set.size === 26
}

console.log(isPangram('A pangram or holoalphabetic sentence is a sentence using every letter of a gived alphabet at least once'))  // False
console.log(isPangram('Waltz, bad nymph, for quick jigs vex')) // True
```
</details>

<details>
<summary>function objFromArr(arr)</summary>

С бекенда приходит массив такого вида:

```js
const arr = [
  { name: "width", value: 10 },
  { name: "height", value: 20 },
];
```

Нужно получить объект такого вида:
```js
{
  width: 10,
  height: 20,
}
```

```js
function objFromArr(arr) {
  const transformToObject = {};

  for (const element of arr) {
    transformToObject[element.name] = element.value;
  }

  // for (let i = 0; i < arr.length; i++) {
  //   transformToObject[arr[i].name] = arr[i].value;
  // }

  return transformToObject
}
```
</details>


<details>
<summary>Функция обертка - runOnce</summary>
Реализовать функцию-обертку runOnce, которая принимает функцию и возвращает новую функцию. Новая функции может быть вызвана только 1 раз, все последующие вызовы возвращают undefined. Оборачиваемая функция может принимать аргументы и возвращать результат. [Задача взята с литкода](https://leetcode.com/problems/allow-one-function-call/description/)

---

В начале нам необходимо объявить переменную called, которая будет отслеживать состояние вызова функции. Затем мы возвращаем функцию, которая замыкается на переменной called. Если called имеет значение true (что означает, что функция уже была вызвана ранее), то возвращается undefined. В противном случае, мы устанавливаем called в true и вызываем оригинальную функцию.

```js
function runOnce(fn) {
  let called = false;
  
  // return (...args) => {
  return function(...args) {   
    // Если у нас called был уже вызван заранее, то он вернет undefined
    if (called) return undefined;
    called = true;
    return fn(...args);
  };
}

const logHello = () => {
  console.log('hello!')
}

const logHelloOnce = runOnce(logHello);
console.clear();
logHelloOnce();
logHelloOnce();
```
</details>

<details>
<summary>Реализовать функцию carry (каррирование)</summary>

Каррирование - это преобразование функции от нескольких аргументов в последовательность функций, каждая из которых принимает один аргумент.

```js
function sum(a, b, c) {
  return a + b + c  
}

function curry(fn) {      
  // (1, 2, 3) => args.length === 3
  // (1, 2)(3) => args.length === 2 и 3
  // (1)(2)(3) => args.length === 1 2 3 

  return function curried(...args) {
    // Если достаточно аргументов, вызываем исходную функцию
    if (args.length >= fn.length) {                      
      return fn(...args);
    }
    
    // Если недостаточно → возвращаем новую функцию, которая "помнит" старые аргументы через замыкание и принимает новые, объединяя их
    return (...nextArgs) => curried(...args, ...nextArgs);     
  };
}

curry(sum)(1, 2, 3);
curry(sum)(1, 2)(3);
curry(sum)(1)(2)(3);
```

</details>
</details>

<details>
<summary>Необходимо написать функцию compose</summary>

Необходимо написать функцию compose, которая комбинирует (склеивает) несколько функцию в одну цепочку вычислений. (loadash, классовые компоненты)

- Принимает несколько функций в качестве аргументов
- Возвращает новую функцию, которая при вызове:
  - Выполняет переданные функции справа налево (от последней к первой)
  - Результат каждой функции передаётся в следующую как аргумент


```js
const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

compose(square, times2)(2) === square(times2(2))                 // true
compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))) // true
```

### Ответ

```js
const compose = (...functions) => {
  // Возвращаем новую функцию которая принимает все аргументы
  return (...args) => {
    // Проходимся по функциям справо-налево
    return functions.reduceRight((acc, func) => {
      // Оборачиваем в массив так как нужна для передачи нескольких аргументов
      return [func(...acc)]

      // Извлекаем значением
    }, args)[0]
  }
}
```
</details>

<details>

<summary>Написать функцию timeLimited которая реджектит по истечению времени</summary>

[Leetcode - 2637. Promise Time Limit](https://leetcode.com/problems/promise-time-limit/description/) - Дана асинхронная функция fn и время t в миллисекундах, нужно вернуть новую версию этой функции, выполнение которой ограничено заданным временем. Функция fn принимает аргументы, переданные в эту новую функцию.Возвращаемая функция работает по следующим правилам: 
- если fn выполнится за заданное время t, то функция резолвит полученные данные;
- если fn не выполнился за заданное время t, то функция реджектит строку "Time limit exceeded"

```js
const timeLimited = (fn, t) => {
  const errorMessage = "Time Limit Exceeded";
  // Функция исполнитель, которая будет использовано для создания promise. Она будет использовать setTimeout, чтобы через время t отклонить promise с сообщением, которая мы передаем.
  const executor = (resolve, reject) => setTimeout(() => reject(errorMessage), t);

  return async (...args) => {
    // Переменная которая будет ожидать выполнения нашего промиса
    const timeout = new Promise(executor);
    // Переменная для передачи функции со всеми аргументами
    const result = fn(...args);
    // Возвращаем метод Promise.race, который в свою очередь возвращает результат первого промиса который завершится
    return Promise.race([timeout, result])
  }
}
```

</details>

<details>
<summary>Необходимо реализовать метод groupBy, расширяющий стандартные методы массивов.</summary>

[leetcode - 2631. Group By](https://leetcode.com/problems/group-by/description/) - Необходимо реализовать метод groupBy, расширяющий стандартные методы массивов. - Метод должен возвращать сгруппированную версию массива - объект, в котором каждый ключ является результатом выполнения переданной функции fn(arr[i]), а каждое значение - массивом, содержащим все элементы исходного массива с этим ключом

```js
Array.prototype.groupBy = function(fn) {
    
};

// ----- Примеры -----
const array1 = [{ id: 1 }, { id: 1 }, { id: 2 }]
const fn = (item) => item.id;
console.log(array1,groupBy(fn));
// { 1: [ {id: 1}, { id: 1 }], 2: [ {id: 2}] }

const array2 = [1, 2, 3];
console.log(array2.groupBy(String));
// { "1": [1], "2": [2], "3": [3] }
```

### Ответ 
```js
Array.prototype.groupBy = function(fn) {
  const object = {};

  // Проходимся по item, где this - любой массив, с которым мы будем сталкиваться
  for (let item of this) {
    const key = fn(item)

    // Если ключа нет создаем пустой массив
    if (!object[key]) {
      object[key] = [];
    }
    
    // А если он есть то пушим item
    object[key].push(item)
  }

  return object
};
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
  // ToDo
}

function log(title, message) {
  console.log(title + ": " + message);
}

var logLimited = callLimit(log, 3)
logLimited('title', 'desc')     // output => title: desc
logLimited('title2', 'desc')    // output => title2: desc
logLimited('title3', 'desc')    // output => title3: desc
logLimited('title4', 'desc')    // Не сработает, в консоль ничего не выведется

logLimited.reset()              // Перезагружаем счетчик и можно еще 3 раза вызвать
logLimited('title5', 'desc')    // output => title5: desc
```

### Ответы

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
<summary>Реализовать метод times для числового объекта</summary>

Функция должна принимать callback и вызывать его заданное кол-во раз с индексом текущей итерации

```js
Number.prototype.times = function(fn) {
  // Оборачиваем в number, так как можем получить объект
  const num = Number(this);
  let count = 0;

  // Если оно меньше нашего num = 3
  while (count < num) {
    // То вначале мы вызываем, так как с нуля эту функцию а потом прибавляем
    fn(count);
    count++
  }
}

```

Пример
```js
console.clear();
(3).times(console.log)    // 0 1 2
```
</details>

<details>
<summary>Функция get(obj, path){...}</summary>

Нужно написать функцию get. На входе функция принимает объект и путь до поля объекта
Путь - это строка, разведенная точкой. Функция должна вернуть соответствующее поле объекта. Запрашиваемого поля в объекте может не быть

```js
// Можно путь разделить через сплит, потом создать переменную которая будет 
// перемещаться внутри объекта. Создать цикл и проверить содержит ли он свойство 
// через hasOwnProperty
function get(obj, path) {
  const key = path.split(".");
  let current = obj;
  
  for (let i = 0; i < key.length; i++) {
    if (!current.hasOwnProperty(key[i])) {
      return undefined
    }

    current = current[key[i]];
  }

  return current;
}

const obj = {
  a: { 
    b: {
      c: 'd'
    },
    e: 'f'
  }
}

console.log(get(obj, 'a.b'));      // { c: 'd' }
console.log(get(obj, 'a.b.x'));    // undefined
```
</details>

<details>
<summary>Функция rle(str)</summary>

Дана строка, содержащая буквы //A-Z//:
"AAAABBCCCXY2DDDDEEEFFFFAAAABBBBBBBBBBBBBBBBBBBB"
Нужно написать функцию RLE, которая выведет строку вида:
"A4B3C2XYD4E3F3A6B28"

Примечания:
1. Если символ встречается один раз, он остается неизменным
2. Если символ встречается более одного раза, к нему добавляется число повторений

```js
function rle(str) {
  if (!str) return ""
  if (str.length === 1) return str;

  let counter = 1;
  let result = ""

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter += 1
    } else {
      result += str[i];
      if (counter > 1) result += counter
      counter = 1;
    }
  }

  return result;
}

console.log(rle('A'));    // A
console.log(rle('AAAB')); // A3B
console.log(rle('ABCCC')) // ABC3
```
</details>

<details>
<summary>function isMonotonic(number)</summary>

Написать функцию, которая принимает массив чисел. Необходимо определить монотонный он или нет

Монотонное число - это число которое может только либо увеличивать либо уменьшаться. Другими словами => 1, 2, 3, 4, 5 и 5, 3, 1 - это монотомность. А не монотомность это 1 10 2 41; 


```js
function isMonotonic(numbers) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      decreasing = false;
    }
    if (arr[i] < arr[i - 1]) {
      increasing = false;
    }
  }

  return increasing || decreasing
}

isMonotonic([1, 2, 3, 6]);          // true
isMonotonic([6, 3, 3, 2, 1]);       // true
isMonotonic([1, 1, 1]);             // true
isMonotonic([1, 10, 6]);            // false
```
</details>

### Вторая группа задач

<details>
<summary>Написать функцию, которая принимает url, асинхронно ходит по этому URL - get запросом и возвращает json.</summary>

Для получение данных использовать fetch. Можно использовать только Promise API. Если во время запроса произошла ошибка, то пробовать запросить еще 5 раз. Если в итоге информацию получить не удалось, вернуть ошибку "Заданный url недоступен"

```js
function get(url, counter = 1) {
  let messageError = "Заданный URL недоступен";

  return fetch(url)
    .then((response) => response.json())
    .catch(() => {
      if (counter > 5) return Promise.reject(messageError);
      return get(url, counter + 1)
    })
}

get(url)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

### Иногда могут спросить а как это сделать через then

```js
// Решение через .then
function get(url, retryCount = 1) {
  return fetch(url)
    .then(
      (res) => resolve(res.json())
      // 400 или 500
      () => {
        if (count > 5) return Promise.reject("Заданный URL недоступен")
        return get(url, ++retryCount)
      }
    )
} 
```

</details>

<details>
<summary>Функции auth() и tryAuth()</summary>

Функция `asyncAuth(callback)` принимает callback, в который может быть передана ошибка (первым аргументом) и данные с бекенда (вторым аргументом). 
`asyncAuth((error, data) => {})`

Вам нужно реализовать функцию `auth()`, которая вызывает `asyncAuth()`, но возвращает Promise

### Ответ №1

```js
function auth() {
  return new Promise((resolve, reject) => {
    asyncAuth((error, data) => {
      if (error) return reject(error)

      resolve(data)
    })
  })
}

// auth().then(data => ).catch(err => )
// await auth()
```

Функция tryAuth() использует auth() и в случае ошибки, совершает N дополнительных попыток. В случае, если все попытки провалились - вернуть последнюю ошибку

### Ответ №2

```js
async function tryAuth(n){
  try {
    const response = await auth();
    return response
  } catch (err) {
    n -= 1;
    if (n === -1) throw err;
    return tryAuth(n) 
  }
}

// tryAuth(10).then(data => ).catch(err =>)
```
</details>

<details>
<summary>Два сервиса checkResult(url1/2, solution)</summary>

Необходимо проверить решение задачи по двум сервисом, вызвав `checkResult(url1, solution), checkResult(url2, solution) checkResult: (url: string, solution: string | number) => Promise<boolean>`;

import {checkResult} from 'myLib' - Делаем запрос и возвращает promise со значением boolean

- Если оба запроса вернули true - вывести success;
- Если хоть один вернул false - вывести fail;
- Если хоть один не ответил - вывести error;
- Если хоть один отвечает дольше 1 сек - вывести timeout

```js
import {checkResult} from 'myLib';

const solution = "Any answer";
const url1 = "yandex.ru";
const url2 = "google.com";

const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
const url2 = 'https://jsonplaceholder.typicode.com/todos/1';

checkResult(url1, solution);
checkResult(url2, solution);
```

### Ответы

```js
const promise_01 = checkResult(url1, solution);
const promise_02 = checkResult(url2, solution);

function checkConditions (promise_01, promise_02) {
  const filedPromise = new Promise((res, rej) => setTimeout(() => rej('timeout'), 1000));
  
  // Дожидаемся выполнения все промисов и оборачиваем в Promise.race, который ждет выполнения
  // первого либо успешного либо отклоненного промиса
  const result = Promise.race([Promise.all([promise_01, promise_02], timeoutPromise)])
  
  return result.then(([bool_01, bool_02]) => {
    if (bool_01 && bool2) console.log('success');
    console.log('fail')
  }).catch((error) => throw 'text')
}

try {                                                        
  checkConditions(promise_01, promise_02)
} catch (error) {
  console.log(error);
}

--- Объяснения ---
1. Создали искусственный promise с 1 секундой который если успеет выполнится, вернет нам setTimeout

2. Потом мы все таки дожидаемся либо promise.All  или наш setTimeout

3. Чтобы обработать ошибку можем использовать try {} catch (() => {})
```

</details>


<details>
<summary>Необходимо убрать все falsy значения - filterFalsy(obj)</summary>

Необходимо написать функцию, которая на вход принимает объект и убирает из него все falsy значения;

falsy значение - это такое значение value, для которого Boolean(value) === false считаем, что obj - результат выполнения JSON.parse, то есть plain object

```js
function filterFalsy(obj) {
  // code here
}

console.log(filterFalsy([null, 0, false, 1]));    // => [1]
console.log(filterFalsy({ 'a': null, 'b': [false, 1]}));    // => { 'b': [1] }
console.log(filterFalsy([null, 0, 5, [0], [false, 16]]));   // => [5, [], [16]]
```

### Ответ

```js
function filterFalsy(obj) {
  if (Array.isArray(obj)) { 
    // Фильтруем а потом рекурсивно каждое значение разбираем
    return obj.filter(Boolean).map(filterFalsy)
  }
  
  if (obj !== null && typeof obj === 'object') {
    const result = {};
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = filterFalsy(obj[key]); 
        
        if (Boolean(value)) result[key] = value
      }
    }
    
    return result;
  }

  return obj;
}
```

</details>


<details>
<summary>Реализовать структуру данных MaxStack</summary>

Реализовать структуру данных MaxStack, в которой есть методы: 
- pop() - удаляет и возвращает последний добавленный элемент за O(1), кидает исключение или возвращает ошибку, если стек пустой;
- push(value) - добавляет элемент в стек за O(1);
- max() - возвращает макимальное значение среди всех элементов стека за O(1), кидает исключение или возвращает ошибку, если стек пустой

```js
const stack = new MaxStack();
stack.push(2);                // max = 2, stack = [2]
stack.push(1);                // max = 2, stack = [2, 1]
stack.push(3);                // max = 3, stack = [2, 1, 3]
stack.push(3);                // max = 3, stack = [2, 1, 3, 3]
stack.pop();                  // 3; max = 3, stack = [2, 1, 3]
stack.pop();                  // 3; max = 2, stack = [2, 1]
```

### Ответ

```js
class MaxStack {
  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  push(value) { 
    this.stack.push(value);
    
    if (this.maxStack.length === 0 || value >= this.max()) {
      this.maxStack.push(value);
    }
  }

  pop() {     
    const value = this.stack.pop();

    if (value === this.max()) {
      this.maxStack.pop();
    }
    
    return value;
  }

  max() {
    if (this.maxStack.length === 0) {
      throw new Error("Stack is empty");
    }
    
    return this.maxStack[this.maxStack.length - 1];
  }
}
```
</details>

<details>
<summary>Нужно написать полифилл для Array.prototype.some</summary>

Нужно написать полифилл для Array.prototype.some

Параметры
1. callback - функция проверки каждого элемента, принимает 3 аргумента:
- element - текущий обрабатываемый элемент массива
- index (необязательный) - индекс текущего обрабатываемого элемента массива
- array (необязательный) - массив, по которому осуществляется проход

2. thisArg (необязательный) - значение, используемое в качестве this при выполнении функции callback.

Возвращаемое значение
true, если функция проверки возвращает truthy значение хотя бы одного элемента массива иначе false

```js
Array.prototype.some = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    // this[i] - это 1 2 3 'hello',
    // i - это индекс 0 1 2 3
    // this - 4 раза создастся массив
    const result = callback(this[i], i, this)

    if (result) return true
  }

  return false
}

console.log([1, 2, 3, 'hello'].some(arg => typeof arg === 'string')) // true
```
</details>

<details>
<summary>Реализовать полиморфизм Promise.race</summary>

Нужно реализовать идентичный метод, не используя другие методы класса.

Вот некоторый особенности, которые помогут тебе начать:
  - метод принимает массив промисов;
  - метод возвращает промис;
  - метод ждет фуфила одного из переданных промисов;
  - и сразу возвращает его результат.

На примере с кодом будет понятнее

### Ответ 

```js
const promiseRace = (promises) => {
  if (promises.length === 0) {
    return Promise.resolve()
  }
  
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => 
      Promise.resolve(promise)
        .then(resolve)
        .catch(rej)
    )
  })
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve('Первый'), 500));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Второй'), 200));
const promise3 = new Promise((resolve) => setTimeout(() => reject('Третий'), 800));

promiseRace([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.error(error));
```
</details>

<details>
<summary>Реализовать полиморфизм Promise.any</summary>

Реализовать функцию any, которая бы работала, как Promise.any().

Функция принимает массив проммисов (считаем что непустой) и возвращает промис. Если какой-то из переданных промисов резолвится (успешно выполнится), то возвращаемый промис резовлится с этим значением. Если все переданные промисы реджектятся, то возвращаемый промис реджектится с ошибкой AggregateError, в которой сгруппированы все ошибки.

AggregateError можно создавать таким образом: `new AggregateError(error, 'No promise in any was resolved');`

### Ответ

```js
function any(promises) {
  let showReject = new AggregateError(error, 'No promise in any was resolved');

  return new Promise((resolve, reject) => {
    const errors = [];

    promises.forEach((promise, index) => {
      promise
        .then(resolve)
        .catch((error) => {
          errors[index] = error;
          promise.length--;
          
          if (promise.length === 0) reject(showReject);
        });
    });
  })
}

// 1. Возвращаем новый promise
// 2. Инициализируем массив ошибок и счетчик ожидающих promises
// 3. Для каждого promise в массиве:
// - Преобразуем в promise с Promise.resolve() (на случай не-promises)
// - Если promise resolve - сразу resolve основной promise с его значением
// - Если reject - сохраняем ошибку и уменьшаем счетчик
// 4. Когда все promises reject (счетчик = 0) - reject с AggregateError
```

</details>

<details>
<summary>Реализовать полиморфизм Promise.all</summary>

Здесь я просто предположил что может быть промисс all


```js
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    // Если массив пустой - сразу резолвимся с пустым массивом
    if (promises.length === 0) {
      return resolve([]);
    }
    
    const results = new Array(promises.length);
    let completedCount = 0;
    
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completedCount++;
          
          // Если все промисы завершились
          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject); // Если любой промис реджектится - сразу реджектим весь
    });
  });
}
```

</details>

<details>
<summary>Отвратительная задача  - intersection</summary>

Даны два отсортированных списка с интервалами присутствия пользователей в онлайне в течение дня. Начало интервала строго меньше конца. Нужно вычислить интервалы, когда оба пользователя были в онлайне. Интервалы указаны в часах, считаем что могут быть часы от 0 до 24

```js
// 

function intersection(firstList, secondList) {
  let result = [];
  let firstPointer = 0; 
  let secondPointer = 0;

  // Делаем проверку, что мы не дошли до конца первого и второго списка интервала
  // (0 < [[8,12],[17,22]]) ===> 0 < 2 && (0 < [[5,11],[14,18],[20,23]]) ===> 0 < 3
  while(firstPointer < firstList.length && secondPointer < secondList.length) {
    const leftIndex = firstList[firstPointer]              // 8 8 17 17 ===> index[0]; 12 12 22 22 ===> index[1]
    const rightIndex = secondList[secondPointer]           // 5 14 14 20 ===> index[0]; 11 18 18 23 ===> index[1]
      
    // Max(8 8 17 17 || 5 14 14 20) => 8 14 17 20
    const start = Math.max(leftIndex[0], rightIndex[0]);
    // Min(12 12 22 22 || 11 18 18 23) => 11 12 18 22  
    const end = Math.min(leftIndex[1], rightIndex[1]);

    // 8 14 17 20 < 11 12 18 22 ===> [8, 11], [17, 18], [20, 22] 
    if(start <= end) result.push([start, end]);

    // Идем в следующую цепочку
    leftIndex[1] < rightIndex[1] ? firstPointer++ : secondPointer++
  }

  return result;
};

console.log(intersection(
  [[8, 12],[17, 22]],
  [[5, 11],[14, 18],[20, 23]];
))
// [8, 11], [17, 18], [20, 22] 

```

</details>