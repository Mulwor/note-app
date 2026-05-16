### TypeScript

1. Tell me about typeScript, what is it and why we need to use it?

2. Tell me about benefits and not-benefits of that language programs

3. What's difference type/interface?

- Will there be any differences for typing if the fields are not in the order described in the type?

For example

```js
type Unick {
  name: string;
  age: number;
}
```

And we decide write that

```js
type Unick {
  age: number';
  name: string;
}
```

4. What types are there in TypeScript?

5. What's difference between union (I) type and intersection (&) type

6. What is keyof and typeof used for?

7. What difference between enum and const enum?

8. What's typeguard?

9. What's generic?

10. Tell me about utility types - which ones do you know

11. It is necessary to prototype a function that takes two parameters: obj, key and returns values based on the object's key.

```js
const X = { a: 1, b: 2, с: 3, d: 4 };

function getProperty(obj, key) {
  return obj[key];
}

getProperty(X, "a");
getProperty(X, "m");
```

12. What's infer

13. What does T extends never mean?

---

14. What's answer?

```js
const year = Date.getYear();
const month = Date.getMonth();
const day = Date.getDay();

console.log(year, month, day);
```

Async

1. What is the difference between process1/process2. Let's imagine that each of the actions is executed for 10 seconds, which of the actions will be executed earlier and why.

```js
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

2. The developer sent it for review, but removed resolve. Question: When will action2 start and will it start?

```js
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

3. They asked him to fix the code and he did, but instead of resolve, he now has reject and async has removed Process1 - will it complete or not, and what will be the result?

```js
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

4.  You need to write a function for the sleep so that it runs 300ms after process1 and prototype it.

```ts
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
  // Code here
}

const superProcess = async () => {
  await process1{...}
  await sleep(300)
  await process2{...}
}

```
