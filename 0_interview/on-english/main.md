## JavaScript

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

`value !== null && value !== undefined`

</details>

</details>

<details>
<summary>What’s logical operators?</summary>

A logical operation returns a boolean value (true or false). We have 3 main logical operators: AND (&&), OR (||), and NOT (!).

• AND (&&) — it searches for the first falsy value and returns it. If it doesn't find any, it returns the last value;

• OR (||) — it searches for the first truthy value and returns it. If it doesn't find any, it returns the last value;

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

<h3 align="center">Variables and functions</h3>

<details>
<summary>Tell me about scopes in JavaScript and how many is it?</summary>

Scope defines where a variable is available. In javaScript has 3 main types of scope:

1. `Global scope` - Variables declared outside any function or block scopes and they are accessible everywhere.

2. `Function scope` - Variables declared with var inside a function are accessible only inside that function.

3. `Block scope (ES6)` - Variables declared with let or const inside `{} (if, for, while, etc.)` are accessible only inside that block.
</details>

<details>
<summary>What are the rules for naming variables and functions?</summary>

For naming variables, we should use Latin letters and make them meaningful — like age, surname. We can use digits but not at the beginning (they can be in the middle or at the end). We can also use underscore - `_` and dollar sign `$`.

</details>

<details>
<summary>What's hoisting (всплытие)? </summary>

Hoisting is a mechanism in JavaScript where declarations of variables (var) and functions (function declarations) are "lifted" to the top of their scope, allowing them to be used before the actual declaration in the code.

</details>

<details>
<summary>What's difference between var, let and const?</summary>

1. `let` and `const` appeared in ES6, `var` was before it.
2. `Let` and `const` have a block scope, while `var` has a global (or local) scope;
3. We can reassign a new value to `Let`, but we cannot create a variable with the same name, `const` cannot be reassigned or redeclared. `var` can be both reassigned and redeclared.
4. There is a temporary dead zone for `let` and `const`, which means we cannot call a variable before it is initialized. If we try to call them, we get an ReferenceError, but in the case of var, we just get undefined, this is due to surfacing.
5. `var` is hoisted and initialized with undefined. `let` and `const` are hoisted but not initialized

</details>

<details>
<summary>How to fix problem with var previously when reassign or redeclared</summary>

They used IIFE (Immediately Invoked Function Expression) to create a new scope for each iteration.

=> - Why are there parentheses around a function? / Почему нужны скобки вокруг функции?

it changes Function Declaration to Function Expression

</details>

<details>
<summary>What's TDZ (temporal dead zone)</summary>

Temporal dead zone means we can't use let or const before declaration. And if we try to access them, we get a ReferenceError.

</details>

<details>
<summary>What happens when accessing a variable before it is declared?</summary>

If we use let and const we will get ReferenceError, but if we use var we will get undefined.

So first of all we need to understand that var is hoisted and it initializes the value undefined, but let / const also have hoisting, but they are not initialized.

And we have the rule Temporal Dead Zone that means we can't call a variable (let, const) before initialization.

</details>

<details>
<summary>Why does a loop with var and setTimeout output the same value?</summary>

```js
for (var i = 0; i < 3; i++) {
  // 3 3 3
  setTimeout(() {
    console.log(i);
  }, 1000);
}

for (let i = 0; i < 3; i++) {
  // 1 2 3
  setTimeout(() {
    console.log(i);
  }, 1000);
}
```

First of all we need to understand that var has function scope. When we use var i inside a for loop, only one variable i for the whole loop. That's why all three setTimeout callbacks see the final value i = 3.

let has block scope and creates a new i for each iteration

</details>

<details>
<summary>What's closure and give some examples</summary>

Closure is the ability of a function to remember variables around itself and have access to these variables wherever and whenever it is called.

It's useful when we want private variables or memoization, event handlers

```js
function outer() {
  const outerVar = "Я из внешней функции!";

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

const closureFunction = outer();
closureFunction();
```

</details>

<details>
<summary>What's function?</summary>

A function is a piece of code that you can use many times. It can take data and give back a result.

</details>

<details>
<summary>What are the ways to declare functions in JS?</summary>

There are 5 main ways to declare functions in JavaScript: function declaration; function expression; arrow function; with function constructor - when we write new Function() but it has problem with security and when we create function inside class method or object method

</details>

