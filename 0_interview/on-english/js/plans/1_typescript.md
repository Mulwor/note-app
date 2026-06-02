1. Tell me about typeScript, what is it and why we need to use it?

- What is TypeScript for?
  - Adds static type checking to JavaScript
  - Catches errors at compile time (before runtime)
  - Better IDE support (autocomplete, IntelliSense, refactoring)
  - Makes code self-documenting and safer to refactor
  - Compiles to plain JavaScript

=> Tell me about benefits and not-benefits of that language programs

2. What is enum?

- Named set of constants
- Makes code more readable than magic strings/numbers
- Two types: numeric enum (default, starts at 0) and string enum
- Example: enum Status { Pending = 'PENDING', Success = 'SUCCESS' }
- Modern alternative: union types with 'as const'

=> What difference between enum and const enum?

3. What is the difference between type and interface?

- Both define object shapes and can be extended
- Interface: uses 'extends', supports declaration merging, better for object shapes
- Type: uses '&' intersection, supports unions/primitives/tuples, more flexible
- Interface better for public APIs, Type better for unions and complex types
- Consistency in your project matters more than the choice

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

6. What is the difference between 'any', 'unknown', and 'never'?

- any: disables type checking, avoid in production code
- unknown: type-safe 'any', requires type checking before use
- never: represents values that never occur (unreachable code, exhaustive checks) • unknown forces you to narrow type before using it - never useful for exhaustive switch cases and error handling

7. What's difference between union (I) type and intersection (&) type

8. What's TypeGuard?

9. What's generic?

10. What's infer

11. What's difference between keyof / typeof in TS

---

What else can I say? - Что я могу еще сказать
Only works - будет работать
