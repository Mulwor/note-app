1. [Конструкция switch](https://it-incubator.io/prosobesim/react-frontend/roadmap?s=E72159&skill=js-es5%2Fcommon%2Fdefault%2Fswitch-construction);

2. [Логические операторы](https://it-incubator.io/prosobesim/react-frontend/roadmap?s=E72159&skill=js-es5%2Fcommon%2Fdefault%2Flogical-operators);

---

1. What's switch construction?
   1.1. What comparison does switch use - strict or non-strict?
   1.2. What happens if you forget break?
   1.3. Can I use conditions in case?
   1.4. Is default required?

---

1 and 1.1.. A switch construction is used to compare a single value against multiple possible options. It uses strict comparison (===)

1.2. If we forget break, the program continues to the next case, even if that case doesn't match the condition.

1.3. No, you can only use specific values, not conditions.

1.4. No, default is not required. But it's a good practice to handle unexpected values.

---

2. Logical operators
   2.1. What is the precedence (приоритет) of logical operators?
   2.3. What will the expression return `"hello" && 0 || "world"`?
   2.4. How is it different `||` from `??` ?

3. A logical operation returns a boolean value (true or false). We have 3 main logical operators: AND (&&), OR (||), and NOT (!).

AND (&&) — it searches for the first falsy value and returns it. If it doesn't find any, it returns the last value.

OR (||) — it searches for the first truthy value and returns it. If it doesn't find any, it returns the last value.

NOT (!) — it inverts the value: true becomes false, false becomes true.

Speaking about precedence: NOT (!) has the highest priority (15), then AND (&&) has priority 6, and OR (||) has the lowest — priority 5.

=> 2.3. The first one will be solved by "hello" && 0 because it has a higher priority and it will return 0, then 0 || 'world' return and we get world

=> 2.4. They are similar, OR (||) returns the right operand if the left is false and `??` returns the right operand only if the left is null or undefined. Otherwise, it returns the left operand.
