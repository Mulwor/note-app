<h3 align="center">Variables</h3>

<details>
<summary>Tell me about scopes in JavaScript and how many is it?</summary>

Scope defines where variables are accessible. JavaScript has 3 main types of scope:

1. `Global scope` - Variables declared outside any function are accessible everywhere.

2. `Function scope` - Variables declared with var inside a function are accessible only inside that function.

3. `Block scope (ES6)` - Variables declared with let or const inside { } (if, for, while, etc.) are accessible only inside that block.
</details>

<details>
<summary>- What are the rules for naming variables and functions?</summary>

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

Closure is the ability of a function to remember variables around itself and have access to these variables wherever and whenever it is called. It's useful when we want private variables or memoization, event handlers

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
<summary>What's lexical scope?</summary>

Lexical scope means that a function's access to variables is determined by where the function is defined in the code, not where it is called.

</details>
