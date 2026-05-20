<h3 align="center">Data-types</h3>

<details>
<summary>What is data types in JavaScript?</summary>

In JavaScript, there are 8 data types, divided (разделен) into primitive and reference types. Primitive are string, number, bigInt, boolean, symbol, null, undefined, and reference is an object;

</details>

<details>
<summary>What is the difference between primitive and reference types?</summary>

Primitives are stored by value, while reference types are stored by reference.

</details>

<details>
<summary>Is an array a separate (отдельный) data type?</summary>

No, array is an object. If we use typeof on an array, it returns "object". But if we want to check that this is exactly an array, then we use Array.isArray()

</details>

<details>
<summary>What is the difference between null and undefined?</summary>

Undefined means the variable is declared, but has no value yet. While null is intentional (намеренно) assignment of an "empty" value.

</details>

<details>
<summary>How to check the type of a value?</summary>

If we talk about the primitive then we use typeof, if array then method Array.isArray(), If it's an object, we can use instanceof, but we might make a mistake with null. Better to use: typeof value === "object" && value !== null to check if it's a real object

</details>

<details>
<summary>What's NaN?</summary>

NaN means "Not a Number". We get it when we try invalid math operations, like 0/0 (divide), Infinity - Infinity, or trying to parse a non-numeric string.

<details>
<summary>How to check if a value is NaN?</summary>

We can use Number.isNaN(value) or Object.is(value, NaN).

</details>
</details>

<details>
<summary>What does typeof null return, and why is it considered a bug?</summary>

It's a historical bug in JavaScript because null and objects have the same type tag — it is 000 and that’s why null return object. The bug is not fixed due to legacy.

</details>

<details>
<summary>What are truthy and falsy values? List all falsy values in JavaScript?</summary>

List falsy values - false, 0, -0, 0n, "", null, undefined, NaN

<details>
<summary>What do you think about array/object – are they falsy value? </summary>

No because they has references in memory and so they are not false

</details>
</details>

<h3 align="center">Operators</h3>

<details>
<summary>What is the difference between == (loose equality) and === (strict equality)?</summary>

The loose equality compares values after type conversion (после приведения типов), while the strict equality compares both values and types without performing type conversion.

</details>

<details>
<summary>What will it return null == undefined? </summary>

True, because the ECMAScript spec says that null and undefined are equal with ==. However, with strict equality (===) it returns false, because they are different types.

</details>

<details>
<summary>Why does [] == false return true?</summary>

Because with loose equality (==), false is converted to 0. The empty array [] is converted to a string "", which is then converted to a number 0. So we get 0 == 0, which is true.

</details>

<details>
<summary>When is it justified (оправдано) to use ==?</summary>

When we want to check if a value is either null or undefined. We can use value == null, which covers both cases

</details>

<details>
<summary>How to check if a variable is not null and not undefined?</summary>

We can check that the value is not strictly equal to null and not strictly equal to undefined.

</details>

</details>

<details>
<summary>What’s logical operators?</summary>

A logical operation returns a boolean value (true or false). We have 3 main logical operators: AND (&&), OR (||), and NOT (!).

• AND (&&) — it searches for the first falsy value and returns it. If it doesn't find any, it returns the last value.
• OR (||) — it searches for the first truthy value and returns it. If it doesn't find any, it returns the last value.
• NOT (!) — it inverts the value: true becomes false, false becomes true.

</details>

<details>
<summary>What is the precedence (приоритет) of logical operators?</summary>

Speaking about precedence: NOT (!) has the highest priority (15), then AND (&&) has priority 6, and OR (||) has the lowest — priority 5.

</details>

<details>
<summary>What will the expression return "hello" && 0 || "world"? </summary>

The first one will be solved by "hello" && 0 because it has a higher priority and it will return 0, then 0 || 'world' return and we get world

</details>

<details>
<summary>How is it different `||` from `??` ?</summary>

They are similar, OR (||) returns the right operand if the left is false and ?? returns the right operand only if the left is null or undefined. Otherwise, it returns the left operand.

</details>
</details>

<h3 align="center">Statement and construction</h3>

<details>

<summary>What's the if...else statement?</summary>

It executes (выполняет) one block of code if a condition is true, and another block (often optional) if the condition is false

</details>

<details>
<summary>What is a ternary operator?</summary>

It is a short form if...else, that take 3 operands: a condition, values for when the condition is true, and a value for when it's false

</details>

<details>
<summary>When is it better to (should) use the ternary operator?</summary>

When we have a simple and short condition.

</details>

</details>

<details>
<summary>What's switch construction and what comparison does switch use - strict or non-strict?</summary>

A switch construction is used to compare a single value against multiple possible options (в сравнении с несколькими возможными вариантами). It uses strict comparison (===).

</details>

<details>
<summary>What happens if you forget break?</summary>

If we forget break, the program continues to the next case, even if that case doesn't match the condition.

</details>

<details>
<summary>Can I use conditions in case?</summary>

No, you can only use specific values, not conditions.

</details>

<details>
<summary>Is default required?</summary>

No, default is not required. But it's a good practice to handle unexpected values (обрабатывать неожиданные случаи) - that is, when to return the default value.

