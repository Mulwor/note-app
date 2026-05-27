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

---

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

---

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

`This` is a keyword that specifies the function's execution context, and it's dynamic (depends on how the function is called).

Examples:

- In the browser, global scope → window (without use strict);
- In the browser, global scope with → `use strict` → undefined;
- In Node.js (terminal), global scope → exports (or global in REPL)
- In an object method → the object itself
- In an event handler → the DOM element

</details>

<details>
<summary>How is the meaning of 'this' determined (определяется)?</summary>

`this` is determined at call time, not declaration. It depends on how the function is called (fd, fe, method of object, constructor, simple call, or explicit binding).

</details>

<details>
<summary>What is the difference between this in strict and non-strict modes?</summary>

In non-strict mode: `this = window`; in strict mode: `this = undefined`

</details>

<details>
<summary> What happens to this when context is lost?</summary>

this becomes undefined (in strict mode) or window (in non-strict mode)

</details>

---

<details>
<summary>What is equal to this in the arrow function?</summary>

Arrow functions don't have their own this. They inherit this from the surrounding (parent) scope where they are defined (lexical this).

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

</details>

<details>
<summary>Is it possible to rebind a function created using bind?</summary>

No, rebinding doesn't change the context. The first bind has priority over any following bindings.

</details>

<details>
<summary>How to use Math.max on array?</summary>

We can use spread operator inside Math.max() or Math.max.apply(null, array)

</details>

<details>
<summary>What is pure function?</summary>

Pure function doesn't have side effects (console.log(), manipulation with DOM, event on click and another) and return same outputs every time when we called it

</details>

What else can I say? - Что я могу еще сказать
