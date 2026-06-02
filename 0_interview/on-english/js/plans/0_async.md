<h3 align="center">Async core and prototype</h3>

<details>
<summary>What's async in JS?</summary>

First of all, we need to understand that JS is single-threaded language, but with the help of the browser we can make requests to the server or set timers without blocking the main thread.

</details>

<details>
<summary>What types of asynchronous operations do you know?</summary>

Callbacks, promises, async/await

</details>

<details>
<summary>What's new with ES6 for asynchrony?</summary>

Before ES6, we used callbacks (Callback Hell). ES6 added Promises — a cleaner way to handle async code with .then() and .catch(). And later in ES7 added Async...await

</details>

<details>
<summary>What's callback hell? How can we avoid callback hell?</summary>

Callback hell is a many nested callbacks inside each other, making code hard to read, debug, and maintain.

To avoid callback hell, we can use Promise with .then() or .catch(), or use async/await which is a cleaner syntax.

</details>

<details>
<summary> What's promise?</summary>

A promise is a special object and it has three states: `pending`, `fulfilled` (success), `rejected` (error). And it has several methods:

`.all()` — waits for all promises to be executed. If all succeed, it returns an array of results. If any fails, it immediately returns that error (the last one).

`.allSettled()` — waits for all promises to be executed, doesn't matter if they success or failure. Returns an array of objects with status and value (if fulfilled) or reason (if rejected).

`.any()` — waits for the first successful promise and returns its result. If all fail, it returns an AggregateError containing all errors in an array.

`.race()` — waits for the first promise to settle (success or failure) and returns its result (value or error).

</details>

<details>
<summary>How can I cancel (отменить) a promise?</summary>

If we create a promise, it will work forever if we don't call resolve or reject — it will be always in a pending state.

</details>

<details>
<summary> What does AbortController and AbortSignal do?</summary>

AbortController lets you cancel a fetch request. AbortSignal is a flag passed to fetch — tells it when to stop

</details>

---

<details>
<summary>What's async await?</summary>

Async is another way to write asynchronous code that always returns a promise. Await is added to the function body and waits for the promise to be executed. If we forget write await inside the function then it return promise object itself, not the result

</details>

<details>
<summary>How to handle errors in `async` functions?</summary>

We can use try {} catch

</details>

<details>
<summary>What's event-loop?</summary>

Event Loop is an infinite loop that solves the problem of single-threading. It has a call stack where tasks are constantly placed. It executes them and waits for new tasks to arrive.

Tasks are divided into microtasks and macrotasks.

MicroTasks have higher priority and will be completed earlier than macroTasks.MicroTasks include: .then/.catch/.finally for promises, queueMicroTask, MutationObserver, async/await (after await).

MacroTasks include: setTimeout, setInterval, events (DOM events, I/O).

</details>

<details>
<summary>What's prototype in JS? And how does work prototype chain</summary>

A prototype is a special reference to another object. It contains properties and methods that an object can access through prototypal inheritance. When we access a property of an object, JavaScript first looks for it in the object itself. If it doesn't find it, it follows the link to the prototype and searches there. Then — in the prototype of the prototype, and so on, until the chain ends with null (this means that the property has not been found).

</details>

<details>
<summary>What is difference between proto and prototype?</summary>

Prototype is a property of the constructor function (declared via new), and **proto** is a property of any object that references its prototype (the prototype object of the constructor function).

</details>