<details>
<summary>What is the difference between Function Declaration and Function Expression?</summary>

`Function declaration` is fully hoisted — we can call it before definition. `Function expression` is not hoisted — we can only call it after the assignment line. However, if we declare a `function expression` with var, the variable is hoisted with undefined, but the function is not hoisted.

</details>

<details>
<summary>What does a function without `return`?</summary>

Undefined, but only in constructor return this by default

</details>

<details>
<summary>How parameters are passed: by value or by reference?</summary>

Primitives are passed by value, while objects are passed by reference

</details>

<details>
<summary>What difference between function declaration and arrow function?</summary>

1. Syntax;
2. Function declarations are fully hoisted. Arrow functions are not hoisted
3. `Function declarations` have dynamic `this` — depending on where we call it, that's what this will refer to. `Arrow functions` have lexical `this` — defined during declaration.
4. In function declaration can use arguments, but in arrow functions do not have an argument - `instead, you can use the spread operator`
5. Function declaration can be called with the new constructor, but arrow functions cannot. If we try to use the arrow function as a constructor, we get an error.
</details>

<details>
<summary>What happens if you call an arrow function with new?</summary>

It throws a TypeError. Arrow functions cannot be used as constructors.

</details>

<details>
<summary>What is this (function's execution context)?</summary>

`This` is the function's execution context, and it's dynamic (depends on how the function is called).

Examples:

- In the browser, global scope → window (without use strict);
- In the browser, global scope with → `use strict` → undefined;
- In Node.js (terminal), global scope → exports (or global in REPL)
- In an object method → the object itself
- In an event handler → the DOM element

</details>

<details>
<summary>What is the difference between this in strict and non-strict modes?</summary>

In non-strict mode: `this = window`; in strict mode: `this = undefined`

</details>

<details>
<summary> What happens to this when context is lost?</summary>

this becomes undefined (in strict mode) or window (in non-strict mode)

</details>

<details>
<summary>What is equal to this in the arrow function?</summary>

Arrow functions don't have their own this. They inherit `this` from the parent scope where it's defined (lexical this).

</details>

<details>
<summary>When is it better not to use arrow functions?</summary>

When we need dynamic this (controlled by call/apply/bind), when we need the arguments object, or when using a function as a constructor with new.

</details>

<details>
<summary>Is it possible to use await in the arrow function?</summary>

We need function declare with async and inside write await

</details>

<details>
<summary>Why aren't arrow functions suitable for object methods?</summary>

Arrow functions don't have their own this. They inherit `this` from the outer (parent) scope

</details>

<details>
<summary>Is it possible to change this an arrow function with call/apply/bind?</summary>

No, call/apply/bind don't change this in arrow functions. The value is simply ignored.

</details>

<details>
<summary> How to save context when lost?</summary>

We can use bind(), save this to a variable, use an arrow function, or use call/apply for immediate calls.

</details>

<details>
<summary>What is the difference between bind, call and apply?</summary>

call and apply execute immediately, bind returns a new function. call takes arguments by comma, apply takes them as an array.
only works first bind

</details>

<details>
<summary>Is it possible to rebind a function created using bind?</summary>

No, rebinding doesn't change the context. The first bind has priority over any following bindings.

</details>

<details>
<summary>What is pure function?</summary>

Pure function doesn't have side effects (console.log(), manipulation with DOM, event on click and another) and return same outputs every time when we called it

</details>

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

A prototype is a hidden link to another object. If a property isn't found on an object, JS goes up the prototype chain until it finds it or reaches null.

</details>

<details>
<summary>What is difference between proto and prototype?</summary>

Prototype is a property of the constructor function, but **proto** is a link to the prototype object.

</details>

## Typescript

<details>
<summary>Tell me about typeScript, what is it and why we need to use it?</summary>

`TypeScript` - is a strongly typed language from Microsoft. TypeScript adds static typing to JavaScript. It catches errors during development, makes code more readable, and works great for large projects. If speak about disadvantages: we need to compile it to JS and write a bit more code.

</details>

<details>
<summary>What is the difference between type and interface?</summary>

1. Different syntax;

2. if we need inheritance we can use extends for interface, intersection (&) for type;

3. if we want to combine our type we can use union types, interface doesn't have this;

4. If we write two interfaces with the same name, they will combine; types will give an error

5. If we want to use a primitive type, we can declare it via type and then reference it inside an interface
</details>

<details>
<summary>Let's list the main types that have moved from js to ts </summary>

There are string, number and boolean;

</details>

<details>
<summary>What is the difference between 'any', 'unknown', 'void', 'never'?</summary>

`any` - we tell our compiler that our type can be anything (number, boolean, etc.). It's like writing pure JavaScript — no type checking.
`unknown` - similar to any, but safer. Because we need to check with help if, or switch case our type,

`void` — means the function does not return a value (returns undefined).
`never` — means the function never completes. Used for functions that always throw an error or have an infinite loop.

</details>

<details>
<summary>What's difference between union (|) type and intersection (&) type</summary>

Union type => `|` => the value can be one of the types. For example: string or number
Intersection type => `&` => means all fields from all types are required. For example, we have name and surname, and we should write both values.

</details>

<details>
<summary>What is enum?</summary>

`Enum` is a way to give names to constants. It's numeric by default and starts with 0, but we can change the numeric value. Mostly it's used for statuses like `pending, error, or success`, or in roles like `Admin, User, Guest`, or HTTP methods — `GET, POST, PUT, DELETE`. An alternative to enum is the union type.

</details>

<details>
<summary>What's difference between enum and const enum?</summary>

A regular enum is compiled into a JavaScript object. A const enum is removed during compilation - its values are put directly in the code

</details>

<details>
<summary>What's typeguard?</summary>

A Type Guard is a check that helps TypeScript narrow down a type. Examples: typeof, instanceof, in

</details>

<details>
<summary>What's difference between keyof / typeof in TS</summary>

keyof gets the keys of a type (as a union of strings).
typeof gets the type of a value (from a variable).

```ts
const user = { name: "John", age: 30 };

type UserType = typeof user; // { name: string; age: number; }
type UserKeys = keyof User; // 'name' | 'age'
```

</details>

<details>
<summary>What's cartage/tuple (кортеж)? </summary>

A tuple is a fixed-length array where each element can have a different type.

```ts
let user: [string, number, boolean] = ["John", 30, true];

user[0] = "Alice"; // ✅ строка
user[1] = 25; // ✅ число
user[2] = false; // ✅ булеан

user[3] = "extra"; // ошибка
```

</details>

<details>
<summary>How do I create an array with different data types?</summary>

We can use a tuple/cartage or union type

</details>

<details>
<summary>What are utility types? Name and explain a few.</summary>

Utility types are built-in types that help to manipulate types in some way. For example:

1. Partial<T> — makes all fields optional
2. Required<T> — makes all fields required
3. Readonly<T> — makes all fields read‑only, we can't manipulate
4. Pick<T, K> — selects only needed properties
5. Omit<T, K> — remove unneeded properties
6. Extract<T, U> — takes items that match the condition
7. Exclude<T, U> — takes items that do not match the condition

Difference: Pick and Omit work with interfaces and object types, while Extract and Exclude work with union types.

8. Record<K, T> — creates an object type with certain keys and values: Record<Keys, Type>
9. NonNullable<T> — removes null and undefined from the type

</details>

<details>
<summary>What's generic?</summary>

Generic is a way to write code that works with any type but still remembers that type and checks it.

</details>

<details>
<summary>How do I set the default type in a generic?</summary>

We can write T = (equal) and write default value

</details>

<details>
<summary>How are generics better than using any?</summary>

Generic is more safe because it checks types, while any doesn't check.

</details>

<details>
<summary>What is <T>, extends?</summary>

<T> is a type parameter;
`extends` defines the type restriction;

For example, T extends number means our type can only be numbers or subtypes of number. If we try to use a string, it will throw an error.

</details>

<details>
<summary>What does `T extends never` mean?</summary>

It checks if our type is assignable to never or not. If yes, it returns true.

</details>

<details>
<summary>How can I restrict (ограничить) a generic key to a different type (keyof)?</summary>

We can use `T extends keyof U`, where U is a type that takes a key.

</details>

<details>
<summary>What is infer?</summary>

Infer means extract and capture (извлечение и захват) a type from inside another type. For example when we want to take type from Promise, or array, or take return type function

```ts
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type ArrayItem<T> = T extends (infer U)[] ? U : never;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

</details>

<details>
<summary>How do I get the type of the function argument through infer?</summary>

We can use `(...args: infer P) => any`

</details>

## React
