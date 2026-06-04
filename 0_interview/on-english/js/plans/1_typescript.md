<h3 align="center">Typescript</h3>

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

A regular enum is compiled into a JavaScript object. A const enum is removed during compilation - its values are inlined directly into the code.

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

A tuple is an array with a fixed length where each element can have a different type.

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

1. Partial<T> — makes all fields in a type optional
2. Required<T> — makes all fields in a type mandatory
3. Readonly<T> — creates a type whose property values cannot be changed
4. Pick<T, K> — selects only the properties we need
5. Omit<T, K> — excludes (deletes) the properties we don't need
6. Extract<T, U> — takes items from a union type that match the condition
7. Exclude<T, U> — takes items from a union type that do not match the condition

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
<summary>What is <T>, extends and infer?</summary>

<T> is a type parameter;
`extends` means constraint;

For example, T extends number means our type can only be numbers or subtypes of number. If we try to use a string, it will throw an error.

</details>

<details>
<summary>What does `T extends never` mean?</summary>

It checks if our type is assignable to never or not. If yes, it returns true.

</details>

<details>
<summary>How can I restrict a generic key to a different type (keyof)?</summary>

We can use `T extends keyof U`, where U is a type that takes a key.

</details>

<details>
<summary>What is infer?</summary>

Infer means extract and capture a type from inside another type. For example when we want to take type from Promise, or array, or take return type function

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

<details>
<summary>What are utility types? Name and explain a few.</summary>

Utility types are built-in types that help to manipulate types in some way. For example:

1. Partial<T> — makes all fields in a type optional
2. Required<T> — makes all fields in a type mandatory
3. Readonly<T> — creates a type whose property values cannot be changed
4. Pick<T, K> — selects only the properties we need
5. Omit<T, K> — excludes (deletes) the properties we don't need
6. Extract<T, U> — takes items from a union type that match the condition
7. Exclude<T, U> — takes items from a union type that do not match the condition

Difference: Pick and Omit work with interfaces and object types, while Extract and Exclude work with union types.

8. Record<K, T> — creates an object type with certain keys and values: Record<Keys, Type>
9. NonNullable<T> — removes null and undefined from the type

</details>

<details>
<summary>What is overload function?</summary>

Function overloading allows you to define multiple ways to call the same function — with different parameter types or counts.

</details>
