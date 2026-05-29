### TypeScript

1. Tell me about typeScript, what is it and why we need to use it?

2. Tell me about benefits and not-benefits of that language programs

3. What's difference type/interface?

- Will there be any differences for typing if the fields are not in the order described in the type?

For example

```js
type Unick { name: string; age: number; }
```

And we decide write that

```js
type Unick { age: number; name: string; }
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
