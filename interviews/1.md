1. Есть объект, какие ты способы знаешь, чтобы его заклонить

```
const person = {
  name: "Valera",
  surname: "Valerovich"
}
```

<details>
<summary>Ответ</summary>
- Через спред оператор {...person}
- Через метод объекта: Object.assign()
- Через JSON.parse(JSON.stringify())
</details>

---

2. Будет ли переменная b одинаковой переменной a, то есть будут ли они визуально они одинаковые или разные
Что выведется в консоль и как сделать так чтобы сработало сортировка

```
const a = [10, 8, 2, 1, 5, 7, 4, 9]
const b = a.sort()
```

<details>
<summary>Ответ</summary>
Sort мутирует (меняет исходный) массив: [1, 10, 2, 4, 5, 7, 8, 9] 

А чтобы правильно отсортировать необходимо a.sort((a, b) => (a - b))    
</details>

---

3. У нас есть массив чисел, необходимо посчитать их однако число должно начинаться не с 0, а с -1

```
const digits = [1, 2, 3, 4]
```

<details>

<summary>1. Способ</summary>
digits.reduce((a, b) => a + b, -1)
</details>


<details>
<summary>2. Способ</summary>
```
function sum (digits) {
  let value = -1;
  for (let i = 0; i < digits.length; i++) {
    value += digits[i]
  }
  return value
}
sum([1,2,3,4])
```
</details>

---

4.  У нас есть массив повторяющих значений, как из него убрать все повторяющиеся значения. То есть сделать
из повторяющихся значений не повторяющие.

<details>
<summary>1. Способ</summary>
Set
</details>

<details>
<summary>2. Способ</summary>
const makeUniq = (names) => {
  return names.filter((element, id) => arr.indexOf(element) === id);
}
</details>

---

5. Что выведется в консоль

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
6. В чем разница между process1 / process2. Представим себе, что каждый из action выполняется по 10 секунд, какой из action выполнится раньше и почему.

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

7.  Разработчик отправил на ревью, но убрал resolve. Вопрос: когда начнется action2 и начнется ли он?

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

Промис никогда не завершится ни успехом, ни ошибкой, и будет находиться в состоянии pending бесконечно.

</details>

---
8.  Попросили подправить код и он подправил, однако вместо резолва у него теперь речект и асинк убрал 
Process1 - завершится или нет, и что будет результатом

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

9.  Необходимо написать функцию для слипа (sleep), чтобы он выполнился через 300 миллисекнуж после process1

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
```
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
```

</details>

---

10. Если в typescript сделать 1 интерфейс из другого, чтобы таким образом все свойства обязательными стали необязательными

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

11. Необходимо реализовать жизненный цикл в хуке useEffect когда он монтируется и размонтируется. И если мы в зависимости будем передавать show и count, то когда он будет размонтироваться

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

---
