1. What's loop? (Or tell me about loop)

A loop is a way to repeat a block of code multiple times until a certain condition is met. We have different types of loops in JavaScript. For example: the classic 'for' loop with a counter, 'for...in' for object properties, and 'for...of' for arrays and iterables.

2. What is `for...in` used for?

`For...in` is used to iterate over keys (or property names) of an object

=> Why is `for...in` not recommended for arrays?

Because it iterates over all enumerable properties, including those added to Array.prototype. Also, the indices are returned as strings.

=> How to filter inherited properties (унаследованные свойства)?

hasOwnProperty()

=> What is the difference between `for...in` and `Object.keys()`?

Object.keys() returns an array of only the object's own enumerable properties, while for...in iterates over the keys/properties of objects, including inherited ones.

3. What is difference between `for...in` and `for...of`?

`for...in` - iterates over the keys/properties of objects, including inherited ones while for...of iterates over the values ​​of array or strong for example.

=> How to get the index of an element in `for...of`?

We can use method entries() inside in `for...of`

=> Why `for...of` doesn't it work with objects?

Because simple objects are not iterable by default. They don't have a Symbol.iterator method

=> When is it better to use `forEach()` and when is it better to use `for...of`?

When we need `break / continue` or `async/await`, we use for...of. If we don't need these, we can use `forEach()`.

---

- [Циклы while и for](https://it-incubator.io/prosobesim/react-frontend/roadmap?;s=E72159&skill=js-es5%2Fcommon%2Fdefault%2Floops-while-for);

2. How to break out of a nested loop?

We can use break with mark outerLoop

3. How `break` is it different from `continue`?

`continue` — skip one iteration while break — stop the whole loop.

4. Is it possible to modify an array `while` iterating over it in a loop for?

We can modify the array while iterating, but to safely remove elements, we need to use a reverse for loop.

5. Which cycle is faster - `for` or `while`?

They are the same in performance

6. What is the difference between `while` and `do...while`?

Do...while must be executed at least once, and it doesn't matter if the conditions are correct or not, whereas while may not be executed if the conditions are not suitable.
