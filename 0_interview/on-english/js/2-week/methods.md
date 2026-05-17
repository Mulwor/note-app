### Array

<details>
<summary>What is an array?</summary>

An array is an ordered collection of elements indexed from zero, with special array methods.

</details>

<details>
<summary>What is an array index?</summary>

An array index is a number that identifies the position of an element in an array.

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
<summary>Tell me about methods - map and foreach and what's difference</summary>

They both iterate over the array, but map() returns a new array, forEach() returns undefined. Use map() for transformation, forEach() for side effects.

</details>

<details>
<summary>Tell me about - filter, reduce, reverse, join</summary>

`.filter()` goes through the array and returns only the elements that pass the condition.;
`.join()` - combine all elements of an array into a string.;
`.reverse()` - reverses the original array in place - mutation;
`.reduce()` - accumulates all array elements into a single value.";

</details>

<details>
<summary>Tell me about methods pop(), push(), shift(), unshift()</summary>

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

splice() changes the original array (add, remove, replace), while slice() returns a new array without modifying the original.

</details>

<details>
<summary>Tell me about: every, some, find?</summary>

`every()` checks if all elements pass, `some()` checks if any pass, `find()` returns the first matching element.

</details>

<details>
<summary>How we can sort our array? And how do it correctly</summary>

We need to use arr.sort((a, b) => a - b) for numbers ascending. Without a compare function, it sorts as strings.

=> What does toSorted() do?

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
```
