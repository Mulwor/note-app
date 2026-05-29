<h2 align="center">Async code</h2>

<details>
<summary>Что такое callback-функцию?</summary>

Callback — это функция, которая передаётся в другую функцию в качестве аргумента. Это один из способов работы с асинхронным кодом. Однако существует проблема, называемая Callback hell («ад колбэков»), когда внутри одного колбэка находится другой колбэк, внутри него — ещё один, и так далее. Такой код становится очень сложно читать, тестировать и поддерживать. Поэтому в ES6 появились Promise (промисы), а в ES8 — async/await

</details>

<details>
<summary>Что такое Eventloop (цикл событий) и как он работает?</summary

Eventloop - это бесконечный цикл, который решает проблему однопоточности. У него есть callstack (стек вызовов), куда постоянно попадает задачи, он их выполняет и ждет снова поступления новых задачи. Задачи в свою очередь делятся на микро и макро-таски. У микро-тасок приоритетность больше и они будут выполняться раньше чем макро-таски. К микротаскам можно отнести then, catch, finally у промисов, queueMicrotask, MutationObserver, async await а к макро таском setTimeOut, setTimeInterval, события

</details>

<details>
<summary>Что такое Promise и какие у него есть методы?</summary>

Promise представляет из себя специальный объект и у него есть три состояния: `pending` - ожидание, `fulfilled` - завершился успешно, `rejected` - выполнился с ошибкой.

У `promise` есть следующие методы

- Метод `.all()` - дожидается выполнения ВСЕХ promises, если успешно вернет массив, если нет, то вернет последний promise с ошибкой
- `.allSettled()` - дожидается выполнения ВСЕХ promise, и не важно выполнятся они успешно или нет он вернет массив полученных значение (ответов), в котором будет два поля - это статус и значение, если успешно, а если не успешно то причина reason
- `.any()` - дожидается выполнения ПЕРВОГО УСПЕШНОГО promise и возвращает результат, если не находит возвращает ошибки внутри массива
- `.race()`дожидается выполнения ПЕРВОГО promise не важно успешно он или нет, и возвращает результат.

<details>
<summary>Например есть promise и мы вызываем какую-то функцию которая возвращает promise. Мы на него подписались через .then, .catch и т.д. Теперь вопрос а может ли быть ситуация когда promise никогда не закончится не then, не catch не вызовутся? Нам нужно чтобы оно было бесконечное как это сделать</summary>

```
const neverEndingPromise = new Promise((resolve, reject) => {
  // ничего не делаем
});
```

</details>

<details>
<summary> Есть ли у promise какой-то функционал, что если через 5 секунд он ничего не сделал, то как принудительно зарезолвились или заречеджектились promise</summary>

Promise.race c SetTimeOut

```
function withTimeout(promise, timeout) {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout exceeded')), timeout)
        )
    ]);
}

// Использование
const somePromise = new Promise((resolve) => {
    // Симуляция долгой операции
    setTimeout(() => resolve('Done!'), 10000); // завершится через 10 секунд
});

withTimeout(somePromise, 5000) // Таймаут 5 секунд
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
```

</details>
</details>

<details>
<summary>Что такое async/await? И что у него общего у promise </summary>

Async является еще одним способом написание асинхронного кода, который всегда возвращает promise, await добавляется в тело функции и ждет выполнения promise.

Если какой-то из await не выполнится, то дальше он не пойдет и поместится в catch, а это обработчиком ошибок

```js
async function getMainActorProfileFromMovie(id) {
  try {
    const movieResponse = await fetch(`https://swapi.dev/api/films/${id}/`);
    const movie = await movieResponse.json();
    return characterResponse.json();
  } catch (err) {
    console.error("Произошла ошибка!", err);
  }
}
```

</details>

<details>
<summary>Какие типы таймеров есть в JavaScript?</summary>

В JS есть два основных типа таймеров:

- `setTimeout(...)` - позволяет вызвать переданную функцию один раз через определенное время
- `setInterval(...)` - позволяет вызвать переданную функцию много раз через определенный интервал времени. Чтобы отменить `setInterval` мы можем использовать тип: `clearInterval()` и внутрь передаем переменную, где использовали `setInterval`.

</details>

---

What's async in JS? What types of asynchronous operations do you know?
What's new with ES6 for asynchrony?

<h3 align="center">Callback</h3>

How can we avoid callback hell?

<h3 align="center">Promise</h3>

What's promise?
How does the promise chain work?
How can I cancel(отменить) a promise?

What promise methods do you know?

- all() -
- allSettled() -
- any() -
- race() -
- withResolvers() -

<h3 align="center">Async-await</h3>

How to use `async/await` for asynchronous requests?
How does `await` work what's it doing?
What happens if you don't install `await`?
What does the `async` function return?
How to handle errors in `async` functions?

<h3 align="center">Event-loop</h3>

How to work event loop?

What else can I say? - Что я могу еще сказать
Only works - будет работать