</details>

</details>

<details>
<summary>When is it better to use switch instead of if...else if?</summary>

I think when you have a single variable with many possible values. In that case, switch is more readable than if...else.

</details>

<h3 align="center">Loops</h3>

<details>
<summary>What’s loop / tell me about loop?</summary>

A loop is a way to repeat a block of code until it's time to stop. We have different types of loops in JavaScript. For example: the classic 'for' loop with a counter, 'for...in' for object properties, and 'for...of' for arrays and iterables

</details>

<details>
<summary>What is `for...in` used for?</summary>

`For...in` is used to go through the keys of an object

</details>

<details>
<summary>Why is `for...in` not recommended for arrays?</summary>

Because it goes through all properties, including prototype chain. And returns strings

</details>

<details>
<summary>How to filter inherited properties (унаследованные св-ва)?</summary>

We can call hasOwnProperty() inside the loop.

</details>

<details>
<summary>What is difference between `for...in` and `for...of`?</summary>

for...in - go through the keys/properties of objects, including inherited ones while for...of go through the values of array.

</details>

<details>
<summary>How to get the index of an element in `for...of`? </summary>

We can use method entries() inside in `for...of`

</details>

<details>
<summary>Why `for...of` doesn't it work with objects?</summary>

Because they don't have a Symbol.iterator method

</details>

<details>
<summary>When is it better to use `forEach()` and when is it better to use `for...of`?</summary>

When we need `break / continue` or `async/await`, we use for...of. If we don't need these, we can use `forEach()`

</details>

<details>
<summary>Which cycle is faster - `for` or `while`?</summary>

They are the same in performance

</details>

<details>
<summary>What is the difference between `while` and `do...while`?</summary>

Do...while must be executed at least once (выполнится хотя бы 1 раз), and it doesn't matter if the conditions are correct or not, whereas while may not be executed if the conditions are not suitable

</details>

<details>
<summary>Is it possible to modify an array `while` iterating over it in a loop for?</summary>

We can modify the array while iterating, but to safely remove elements, we need to use a reverse for loop.

</details>

<details>
<summary>How to break out of a nested loop?</summary>

We can use break with mark outerLoop

</details>

<details>
<summary>How `break` is it different from `continue`? </summary>

`continue` - skip one iteration while `break` - stop the whole loop.

</details>

<details>
<summary>What is the at() method and when did it appear?</summary>

It's an alternative method to using array[array.length - 1]. It appeared in ES13 and allows accessing array elements. If we want to access the last element, we can use -1. It works not only with arrays but also with strings.

=> Is it possible to modify an element using at()?

No, the at() method is only for reading. If we want to change the last element, we can use array[array.length - 1] = newValue

=> How is at(-1) different from slice(-1)?

slice(-1) returns a new array with the last element, while at(-1) returns the element itself.

</details>

<h3 align="center">Object</h3>

<details>
<summary>What's object?</summary>

An object is a collection of key-value pairs (properties). Keys are strings or symbols, values can be any data type. We can create an object using curly braces {} (object literal), new Object(), or Object.create().

</details>

<details>
<summary>What is the difference between `{}` and `new Object()`?</summary>

There is almost no difference. Both create an empty object, but curly braces {} are preferred because they're simpler and cleaner.

They do the same thing - they create a new object.

</details>

<details>
<summary>How do I add a new property to an object? </summary>

We can use dot notation, bracket notation, spread operator to create a new object, or Object.assign() that modify original object

```js
const person = { name: "John", age: 30 };

// ! Dot notation...
person.city = "New York";

// ! Bracket notation...
person["city"] = "New York";

// ! Spread operator...
const updatedPerson = { ...person, city: "New York" };

// ! Object.assign
Object.assign(person, { city: "New York" });
```

</details>

<details>
<summary>Tell me what to do method keys, values, entries and from entries</summary>

`keys(obj)` returns an array of keys; `values(obj)` returns an array of values. `entries()` returns an array of [key, value] pairs. `fromEntries()` does the opposite — builds an object from an array of pairs.

=> How to get all keys of an object?

We can use Object.keys(obj) — it returns the object's own properties.

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
<summary>How is `Object.keys()` different from `for...in`?</summary>

Object.keys() shows only the object's own properties, while for...in goes through all keys, including prototype chain

</details>

<details>
<summary>How to check if an object is empty?</summary>

We can use `Object.keys(obj).length === 0` (strict equality on zero)

</details>

<details>
<summary>Is the key order guaranteed?</summary>

I suppose so. Numeric keys come first in ascending order, then string keys in insertion order (в порядке добавление).

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

```js
const obj = {
  'user-age': 25,
  'full name': 'Bob Smith',
  '123number': 999
};

// !  Ошибка или синтаксически неверно:
console.log(obj.user-age);   // вычитание, а не свойство
console.log(obj.full name);  // ошибка
console.log(obj.123number);  // ошибка

// ! Правильно:
console.log(obj['user-age']);   // 25
console.log(obj['full name']);  // 'Bob Smith'
console.log(obj['123number']);  // 999
```

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

