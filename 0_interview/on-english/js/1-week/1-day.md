### Data-types

Questions:

1. What's data-types in JavaScript?
   1.1. What is the difference between null and undefined?
   1.2. How to check the type of a value?
   1.3. What does typeof null return, and why is it considered a bug?
   1.4. Is an array a separate data type?
   1.5. What's NaN?
   1.6. What is the difference between primitive and reference types?
   1.7. What are truthy and falsy values? List all falsy values in JavaScript.

Answers:

1. In JavaScript, there are 8 data types, divided into primitive and reference types. Primitive are `string, number, bigInt, boolean, symbol, null, undefined`, and reference is a `object`;

1.1. `undefined` means the variable is declared (объявлена), but has no value yet. `null` — intentional (намеренно) assignment of an "empty" value.

1.2. If we talk about the primitive then we use `typeof`, if array then method `Array.isArray()`, If it's an object, we can use instanceof, but we might make a mistake with null. Better to use: `typeof value === "object" && value !== null` to check if it's a real object`

1.3. It's a historical bug in JavaScript because null and objects have the same type tag — it is 000 in the original implementation. The bug is not fixed due to backward compatibility.

1.4. No, array is an object. If we use typeof on an array, it returns "object". But if we want to check that this is exactly an array, then we use `Array.isArray()`.

1.5. NaN it is not a number, and we can get it when we try to calculate 0/0; infinite + infinite

1.6. Primitive types are stored by value, while objects are stored by reference.

1.7. List falsy values - `false, 0, -0, 0n, "", null, undefined, NaN`, an empty object or array has references in memory, so they are not false

---

Questions:

2. What is the difference between `==` (loose equality) and `===` (strict equality)?
   2.1. What will it return `null == undefined`?
   2.2. Why does `[] == false` return true?
   2.3. How to check if a value is NaN?
   2.4. When is it justified (оправдано) to use `==`?

Answers:

3. The loose equality operator (==) compares values after type conversion, while the strict equality operator (===) compares both values and types without type conversion.

2.1. `True`, because the ECMAScript spec says that null and undefined are equal with `==`. However, with strict equality (===) it returns false, because they are different types.

2.2. Because with loose equality (==), false is converted to 0. The empty array [] is converted to a string "", which is then converted to a number 0. So we get 0 == 0, which is true.

2.3. We can use Number.isNaN(value) or Object.is(value, NaN). But if we check if value is NaN with loose (==) or strict (===) equality, it will always return false.

2.4. When we want to check if a value is either null or undefined. We can use value == null, which covers both cases.
