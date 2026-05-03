- [Условие if](https://it-incubator.io/prosobesim/react-frontend/roadmap?s=E72159&skill=js-es5%2Fcommon%2Fdefault%2Fif-condition);
- [Условные операторы](https://it-incubator.io/prosobesim/react-frontend/roadmap?s=E72159&skill=js-es5%2Fcommon%2Fdefault%2Fconditional-operators);
- [Метод Array.prototype.at() для доступа к элементам с конца](https://it-incubator.io/prosobesim/react-frontend/roadmap?s=E72159&skill=js-es6%2Fcommon%2Fdefault%2Farray-at-method);

---

1. What's the if...else statement?
   1.1. When is it better to use switch instead of if...else if?
   1.2. What is a ternary operator?
   1.3. When is it better to (should) use the ternary operator?
   1.4. How to check if a variable is not null and not undefined?
2. What is the at() method and when did it appear?
   2.1. Is it possible to modify an element using at()?
   2.2. How is at(-1) different from slice(-1)?

---

=> 1. A conditional statement if allows different sections of code to be executed depending on the truth of a condition.

=> 1.1. Switch need use when when you have a single value with multiple options. Switch in that case is more readable then if...else

=> 1.2. The ternary operator is a short form if...else that take 3 operands: a condition, values for when the condition is true, and a value for when it's false.

=> 1.3. When we have a simple and short condition.

=> 1.4. We can check that the value is not strictly equal to null and not strictly equal to undefined.

=> 2. It's an alternative method to using array[array.length - 1]. It appeared in ES13 and allows accessing array elements. If we want to access the last element, we can use -1. It works not only with arrays but also with strings.

=> 2.1. No, the at() method is only for reading. If we want to change the last element, we can use array[array.length - 1] = newValue

=> 2.2. slice(-1) returns a new array with the last element, while at(-1) returns the element itself.
