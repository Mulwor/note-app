# Этап 1: платформа

## Что из себя представляет данная секция 

Платформа длится около часа, за это время собеседующий должен решить как можно больше задач (~5). Во время данного этапа собеседующий не должен ничего гуглить, дебажить и использовать console.log. В случае если возникают вопрос, то можно спросить у интервюера, но большое кол-во вопросов может сказаться на том, что данную платформу не сможете пройти.

## Если хотите хорошо пройти данную секцию необходимо:
- Первые задачи в основном легкие, совет просто узнать, что выведется консоль или что-то простое;
- Решить задачи из [leetcode - Days 30](https://leetcode.com/studyplan/30-days-of-javascript/) - в основном задачи под номер 2 или 3 берутся от туда;

## Задачи

<details>
<summary>Приведены 9 секций с кодом. Какой будет результат вызова каждого</summary>

```js
console.log(typeof []);         // 1
console.log(typeof null);       // 2
console.log(1 + "2");           // 3.
console.log("4" - 2);           // 4.

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

### Ответ

```js
// 1. Здесь у нас пустой массив. В JavaScript массивы являются объектами, поэтому typeof вернёт "object".

console.log(typeof []);

// 2. Здесь тоже "object" — это историческая ошибка в JavaScript.
console.log(typeof null);
```

```js
// 3. При сложении, JS видит строку в одном из операдов и преобразует все остальные операнды тоже в строку: String(1) + String(2) => '12'

console.log(1 + "2");  

// 4. При вычитании JS - преобразует строку "4" в число, а затем вычитает: Number(4) - 2 ===> 2. И это происходит всегда, стоит отметить, что также приводит к числу - умножение, деление взятие от остатка, возведение в степень и т.д.
console.log("4" - 2);
```

```js
// 5. Сначала выполнятся все синхронные вызовы (first и third), а setTimeout даже с нулевой задержкой выполнится асинхронно после них.
const first = () => console.log("Один");
const second = () => console.log("Два");
const third = () => console.log("Три");

first();
setTimeout(second, 0);
third();
```

```js
// 6. Так как примитивные типы передаются по значению в первой переменной сохраняется число 2, затем мы просто копируем и в него записывается число 2, и на следующей строке увеличивается b на единицу
var a = 2;
var b = a;
b++
console.log(a);    // 2 
console.log(b);    // 3

// 7. Массивы (как и объекты) передаются по ссылке, а не по значению. При присваивании d = c, переменная d получает ту же самую ссылку на массив в памяти. Теперь обе переменные работают с одним и тем же массивом.
var c = [1, 2, 3]
var d = c;
d.push(4);
console.log(c);     // [1, 2, 3, 4]
console.log(d);     // [1, 2, 3, 4]
```

```js
// 8. В JS есть такое понятие как временная мертвая зона которая появилась в ЕС6, что означает, что мы не можем вызвать переменную до его инициализации если мы вызовем его, то у нас будет ошибка. Но так как это появилась это позже варов, то с ними в начале будет undefined, а затем число
{ 
  console.log(i);   // undefined
  var i = 10;
  console.log(i)    // 10
}

// 9
{
  console.log(i);   // Reference Error
  const i = 10;
  console.log(i)    // 10
}
```
</details>

<details>
<summary>Даны 3 секции кода, необходимо написать результат выполнения каждого console.log</summary>

```js
var n = 1;

function f(n) {
  n = 3;
}
f(n)
console.log(n)     // 1

// Когда мы передаем примитив в функцию, то создается отдельная локальная копия этого значения. По этому ответ 1
```

```js
var obj = { a: 1 };

function f1(o) {
  o.a = 5;
}

f1(obj)
console.log(obj)  // { a: 5 } 

// Во второй случае передается уже ссылка на объект. По этому ответ 5
```

```js
var obj = { a: 1 };

function f2(o) {
  o = { hello: 1 }
  console.log(o)
}

f2(obj)
console.log(obj) // { a: 1 }
// Ссылка ведет на существующий объект, но внутри функции параметр 
// o переназначается на новый объект, который не влияет на исходный obj
```
</details>

<details>
<summary>Пройтись по коду и рассказать максимально подробно объяснить, что происходит в каждой строчке кода</summary>

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

### Ответ

1. `Promise.resolve(1)` — создаётся уже выполненный (fulfilled) promise со значением 1.
→ состояние: fulfilled, значение 1.
2. `.then((x) => x + 1)` — получает значение 1, возвращает новый промис, который выполнится со значением 2.
→ состояние: fulfilled, значение 2.
3. `.then((x) => { throw x })` — выбрасывает исключение, из-за чего возвращаемый промис переходит в состояние rejected с причиной 2.
→ состояние: rejected, reason: 2.
4. `.then(x => console.log(x))` — не выполнится, так как предыдущий промис был отклонён (rejected).
5. `.catch(err => console.log(err))` — перехватывает ошибку, выводит 2.
Так как console.log возвращает undefined, этот catch завершится успешно (fulfilled) со значением undefined.
→ в консоли: 2
→ состояние: fulfilled, значение undefined.
6. `.then(x => Promise.resolve(x))` — вернёт промис, выполненный со значением undefined.
→ состояние: fulfilled, значение undefined.
7. `.catch((err) => console.log(err))` — не выполнится, так как ошибок нет.
8. `.then(x => console.log(x))` — выведет undefined. → в консоли: undefined.

```js
Promise.resolve(1)                          // fulfilled: 1
  .then(x => x + 1)                         // fulfilled: 2  
  .then(x => { throw x })                   // rejected: 2
  .then(x => console.log(x))                // ПРОПУСКАЕТСЯ (был reject)
  .catch(err => console.log(err))           // Выведет: 2, fulfilled: undefined
  .then(x => Promise.resolve(x))            // fulfilled: undefined
  .catch(err => console.log(err))           // ПРОПУСКАЕТСЯ (был fulfilled)
  .then(x => console.log(x))                // Выведет: undefined
```

</details>

<details>
<summary>Написать функцию strjoin, которая склеивает строки через разделитель</summary>

```js
function strjoin(separator, ...word) {
  // code here
}

console.log(strjoin('.', 'a', 'b', 'c')); // 'a.b.c.
console.log(strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f')); // a-b-c-d-e-f
console.log(strjoin('.'));               // ? 

// Напиши решение с помощью ЕС6, и до ЕС5 и что такое arguments

```

### Ответ

```js
// 1. Мы в начале возьмем, он будет в качестве первого аргумента, а затем используем rest, которые собирают все аргументы после separator в массив strings.
function strJoin(separator, ...words) {
  return words.join(separator)
}
```

```js
// 2. C помощью ЕС5
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

strJoin(".", "a", "b", "c")                     // 'a.b.c.
strJoin("-", "a", "b", "c", "d", "e", "f");     // 'a-b-c-d-e-f'
strJoin("")                                     // '' (пустая строка)
```
</details>

</details>

<details>
<summary>Написать функцию задержки sleep</summary>

```js
function sleep() {
  // code here
}
```

### Ответы
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
  // TODO  
}

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);

sumPromises(promise1, promise2).then(console.log); // 3
```

### Ответы

Мы можем использовать метод promise.all([prom1, prom2]), который принимает массив promises,  и возвращает новый promise, если выполнится успешно, а если нет только дальше он не пойдет и вернет отклоненный promise

```js
function sumPromises(...promises) {
  return Promise.all(promises)
    .then(results => results.reduce((sum, value) => sum + value, 0));
}
```

</details>
</details>


<details>
<summary>Реализовать функцию разделения слов - splitWordsBySeparator</summary>

Необходимо написать функцию, которая разделит каждую строку в массиве `words` по строке `separator`. Необходимо вернуть массив получившихся после разделения строк, исключая пустые строки. [Задача взята с leetcode](https://leetcode.com/problems/split-strings-by-separator/)

```js
const splitWordsBySeparator = (words, separator) => {
  // code here
};

splitWordsBySeparator(["one.two.three", "four.five", "six"], '.')       // ["one", "two", "three", "four", "five", "six"]
splitWordsBySeparator(["hello-world", "this-is", "great"], '-')         // ["hello", "world", "this", "is", "great"]
splitWordsBySeparator(["test..case", "split.", ".start"], '.')          // ["test", "case", "split", "start"]
```

### Ответ

Во первых нам необходимо написать переменную с пустым массивом. Затем внутри с помощью цикла необходимо пробежаться по словам и пушить их в ранее записанную переменную

У меня сплита первым аргументом можно вставить separator => `str.split([separator[, limit]])`, затем мы можем отфильтровать его по булевому значению, чтобы избавится от пустых строк

```js
var splitWordsBySeparator = function(words, separator) {
  let result = []

  for (let i = 0; i < words.length; i++) {
    let split = words[i]
      .split(separator)                     // (1) [ '', 'easy', '' ] (2) [ '', 'problem', '' ]
      .filter(Boolean);                     // (1) ['easy'] (2) ['problem']
      // .filter(value => value != '')
    
    result.push(...split)
  }

  return result
};
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

Преобразуйте строку из camelCase в snake_case.

```js
function camelToSnake(text) {
  // code here
}

camelToSnake("helloWorld")        // "hello_world"
camelToSnake("getHTTPResponse")   // "get_http_response"
camelToSnake("firstName")         // "first_name"
camelToSnake("UserID")           // "user_id"
```

### Ответ

Мы внутри можем написать переменную, куда будем складывать символы. Затем нам необходимо пройтись по циклу и написать условия,
которая будет проверять является ли символ заглавной буквой и напишем условия, если не первый символ, то мы не добавляем нижнее
подчеркивания. 

```js
function camelToSnake(text) {
  let result = '';
  
  for (let i = 0; i < text.length; i++) {    
    // С помощью условия - `(char >= 'A' && char <= 'Z')` - мы можем проверить является ли символ заглавной буквой
    if (text[i] >= 'A' && text[i] <= 'Z') {
      // Добавляем подчеркивание, если это не первый символ
      if (i !== 0) { 
        result += '_';
      }

      result += text[i].toLowerCase();
    } else {
      result += text[i];
    }
  }
  
  return result;
}
```

С помощью регулярного выражения replace
```js
function camelToSnake(text) {
  // Заменяем все заглавные буквы на _ + та же буква в нижнем регистре
  // $1 - это содержимое первой группы (в нашем случае - заглавная буква)
  return text.replace(/([A-Z])/g, '_$1').toLowerCase();
}
```
</details>


<details>
<summary>Панаграмма</summary>

Панграмма (с греч. — «все буквы»), или разнобуквица, — короткий текст, использующий все или почти все буквы алфавита, по возможности не повторяя их.

Вам задана строка, состоящая из латинских букв, пробелов и знаков преминания. Строка называется панграммой, если она содержит каждую из 26 латинских букв хотя бы раз. Определите является ли строка панграммой. [Похожая задача с leetcode](https://leetcode.com/problems/check-if-the-sentence-is-pangram/)

```js
function isPangram(text) {
    // your code her
}

console.log(isPangram('A pangram or holoalphabetic sentence is a sentence using every letter of a gived alphabet at least once'))  // False
console.log(isPangram('Waltz, bad nymph, for quick jigs vex')) // True
```

### Ответ

```js
const letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function isPangram(text) {
  let newStr = new Set();

  for (let i = 0; i < text.length; i++) {
    let newTextWithUpperCase = text[i].toUpperCase()
        
    if (newTextWithUpperCase >= letter[0] && newTextWithUpperCase <= letter[25]) {
      newStr.add(text[i])
    }
  }

  return newStr.size === 26
}
```

```js
function isPangram(text) {
  const letters = new Set();
    
  for (let char of text.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
      letters.add(char);
    }
  }
    
  return letters.size === 26;
}
```
</details>


<details>
<summary>Функция обертка - runOnce</summary>
Реализовать функцию-обертку runOnce, которая принимает функцию и возвращает новую функцию. Новая функции может быть вызвана только 1 раз, все последующие вызовы возвращают undefined.

Оборачиваемая функция может принимать аргументы и возвращать результат. [Задача взята с литкода](https://leetcode.com/problems/allow-one-function-call/description/)

```js
function runOnce(fn) {
  // your code
}

const logHello = () => {
  console.log('hello!')
}

const logHelloOnce = runOnce(logHello);
console.clear();
logHelloOnce();
logHelloOnce();
```

### Ответы

В начале нам необходимо объявить переменную called, которая будет отслеживать состояние вызова функции. Затем мы возвращаем функцию, которая замыкается на переменной called. Если called имеет значение true (что означает, что функция уже была вызвана ранее), то возвращается undefined. В противном случае, мы устанавливаем called в true и вызываем оригинальную функцию.


```js
function runOnce(fn) {
  let called = false;
  
  return function(...args) {   
    // Если у нас called был уже вызван заранее, то он вернет undefined
    if (called) return undefined;
    called = true;
    return fn(...args);
  };
}
```

```js
function runOnce(fn) {
  let called = false;
  
  return (...args) => {
    if (called) return undefined;
    called = true;
    return fn(...args);
  };
}
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
  // TODO
}

curry(sum)(1, 2, 3);
curry(sum)(1, 2)(3);
curry(sum)(1)(2)(3);
```

### Ответы

```js
function curry(fn) {                  
  return function curried(...args) {                                // 1.
    if (args.length >= fn.length) {                                 // 2.
      return fn(...args);
    }
    
    return (...nextArgs) => curried(...args, ...nextArgs);          // 3.
  };
}

--- Объяснения ---

1. Возвращаем функцию с аргументом;

2. Проверяем кол-во переданных аргументов: fn.length - количество параметров исходной функции (для sum = 3). Если аргументов достаточно - вызываем исходную функцию;

3. Если аргументов недостаточно: возвращаем новую функцию, которая запоминает текущие аргументы через замыкание и ждет следующие
```

```js
function curry(fn) {                                       // ? 1
  return function curried(...args) {                       // ? 2
    if (args.length >= fn.length) {                        // ? 3
      return fn.apply(this, args)
    } 

    return curried.bind(this, ...args)
  }
}

console.log(curry(sum)(1, 2, 3))
console.log(curry(sum)(1, 2)(3))
console.log(curry(sum)(1)(2)(3))

--- Объяснения ---

1. Создаем функцию каррирования, и передаем в качества аргумента function;

2. В теле нам необходимо вернуть функцию, которую мы потом вызовем еще раз. Необходимо также проверять достаточно ли аргументов было передано, для этого мы воспользуемся spread оператором arguments;

3. Если длина аргументов больше или равен чем сама функция требует этих аргументов, то мы просто берем и возвращаем результат;

4. `fn.apply(this.args)` - вызывает исходную функцию с текущим контекстом (this), args - все накопленные аргументы, который возвращает результат;

5. `curried.bind(this, ...args)` - bind создает новую функцию с привязанными аргументами this сохраняет контекст вызова, ...args - аргументы, которые уже были переданы и возвращает функцию, которая ждет остальные аргументы;
```

</details>
</details>

<details>
<summary>Необходимо написать функцию compose</summary>

Необходимо написать функцию compose, которая комбинирует несколько функцию в одну цепочку вычислений. (loadash, классовые компоненты)

Функция compose на первый свой вызов возвращает просто функцию - `compose(square, times2)` - она еще не вызвалась мы можем выполнить еще раз (2). Функций может быть несколько

Когда мы второй раз вызываем передаем какие-то аргументы (от 0 до 500 аргументов) и они уже все передаются в функцию например в times2, а его результат передается аргументом в square. А в кейсе где их побольше например sum, а именно 3 и 4 результат sum передается аргументом в times2, потом результат от этого передается в square. Запись справа эквивалентно такому же


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
  return (...args) => {
    return functions.reduceRight((acc, fn) => {                // 2.
      return Array.isArray(acc) ? fn(...acc) : fn(acc);        // 3.
    }, args)
  }
}

--- Объяснения ---
1. Надо написать функцию compose со spread функций, затем необходимо вернуть набор аргументов состоящей из spread

2. Возвращаем функцию, которую объявили в самом начале и идем справа-налево через reduceRight а в теле функции пишем

3. Проверяем, является ли acc массивом: если да - передаем его элементы как отдельные аргументы в функцию, если нет - передаем acc как единственный аргумент
```
</details>

<details>

<summary>Написать функцию timeLimited которая реджектит по истечению времени</summary>

[Leetcode - 2637. Promise Time Limit](https://leetcode.com/problems/promise-time-limit/description/) - Дана асинхронная функция fn и время t в миллисекундах, нужно вернуть новую версию этой функции, выполнение которой ограничено заданным временем. Функция fn принимает аргументы, переданные в эту новую функцию.Возвращаемая функция работает по следующим правилам: 
- если fn выполнится за заданное время t, то функция резолвит полученные данные;
- если fn не выполнился за заданное время t, то функция реджектит строку "Time limit exceeded"

```js
const timeLimited = function (fn, t) {
  // Your code
}
```

### Ответы 

```js
const timeLimited = (fn, t) => {
  const str = "Time Limit Exceeded";
  const executor = (_, reject) => setTimeout(() => reject(str), t);

  return async (...args) => {
    const timeout = new Promise(executor);
    const result = fn(...args);
    return Promise.race([timeout, result])
  }
}


----- Объяснение -----
1. Создаем переменную в котором помещаем текст ошибки;
2. Создаем функцию executor которая будет использовано для создания promise. Она будет использовать setTimeout, чтобы через время t отклонить promise с сообщением,
которая мы передаем. Resolve нам не нужен мы можем его пропустить;
3. Затем возвращаем функцию передавая в нее аргументы;
4. Внутрь возвращаемой функции поместить timeout который будет ожидать выполнения нашего promise
5. После этого создаем еще одну переменную, где передаем функцию со всеми аргументами;
6. И в конце необходимо просто вернуть метод Promise.race, где в качестве аргумента передаем массив промисов и он возвращает результат первого которого завершится
```

```js
const timeLimited02 = (fn, t) => new Promise((resolve, reject) => {
    setTimeout(() => reject("Time Limit Exceeded"), t);
    fn(...args).then(resolve).catch(reject)
})

----- Объяснение -----
1. Возвращаем новый promise который принимает у нас сразу два параметра;
2. В теле этого promise запускаем setTimeout, которая время через t вызовет reject с нашим сообщением;
3. А после timeout вызываем функцию fn передавая туда все аргументы и если fn завершается без ошибок мы используем чейнинк и метод then в которую опять же передаем resolve которая вернет наш результат и используем метод catch если она вернется с ошибкой;
```

</details>

<details>
<summary>Необходимо реализовать метод groupBy, расширяющий стандартные методы массивов.</summary>

[leetcode - 2631. Group By](https://leetcode.com/problems/group-by/description/)

Необходимо реализовать метод groupBy, расширяющий стандартные методы массивов. - Метод должен возвращать сгруппированную версию массива - объект, в котором каждый ключ является результатом выполнения переданной функции fn(arr[i]), а каждое значение - массивом, содержащим все элементы исходного массива с этим ключом

```js
Array.prototype.groupBy = function(fn) {
    
};

// ----- Примеры -----
const array1 = [{ id: 1 }, { id: 1 }, { id: 3 }]
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

  for (let item of this) {
    const ket = fn(item)

    if (!object[key]) {
      object[key] = [];
    } else {
      object[key].push(item)
    }
  }

  return object
};

------------  Объяснения -------------
1. Необходимо создать объект;
2. Затем пройтись по всему массиву через цикл `for of`, где this - любой массив с которым мы будем использовать любой метод;
3. Внутри цикла создаем ключ, который будет формироваться с помощью вызова функции fn;
4. Если ключа у нас не имеется, то мы обращаем через объект ключ и записываем туда первый элемент - item. А если есть то мы просто пушим item;
```

```js
Array.prototype.groupBy = function(fn) {
  return this.reduce((grouped,item) =>{
    const key = fn(item)
    
    if (!grouped[key]){
      grouped[key] = []
    }
    
    grouped[key].push(item);

    return grouped
    },{})
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

### Ответ

```js
// Решение через .then
function get(url, retryCount = 1) {
  return fetch(url)
    .then(
      (res) => resolve(res.json())
      () => {
        if (count > 5) return Promise.reject("Заданный URL недоступен")
        retry get(url, ++retryCount)
      }
    )
} 
```

```js
// Решение через catch и счетчика
function get(url, retryCount = 1) {
  let counter = 0;
  
  function attemptToCall() {
    counter++;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        if (counter >= 5) throw new Error("Заданный URL недоступен");
        return attempt();
      });
  }
  
  return attemptToCall();
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
<summary>Вычислить интервалы пользователей в двух отсортированных списка</summary>

[Leetcode - 986. Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/description/) - основное отличие заключается в `if (start < end)` этом пункте, там должно быть `if (start <= end)`

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

### Ответы

```js
function intersection(user1, user2) {
  const result = [];
  let firstPointer = 0, 
  let secondPointer = 0;

  while (firstPointer < user1.length && secondPointer < user2.length) {
    const [start1, end1] = user1[firstPointer];
    const [start2, end2] = user2[secondPointer];

    const start = Math.max(start1, start2);
    const end = Math.min(end1, end2);

    if (start < end) result.push([start, end]);

    end1 < end2 ? firstPointer++ : secondPointer++;
  }

  return result;
}
```
</details>

<details>
<summary> Необходимо проверить решение задачи по двум сервисом, вызвав checkResult(url1, solution), checkResult(url2, solution) checkResult: (url: string, solution: string | number) => Promise<boolean>;</summary>

import {checkResult} from 'myLib' - Делаем запрос и возвращает promise со значением boolean

- Если оба запроса вернули true - вывести success;
- Если хоть один вернул false - вывести fail
- Если хоть один не ответил - вывести error;
- Если хоть один отвечает дольше 1 сек - вывести timeout

```js
import {checkResult} from 'myLib';

const solution = "Any answer";
const url1 = "yandex.ru";
const url2 = "google.com";

checkResult(url1, solution);
checkResult(url2, solution)
```

### Ответы

```js
// ...
// Они возвращают булевое значения
const a = checkResult(url1, solution);
const b = checkResult(url2, solution);

function checkConditions (a, b) {
  const promise = new Promise((res, rej) = {                    // 1. 
    setTimeout(() => throw 'timeout');
  }, 1000)

  const result = Promise.race([Promise.all([a, b], promise)])   // 2. 
  
  return result.then(([bool1, bool2]) => {
    if (bool1 && bool2) console.log('success');
    else console.log('fail')
  }).catch((error) => {
    throw error
  })
}

try {                                                          // 4.
  checkConditions(a, b)
} catch ((e) => {
  console.log(e)
})

--- Объяснения ---
1. Создали искусственный promise с 1 секундой который если успеет выполнится, вернет нам setTimeout

2. Потом мы все таки дожидаемся либо promise.All  или наш setTimeout

3. Чтобы обработать ошибку можем использовать try {} catch (() => {})
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
    this.stack = []; // основной стек для хранения значений
    this.maxStack = []; // стек для хранения текущих максимумов
  }

  push(value) {                   // Добавляет элемент в стек
    this.stack.push(value);
    
    // Если maxStack пустой или новый элемент >= текущего максимума
    if (this.maxStack.length === 0 || value >= this.max()) {
      this.maxStack.push(value);
    }
  }

  pop() {       // Удаляет и возвращает последний добавленный элемент
    if (this.stack.length === 0) {
      throw new Error("Stack is empty");
    }
    
    const value = this.stack.pop();
    
    // Если удаляемый элемент равен текущему максимуму, удаляем его из maxStack
    if (value === this.max()) {
      this.maxStack.pop();
    }
    
    return value;
  }

  max() {         // Возвращает максимальное значение в стеке
    if (this.maxStack.length === 0) {
      throw new Error("Stack is empty");
    }
    
    return this.maxStack[this.maxStack.length - 1];
  }
}
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
  if (Array.isArray(obj)) {                               // Если obj - массив
    return obj
      .map(item => filterFalsy(item))                     // рекурсивно обрабатываем каждый элемент
       // для массивов оставляем всегда, для остальных - проверяем Boolean
      .filter(item => !Array.isArray(item) ? Boolean(item) : true);
  }
  
  if (obj && typeof obj === 'object') {                   // Если obj - объект
    const result = {};
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = filterFalsy(obj[key]);              // рекурсивно обрабатываем значение
        
        // Добавляем в результат только если значение не falsy
        if (Boolean(value)) result[key] = value
      }
    }
    
    return result;
  }
  
  
  // Если это примитив - возвращаем как есть
  return obj;
}
```

</details>

<details>
<summary>Полифил Array.prototype.some</summary>

Нужно написать полифилл для Array.prototype.some

Параметры
1. callback - функция проверки каждого элемента, принимает 3 аргумента:
- element - текущий обрабатываемый элемент массива
- index (необязательный) - индекс текущего обрабатываемого элемента массива
- array (необязательный) - массив, по которому осуществляется проход

2. thisArg (необъязательный) - значение, используемое в качестве this при выполнении функции callback.

Возвращаемое значение
true, если функция проверки возвращает truthy значение хотя бы одного элемента массива иначе false

```js
Array.prototype.some = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    const callbackValue = callback(this[i], i, this)
    // const callbackValue = callback(thisArg, this[i], i, this)

    if (callbackValue) return true
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
      Promise.resolve(promise).then(resolve, reject)
      // .catch(rej)
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
<summary>Реализовать функцию any, promise.Any</summary>

Реализовать функцию any, которая бы работала, как Promise.any().

Функция принимает массив проммисов (считаем что непустой) и возвращает промис. Если какой-то из переданных промисов резолвится (успешно выполнится), то возвращаемый промис резовлится с этим значением. Если все переданные промисы реджектятся, то возвращаемый промис реджектится с ошибкой AggregateError, в которой сгруппированы все ошибки.

AggregateError можно создавать таким образом: `new AggregateError(error, 'No promise in any was resolved');`

### Ответ

```js
function any(promises) {
  return new Promise((resolve, reject) => {
    let showReject = new AggregateError(error, 'No promise in any was resolved')
    const errors = [];

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(error => {
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