### Задачи с собеседований

---

✅ Есть объект, какие ты способы знаешь, чтобы его заклонить

```js
const person = { name: "Valera", surname: "Valerovich" }
```

<details>
<summary>Ответ</summary>

- Через спред оператор {...person};
- Через метод объекта: Object.assign();
- Через JSON.parse(JSON.stringify());

</details>

---

❌  Что будет в консоль логе? 

```js
let firstObj = { greeting: 'hey' };
let secondObj = firstObj;

firstObj.greeting = 'ho';

console.log(secondObj.greeting); // ?
firstObj = { greeting: 'hello' };

console.log(secondObj.greeting); // ?
```

<details>
<summary>Ответ</summary>
...
</details>

---

❌  Что будет в консоль логе? 

```js
let a = {};
let b = {};

b[a] = 1

console.log(b);  //    { "[object Object]": 1 }
```

<details>
<summary>Ответ</summary>

b[a] = 1 - пытаемся использовать объект `a` как ключ объекта `b`
Объект a автоматически преобразуется в строку через toString()
a.toString() возвращает "[object Object]"
Фактически выполняется: b["[object Object]"] = 1
</details>

---

❌  Что будет в консоли?

```js
const a = { a: "a" };
const b = { b: "b" };
const c = {};

c[a] = a;
c[b] = b;

console.log(c[a].a, c[b].b); 
```

<details>
<summary>Ответ</summary>

</details>

---

❌  Какой будет ответ

```js
let a = {};
let b = {};
let obj = { [a]: 1, [b]: 2 };

console.log(obj[a] + obj[b])       // 4
```

<details>
<summary>Ответ</summary>

1. У объектов ключи могут быть либо строками либо символами. 
2. Когда мы используем объект в качестве ключа в квадратных скобках `a` и `b`, то он автоматически преобразует в строку. В объекте получается следующее

```js
let obj = { 
  "[object Object]": 1, 
  "[object Object]": 2 
};
```

3. А так как ключи у нас одинаковы, то они перезаписываются и сохраняется лишь последнее значение 2. Ответ будет 4. 
</details>
---

✅ Будет ли переменная b одинаковой переменной a, то есть будут ли они визуально одинаковые или разные. Какой будет ответ и как правильно отсортировать

```
const a = [10, 8, 2, 1, 5, 7, 4, 9]
const b = a.sort()
```

<details>
<summary>Ответ</summary>

Да, ответ будет одинаковый, так как метод sort мутирует (меняет исходный) исходный массив: [1, 10, 2, 4, 5, 7, 8, 9]. А чтобы правильно отсортировать необходимо a.sort((a, b) => (a - b))    
</details>

---

❌ Необходимо отсортировать массив по order, и нужно деструктуризовать его

```js
const input = [
  { order: 4, value: 'abcd' },
  { order: 2, value: 'qwer' },
  { order: 1, value: 'xyz1' },
  { order: 3, value: 'abx2' },
];
```

<details>
<summary>Ответ</summary>

1. Если нам нужна простая сортировка: input.sort((a, b) => a.order - b.order);
2. Если нам нужна деструктуризация: input.sort(({ order: orderA }, { order: orderB }) => orderA - orderB);
..
</details>

---

✅ У нас есть массив чисел, необходимо посчитать их однако число должно начинаться не с 0, а с -1

```
const digits = [1, 2, 3, 4]
```

<details>
<summary>Ответ</summary>

- Через reduce digits.reduce((a, b) => a + b, -1)
- Через цикл

```js
function sum (digits) {
  let value = -1;
  for (let i = 0; i < digits.length; i++) {
    value += digits[i]
  }
  return value
}
sum([1, 2, 3, 4])
```
</details>
</details>

Напишите функцию, которая переворачивает строку 

```js
const str = "Welcome to this JavaScript Guide!"; // => "emocleW ot siht ...."
const reverseWords = (str) => { ... };
console.log(reverseWords(str));
```

<details>
<summary>Ответ</summary>
 
```js
const str = "Welcёome to this JavaScript Guide!";

const reverseWords = (str) => {
  // return str.split("").reverse().join("").split(" ").reverse().join(' ')
  return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
};

console.log(reverseWords(str));
```

</details>

---

✅ Напишите функцию, которая удаляет дубликаты внутри массива

<details>
<summary>Ответ</summary>

1. Через такую структуру данных как [...new Set(array)]
2. Через filter и indexOf(element)

```js
const makeUniq = (names) => {
  return names.filter((element, id) => arr.indexOf(element) === id);
}
```

3. Через цикл

```js
const arr = [1, 1, 2, 3, 4, 4, 5, 5];

const removeDuplicates = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i])
    }
  }

  return result;
};

removeDuplicates(arr)
```

</details>

❌ Написать функцию, которая принимает массив чисел и возвращает массив, содержащий только те числа, которые встречаются в исходном массиве только один раз. Например, для массива [1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 5, 6] результат должен быть [2, 4].

```js
export const TEST_ARRAY = [1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 5, 6];
export const notRepeat = (testArr) => {};
notRepeat(TEST_ARRAY);
```

