<h3 align="center">Object</h3>

<details>
<summary>What's object?</summary>

An object is a collection of key-value pairs (properties). Keys are strings or symbols, values can be any data type.

</details>

<details>
<summary>What methods of creating objects do you know? </summary>

We can create an object using curly braces {} (object literal), new Object(), or Object.create().

</details>

<details>
<summary>What is the difference between `{}` and `new Object()`?</summary>

There is almost no difference. Both create an empty object, but curly braces {} are preferred because they're simpler and cleaner.

</details>

<details>
<summary>How do I add a new property to an object? </summary>

We can use dot notation (obj.key = value), bracket notation (obj['key'] = value), spread operator to create a new object ({ ...obj, newKey: value }), or Object.assign() (Object.assign(obj, { key: value })).

</details>

<details>
<summary>Tell me what to do method keys, values, entries and from entries</summary>

`keys(obj)` returns an array of keys; `values(obj)` returns an array of values. `entries()` returns an array of [key, value] pairs. `fromEntries()` does the opposite — builds an object from an array of pairs.

=> How to filter object properties?

We can use Object.entries(), then the filter() method, and finally rebuild the object with Object.fromEntries().

```js
const obj = { a: 1, b: 2, c: 3, d: 4 };

const filtered = Object.fromEntries(
  Object.entries(obj).filter(([key, value]) => value > 2),
);

console.log(filtered);
```

</details>

<details>
<summary>How to get all keys of an object?</summary>

We can use Object.keys(obj) — it returns the object's own properties.

</details>

<details>
<summary>How is `Object.keys()` different from `for...in`?</summary>

Object.keys() shows only the object's own properties, while for...in goes through all keys, including prototype chain

</details>

<details>
<summary>How to check if an object is empty?</summary>

We can use `Object.keys(obj).length === 0` (strict equality on zero)

</details>

<details>
<summary>Is the key order guaranteed?</summary>

In modern ES2015+ — yes, it's guaranteed. Numeric keys come first in ascending order, then string keys in insertion order (в порядке добавление).

</details>

<details>
<summary>Why `Object.entries()` does it return an array and not an iterator?</summary>

Maybe for convenience — so we can use array methods like map, filter, sort, and others. If it returned an iterator, we would need to convert it to an array first.

</details>

<details>
<summary>How to convert `Map` to normal object?</summary>

We can use Object.fromEntries(map) because a Map is iterable and returns [key, value] pairs.

```js
const map = new Map([
  ["a", 1],
  ["b", 2],
]);
const obj = Object.fromEntries(map); // { a: 1, b: 2 }
```

</details>

<details>
<summary>What is the difference between dot notation and bracket notation?</summary>

`Dot notation` only works with valid identifier names while `bracket notation` works with any property name - dynamic keys, special characters, or numeric keys.

</details>

<details>

<summary>How do I remove a property from an object? </summary>

We can use delete with dot notation to remove a property

=> Can delete return false? / Может ли delete вернуть false?

Yes, it returns false for non-configurable properties like Math.PI.

</details>

<details>
<summary>How is delete different from assigning undefined? / Чем delete отличается от присваивания undefined? </summary>

`Delete` removes the property completely from the object. While undefined keeps the property with the value `undefined`.

</details>

<details>
<summary>How to check if a property exists? / Как проверить наличие свойства? </summary>

We can use `in` that check own properties and entire prototype chain or hasOwnProperty() that checks only the object's own properties

</details>

<details>
<summary>What is returned when accessing a missing property?</summary>

Undefined

</details>

<details>
<summary>How to add a method to an object after creation</summary>

Just assign a function to a property using dot or bracket notation.

</details>

<details>
<summary>What's optional chaining?</summary>

Optional chaining `?.` is an operator that allows you to safely access nested object properties and check value on null/undefined.

</details>

<details>
<summary>What is the difference between `?.` and `&&`?</summary>

`&&` (And) checks for any falsy value while `?.` only checks for null/undefined,

</details>

<details>
<summary>Can it be used `?.` for assignment?</summary>

No, it will be syntax error

</details>

<details>
<summary>How `?.` is it different from `??`?</summary>

`??` return right operand if left operand is null or undefined, while `?.` is a safely access object properties

</details>

<details>
<summary>How to call a function that may not exist?</summary>

We need to use `callback?.()`, it will run if callback exists.

</details>

<details>
<summary> Why can't I copy an object with the = operator?</summary>

Because = (equal sign) copies the reference, not the object itself. Objects are reference types.

</details>

<details>
<summary>What is the difference between {} and new Object()? </summary>

There is almost no difference. Both create an empty object, but curly braces {} are preferred because they're simpler and cleaner.

</details>

<details>
<summary>What happens if you forget new when calling a constructor?</summary>

It will execute as a regular function. In non‑strict mode, this will refer to the global object (window in browsers). In strict mode, this will be undefined.

</details>

<details>
<summary>What is Object.create(null) for?</summary>

It creates an object with no prototype. It’s a clean dictionary without inherited properties.

</details>

<details>
<summary>What is destructuring? And how to set default value</summary>

Destructuring is a special syntax that allows you to unpack values from arrays and objects into individual variables. If speak about default value we just need to use equal sign and write default value

</details>

<details>
<summary>How is spread different from rest?</summary>

`Spread` ... expands an array or object into its elements. `Rest` ... collects multiple elements into an array or object.

</details>

<details>
<summary> How can I skip elements during destructuring?</summary>

If we speak about array we can use , (empty comma) but if we speak object we can't skip element

</details>

<details>
<summary>Is it possible to destructure a string?</summary>

Yes, because string is iterables

</details>

<details>
<summary>Does spread make a deep copy?</summary>

No, spread makes a shallow copy, not a deep copy. If we need a deep copy we can use

1. `JSON.parse(JSON.stringify(obj))`
2. `structuredClone()`.
</details>

<details>
<summary>How to copy object?</summary>

If we need shallow copy then we use `spread operator` or `Object.assign`. If we speak about deep copy - `JSON.parse(JSON.stringify(obj))`amd`structuredClone()`

</details>

<details>
<summary>Why do we need `Object.hasOwn()` if we have `hasOwnProperty()`?</summary>

`Object.hasOwn()` is shorter, safer, and works even on objects without a prototype (like Object.create(null)), while `hasOwnProperty()` can throw an error in those cases.

</details>

<details>
<summary>What is the difference between `in` and `Object.hasOwn()`? </summary>

`in` checks all properties including the prototype chain, while `Object.hasOwn()` checks only the object's own properties.

</details>

<details>
<summary>When will `hasOwnProperty()` throw an error? </summary>

If we create object with `Object.create(null)` then it has not prototype and method hasOwnProperty()

</details>

<details>
<summary>How to safely use `hasOwnProperty()` in legacy code? </summary>

We can use Object.prototype.hasOwnPrototype.call(obj, prop)

</details>