We can use `in` that check own properties and entire prototype chain or `hasOwnProperty()` that checks only the object's own properties

</details>

<details>
<summary>What is returned when accessing a missing property?</summary>

Undefined

</details>

<details>
<summary>How to add a method to an object after creation?</summary>

Just assign a function to a property using dot or bracket notation.

</details>

<details>
<summary>What's optional chaining?</summary>

Optional chaining `?.` is a way to access safely nested object properties. And it check value on null/undefined.

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
<summary>How to copy object?</summary>

If we need shallow copy then we use `spread operator` or `Object.assign`. If we speak about deep copy - `JSON.parse(JSON.stringify(obj))`amd`structuredClone()`

</details>

<details>
<summary>Does spread make a deep copy?</summary>

No, spread makes a shallow copy, not a deep copy. If we need a deep copy we can use

1. `JSON.parse(JSON.stringify(obj))`
2. `structuredClone()`.
</details>

<details>
<summary> Why can't I copy an object with the = operator?</summary>

Because = (equal sign) copies the reference, not the object itself. Objects are reference types.

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
<summary>What is destructuring `[diːˈstrʌk.tʃər.ɪŋ]`? And how to set default value</summary>

Destructuring is a way to unpack values from arrays and objects into individual variables. If speak about default value we just need to use equal sign and write default value

</details>

<details>
<summary>How is spread different from rest?</summary>

`Spread` ... expands (расширяет) an array or object into its elements. `Rest` ... collects multiple elements into an array or object.

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

<h3 align="center">Array</h3>

<details>
<summary>What is an array?</summary>

An array is an ordered collection of elements indexed from zero, with special array methods.

</details>

<details>
<summary>What is an array index?</summary>

It is a number that identifies the position of an element in an array.

</details>

<details>
<summary>How do I check that the value is an array? </summary>

We can use Array.isArray() that returns true if the value is an array and false otherwise

</details>

<details>
<summary>How to get last element in array?</summary>

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const firstMethod = array[array.length - 1];
const secondMethod = array.at(-1);
const thirdMethod = array.slice(-1)[0];
```

</details>

<details>
<summary>What happens if you change the length of the array manually?</summary>

If we increase the array length, it adds empty slots. If we decrease it, it removes (cuts off) elements.

```js
const arr = [1, 2, 3];
arr.length = 5; // Increase
console.log(arr); // [1, 2, 3, empty × 2]
console.log(arr[4]); // undefined

arr.length = 2; // Decrease
console.log(arr); // [1, 2]
```

</details>

<details>
<summary>What does delete arr[0] do? Is there still a "hole" in the array?</summary>

It removes the element at index 0 and replaced it with an empty slot(hole)

</details>

<details>
<summary>How to copy array in shallow and deep?</summary>

If we speak about shallow copy we can use `spread operator`, `Array.from` and `slice method`

If we need deep copy we can use: `structuredClone(arr)` or `JSON.parse and stringify`

</details>

<details>
<summary>Tell me about methods - map() and foreach() and what's difference</summary>

They both iterate over the array, but map() returns a new array, forEach() returns undefined. Use map() for transformation, forEach() for side effects.

</details>

<details>
<summary>Tell me about methods - filter(), reduce(), reverse(), join()</summary>

`.filter()` goes through the array and returns only the elements that pass the condition.;

`.join()` - combine all elements of an array into a string.;

`.reverse()` - reverses the original array in place - mutation;

`.reduce()` - accumulates all array elements into a single value.";

</details>

<details>
<summary>Tell me about methods - pop(), push(), shift(), unshift()</summary>

`push()` - add element to the end;

`pop()` - removes last element;

`unshift()`- add element to the beginning;

`shift()` - removes first element;

And they are all mutation

</details>

<details>
<summary>Which methods (pop, push, shift, unshift) of array is faster?</summary>

Faster are push() and pop() because they don't move elements — they just add or remove at the end. shift() and unshift() are slower because they change indexes for all elements.

</details>

<details>
<summary>What's different between slice and splice?</summary>

`splice()` changes the original array (add, remove, replace), while slice() returns a new array without modifying the original.

</details>

<details>
<summary>Tell me about methods -  every, some, find?</summary>

`every()` - checks if all elements pass;

`some()` - checks if any pass;

`find()` - returns the first found element, or undefined if nothing matches.;

</details>

<details>
<summary>How we can sort our array? And how do it correctly</summary>

We need to use arr.sort((a, b) => a - b) for numbers ascending. Without a compare function, it sorts as strings.

</details>

<details>
<summary>How does sort() work? What's the catch with the numbers?</summary>

sort() compares as strings by default. That's why 10 comes before 2. For numbers, use (a, b) => a - b.

</details>

<details>
<summary>Does it mutate (sort) and if so, how will it get rid of the mutation</summary>

We can use spread operator with sort or new method toSorted or first of all use slice() and then sort()

</details>

<details>
<summary>List mutating and non-mutating arrays</summary>

List mutation of array methods:

1. Reverse (~toReversed), sort (~toSorted), splice (~toSpliced)
2. pop(), push(), shift(), unshift()

</details>
