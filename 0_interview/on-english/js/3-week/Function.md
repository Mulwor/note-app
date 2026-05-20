- What are the ways to declare functions in JS?

There are 5 main ways to declare functions in JavaScript: function declaration; function expression; arrow function; with function constructor - when we write new Function() but it has problem with security and when we create function inside class method or object method

- What is the difference between Function Declaration and Function Expression?

`Function declaration` is fully hoisted — we can call it before definition. `Function expression` is not hoisted — we can only call it after the assignment line. However, if we declare a `function expression` with var, the variable is hoisted with undefined, but the function is not hoisted.

- What does a function without `return`?

Undefined, but only in constructor return this by default

- Why use named function expressions?

Named Function Expressions (NFE) are useful for debugging, recursion, and avoiding confusion in stack traces.

- How parameters are passed: by value or by reference?

Primitives are passed by value, while objects are passed by reference

- What difference between function declaration and arrow function?

1. Syntax;
2. Function declarations are fully hoisted. Arrow functions are not hoisted
3. `Function declarations` have dynamic `this` — depending on where we call it, that's what this will refer to. `Arrow functions` have lexical `this` — defined during declaration.
4. In function declaration can use arguments, but in arrow functions do not have an argument - `instead, you can use the spread operator`
5. Function declaration can be called with the new constructor, but arrow functions cannot. If we try to use the arrow function as a constructor, we get an error.

- What happens if you call an arrow function with new?

It throws a TypeError. Arrow functions cannot be used as constructors.

- What is equal to this in the arrow function?

Arrow functions don't have their own this. They inherit this from the surrounding (parent) scope where they are defined (lexical this).

- When is it better not to use arrow functions?
