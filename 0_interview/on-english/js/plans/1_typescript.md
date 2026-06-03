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
<summary>What is the difference between 'any', 'unknown', and 'never'?</summary>

- any: disables type checking, avoid in production code
- unknown: type-safe 'any', requires type checking before use
- never: represents values that never occur (unreachable code, exhaustive checks) • unknown forces you to narrow type before using it - never useful for exhaustive switch cases and error handling

---

Помимо основных 3 примитивных типов - `string`, `number`, `boolean`. Есть также

- `Any` - говорим TS, что тип может быть любым. Словно мы пишем на голом JS, он небезопасный, так как в процессе работы с данным типом к нему присвоится любой другой тип

- `unknown` - похож на тип any, но он более безопасный, мы в начале проверяем через typeof какой тип мы ожидаем, а уже внутри делаем условия. П.С. Тип может быть любой

- `void` - означает, что у функция нет возвращаемого значения.

- `never` - означает, что функция никогда не завершится. Используем когда хотим выбросить ошибку и с бесконечным циклом

</details>

<details>
<summary>What's difference between union (I) type and intersection (&) type</summary>

Если говорить про union тип - `I`, то мы говорим, что тип может быть одним из перечисляемых. Например либо строка либо число, но если данного типа нет, то выбрасывается ошибка ТС

```js
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "Привет";
value = 42;
value = true;               // Ошибка: boolean не входит в string | number
```

В то время у Intersection - `&` когда все поля в интерфейсах должны быть обязательными к заполнению. Если пропустим какой-то тип, то выбросит ошибку, что данное поля нет например в объекте

```ts
interface Person {
  name: string;
}
interface Employee {
  company: string;
}
type EmployeePerson = Person & Employee;

const john: EmployeePerson = { name: "John", company: "Tech Corp" };

// ОШИБКА - отсутствует поле 'company'
const invalidPerson: EmployeePerson = { name: "John" };
```

</details>

---

2. What is enum?

- Named set of constants
- Makes code more readable than magic strings/numbers
- Two types: numeric enum (default, starts at 0) and string enum
- Example: enum Status { Pending = 'PENDING', Success = 'SUCCESS' }
- Modern alternative: union types with 'as const'

=> What difference between enum and const enum?

4. What is <T>?

- Generic type parameter creates reusable type-safe code
- Type is determined when used, not when defined
- Like function parameters, but for types
  • Example: function identity<T>(value: T): T { return value; } • Used extensively in React: useState<T>, Array<T>, Promise<T>

=> `What does T extends never mean?`

5. What are utility types? Name and explain a few.

- Built-in TypeScript helpers for type transformations
  • Pick<T, K>: Select specific properties from type
  • Omit<T, K>: Exclude specific properties from type
  • Partial<T>: Make all properties optional, Required<T>: make all required
  • Record<K, T>: Create object type with specific keys, ReturnType<T>: extract return type • Example: type UserUpdate = Partial<Pick<User, 'name' | 'email'>>

7. What's difference between union (I) type and intersection (&) type

8. What's TypeGuard?

9. What's generic?

10. What's infer

=> Как достать тип аргумента функции через infer?

11. What's difference between keyof / typeof in TS

Overload function (перегрузка функций)

What's cartage