<details>
<summary>Ответ</summary>
</details>

---

✅ Что выведется в консоль

```
const year = Date.getYear();   
const month = Date.getMonth(); 
const day = Date.getDay();  

console.log (year, month, day)
```

<details>
<summary>Ответ</summary>
2023, 8(месяц начинается с нуля), 15
</details>

---
✅ В чем разница между process1 / process2. Представим себе, что каждый из action выполняется по 10 секунд, какой из action выполнится раньше и почему.

```
type action = () => Promise<string>

async function process1(action1: action, action2: action, action3: action): Promise<string[]> {
  const res1 = await action1();
  const res2 = await action2();
  const res3 = await action3();

  return [res1, res2, res3]
}

async function process2(action1: action, action2: action, action3: action): Promise<string[]> {
  return Promise.all([action1(), action2(), action3()])
}
```

<details>
<summary>Ответ</summary>

Выполните process2 так как метод promise.All - запускает promise параллельно и если у каждого из них будет по 10 секунд, то и выполнится он за 10 сек, так
как они параллельный в то время как в process1 - этого нет в начале выполнится первый await, а потом через 10 секунд второй, а потом через еще 10 третий

</details>

---

✅ Разработчик отправил на ревью, но убрал resolve. Вопрос: когда начнется action2 и начнется ли он?

```
const action2 = () => new Promise((res, rej) => {
  // res("SUCCESS")
});

async function process3(action1: action, action2: action, action3: action): Promise<string[]> {
  const res1 = await action1();
  const res2 = await action2();
  const res3 = await action3();

  return [res1, res2, res3]
}
```

<details>
<summary>Ответ</summary>

Promise никогда не завершится ни успехом, ни ошибкой, и будет находиться в состоянии pending бесконечно.

</details>

---
✅ Попросили подправить код и он подправил, однако вместо resolve у него теперь reject и async убрал Process1 - завершится или нет, и что будет результатом

```
const action2 = () => return new Promise((res, rej) => {
  rej("SUCCESS")
});

async function process1(action1: action, action2: action, action3: action): Promise<string[]> {
  const res1 = await action1();
  const res2 = action2();
  const res3 = await action3();

  return [res1, res2, res3]
}
```

<details>
<summary>Ответ</summary>

Нет, функция завершится с ошибкой. На этапе возврата массива [res1, res2, res3] произойдёт ошибка из-за отклонённого промиса res2.

</details>

---

✅ Необходимо написать функцию для слипа (sleep), чтобы он выполнился через 300 миллисекнуж после process1 и протипизируйте его

```
const action2 = () => return new Promise((res, rej) => {
   res("SUCCESS")
})

async function process1(action1: action, action2: action, action3: action): Promise<string[]> {
  const res1 = await action1();
  const res2 = await action2();
  const res3 = await action3();

  return [res1, res2, res3]
}

function sleep(time) {
  ...
}

const superProcess = async () => {
  await process1{...}
  await sleep(300)
  await process2{...}
}

```

<details>
<summary>Ответ</summary>

```js
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

</details>

---

❌ Какой порядок выполнения?

```js
console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve(console.log(5)).then(() => console.log(6));
setTimeout(() => console.log(7));
console.log(8);
```

<details>
<summary>Ответ</summary>

1 5 8 3 6 2 7 4

- console.log(1) и console.log(8) выполняются сразу.
- console.log(5) выполняется синхронно из Promise.resolve(console.log(5)).
- Микрозадачи (console.log(3), console.log(6)) выполняются до макрозадач.
- Макрозадачи (console.log(2), console.log(7), console.log(4)) выполняются после микрозадач, в - - порядке их постановки в очередь.

</details>

---

❌ Объясните, что происходит в данном коде и какой будет вывод в консоль при его выполнении.

```js
setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log("Создание промиса");
  resolve();
});

p.then(function () {
  console.log("Обработка промиса");
});

console.log("Конец скрипта");
```
<details>
<summary>Ответ</summary>
</details>

---

❌ Какой порядок выполнения?

```js
const promise = new Promise((resolve) => {
  console.log(1);

  setTimeout(() => {
    console.log("timerStart");

    resolve("success");

    console.log("timerEnd");
  });

  console.log(2);
});

promise.then((res) => console.log(res));

console.log(4);
```

<details>
<summary>Ответ</summary>

1, 2, 4, timerStart, timerEnd, success

- Сначала выполняются все синхронные операции (console.log(1), console.log(2), console.log(4)).
- Затем срабатывает setTimeout, выполняя console.log("timerStart"), затем resolve("success"), затем console.log("timerEnd").
- После завершения макрозадачи setTimeout, обрабатывается микрозадача promise.then(), которая выводит "success".
</details>

--- 

❌ Укажите порядок вывода и объясните почему

```js
console.log(1);

setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

new Promise(function (resolve, reject) {
  console.log("Promise");
  setTimeout(() => {
    console.log(777);
    resolve();
  }, 0);
})
  .then(() => {
    console.log("then1");
  })
  .then(() => {
    console.log("then2");
  });

console.log(4);

setTimeout(() => {
  console.log("timeOut2");
}, 0);
```
---

❌ Укажите порядок вывода и объясните почему

```js
setTimeout(() => console.log("setTimeout 1"), 0);

new Promise((resolve, reject) => {
  console.log("Promise 1");
  resolve();
  console.log("Promise 2");
}).then(() => console.log("Promise 3"));

Promise.resolve().then(() => setTimeout(() => console.log("setTimeout 2"), 0));

Promise.resolve().then(() => console.log("Promise 4"));

setTimeout(() => console.log("setTimeout 3"), 0);

console.log("final");
```
<details>
<summary>Ответ</summary>
</details>


❌ Укажите порядок вывода и объясните почему

```js
setTimeout(console.log(1));

new Promise(function (resolve, reject) {
  resolve();
})
  .then(() => console.log(2))
  .then(() => console.log(3))
  .catch(() => console.log("err"))
  .then(() => setTimeout(() => console.log(4)));

console.log(5);
```
<details>
<summary>Ответ </summary>
...
</details>

❌ Укажите порядок вывода и объясните почему

```js
console.log("A");

const p = new Promise((resolve) => {
  resolve("");
  console.log("B");
});

p.then(() => {
  p.then(() => console.log("C"));
  console.log("D");
});

setTimeout(() => {
  console.log("E");
}, 0);

p.then(() => console.log("F"));
```
<details>
<summary>Ответ </summary>
...
</details>

❌ Укажите порядок вывода и объясните почему

```js
setInterval(() => console.log(1), 1)
setTimeout(() => console.log(2), 1)
console.log(3);
Promise.resolve().then(() => console.log(4));
const promiseTest = new Promise(() => {
    console.log(5)
})
setTimeout(() => console.log(6), 0)
console.log(7)
promiseTest.then(() => console.log(8))
```

<details>
<summary>Ответ</summary>
3, 5, 7, 4, 1, 2, 6 и бесконечно 1 1 1 1 

setTimeout и setInterval откидываем сразу это макрозадачи
Promise.resolve().then(() ... ) - микротаска

Когда мы создаем через конструктор new Promise она выполняется ассинхронно по этому пятерка будет второй идти

8 пропускаем так как нет resolve
</details>

---

❌ Необходимо указать последовательность

```js
setTimeout(() => console.log('timeout'));
Promise.resolve().then(() => Promise.reject('reject').catch(console.log));
window.requestIdleCallback(() => console.log('requestIdleCallback'));
window.requestAnimationFrame(() => console.log('requestAnimationFrame'));
console.log('code')
```


---


❌ Напишите функцию polyfill для Promise.all

```js
const promiseAll = (proms: Promise<unknown>[]) => {
  // Answer
};

promiseAll([
  new Promise((res) => res("promise1")),
  new Promise((res) => res("promise2")),
  new Promise((res) => res("promise3")),
]).then((res) => console.log(res));
```

<details>
<summary>Ответ</summary>

const promiseAll = (proms) => {
  return new Promise((resolve, reject) => {
    proms.forEach(())
  })
};

</details>

---

❌ Напишите функцию polyfill для Promise.Race

```js
const promiseRace = (promises) => {
  // Answer
};
```

<details>
<summary>Ответ</summary>

</details>

---

❌ Напишите функцию polyfill для Promise.any

```js
function customPromiseAny(promises) {}

customPromiseAny([
  new Promise((res, rej) => rej("promise1")),
  new Promise((res) => res("promise2")),
  new Promise((res) => res("promise3")),
]).then((r) => console.log(r)); // promise2
```

<details>
<summary>Ответ</summary>

```js
function customPromiseAny(promises) {
  // Создаём счётчик промисов
  let errorPromises = 0;
  // Создаём пустой массив с длиной равной кол-ву промисов (надо для порядка результатов)
  const errors = new Array(promises.length);

  return new Promise((resolve, reject) => {
    // Создаём новый промис, в нём бежим по каждому промису
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then(resolve) // Резолвим главный промис при первом попавшемся резолве дочернего
        .catch((error) => {
          errors[index] = error;
          errorPromises += 1;

          if (errorPromises === promises.length) {
            // Реджектим главный промис если все промисы зареджектились
            reject(promiseErrors);
          }
        });
    }
  });
}
</details>

---


✅ Если в typescript сделать 1 интерфейс из другого, чтобы таким образом все свойства обязательными стали необязательными

```
interface Cat {
  name: string
  age: number
}
```

<details>
<summary>Ответ</summary>
Через утилиту Partial
</details>

---

✅ Необходимо реализовать жизненный цикл в хуке useEffect когда он монтируется и размонтируется. И если мы в зависимости будем передавать show и count, то когда он будет размонтироваться

<details>
<summary>Ответ</summary>

```
console.log("Render")

useEffect(() => {
  return () => {
    console.log("Unmount")
  }
}, [show, count])

Если мы передали какую-то зависимость, то он срабатывается при первом рендеринге и когда меняется состояние.
```
</details>
