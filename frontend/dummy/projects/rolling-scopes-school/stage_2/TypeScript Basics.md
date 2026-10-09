1. Is the function call func('1','2') valid for the function function func(a: number, b: number){ ...some code... }?

a) The call is valid, there will be no error.
b) The call is incorrect, but there will be no error.
c) The call is incorrect and there will be an error.

2. What types of functions can be written in TS?

a) function declaration
b) function expression
c) arrow function

3. Is it possible to combine two or more other types to form a combined type representing values that may be any one of those initial types?

a) Yes, it is called a union.
b) Yes, it is called an onion.
c) Yes, it is called a merger.
d) No, it is not possible.

4. What is the purpose of static type-checking in TypeScript?

a) To catch runtime errors
b) To improve code performance
c) To find bugs before code execution
d) To enhance code readability

5. According to Microsoft recommendations, should the name of an interface in TS start with an additional 'I'?

a) Yes, it should.
b) No, it is not recommended.

6. Which of the following syntax options is valid for const assertions in TypeScript?

a) let x = "hello" <const>;
b) let y = [10, 20] as const;
c) let z = { text: "hello" } const;
d) let a = (Math.random() < 0.5 ? 0 : 1) as const;

7. Can JavaScript code be executed in a file with the .ts extension?

a) Yes, it can.
b) No, it cannot.

8. Which access modifiers are supported in TS?

a) public
b) private
c) void
d) protected

9. Can you use alert() in TS?

a) Yes, you can.
b) No, you cannot.

10. Can a function in TS accept another function as an argument?

a) Yes, it can.
b) No, it cannot.
c) By default, it cannot, but you can create conditions under which it becomes possible.

11. Which of the following are correct ways to perform type assertions in TypeScript?

a) const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
b) const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
c) const myCanvas = document.getElementById("main_canvas") as string;
d) const myCanvas = (HTMLCanvasElement)document.getElementById("main_canvas");

12. What is the value of C in enum One {A = 1,B = 5,C,D = 0}?

a) 3
b) undefined
c) 6
d) 5
e) There will be an error

13. When deciding between type aliases and interfaces, what is recommended to use?

a) Always use type aliases for better performance.
b) Use type for simple structures and interfaces for complex structures.
c) Use interfaces until you need features from type, then switch to type.
d) There is no significant difference; choose based on personal preference.

14. What is the main advantage of the new unknown top type introduced in TypeScript 3.0?

a) It absorbs everything in a union type.
b) It allows operations without type assertion or narrowing.
c) It is assignable to any type without restrictions.
d) It is assignable only to itself and "any" without a type assertion or control flow based narrowing.

15. Which type is suitable for the object let obj = { name: 'Alan', age: 20 }?

a) {name: string}
b) {name: string; age: number}
c) {name: string; age: number; isAdmin: boolean}
d) {name: string; age: number; isAdmin?: boolean}
e) {age: any; name: any; isAdmin: any}

16. In TypeScript, which syntax is used to declare a variable that can be either a 'number' or a 'string'?

a) Types cannot be combined in TS.
b) number && string
c) number | string
d) number || string
e) number & string

17. How do you correctly extend a type alias? (A and B are types in the example)

a) Type aliases cannot be extended in TS.
b) A && B
c) A || B
d) A | B
e) A & B

18. Which type corresponds to the array let arr = [1, 2, 3];?

a) number[ ]
b) string[ ]
c) Array
d) Array<number>
e) Array<string>

19. Can a function in TS return an object?

a) Yes, it can.
b) No, it cannot.
c) By default, it cannot, but you can create conditions under which it becomes possible.
d) It depends on the type of function (declaration, expression, arrow).

20. Can you pass more parameters than expected in a function call in TS?

a) No, you cannot.
b) Yes, you can.

21. Does array destructuring work in TS?

a) Yes
b) No, it doesn't work
c) Only in readonly arrays

22. In the expression 'let test: string = "hello world"; test = 23;'

a) No error will occur.
b) There will be an error because the type is not specified in the second expression.
c) There will be an error because the types of the first and second expressions do not match.
d) There is no correct answer.

23. How do you correctly describe the type of a function: function func(){ console.log("My function"); };

a) () => string;
b) () => void;
c) (string) => void;
d) (undefined)=>void;
e) There is no correct answer.

24. What is the purpose of intersection types in TypeScript?

a) To create new types by extending existing types using the & operator.
b) To define the relationship between interfaces and objects.
c) To handle conflicts between types and aliases.
d) To create generic helper types.

25. Can you set a value that is another expression (e.g., a function call) as the default value for function parameters in TS?

a) No, you cannot.
b) Yes, you can.
c) By default, you cannot, but you can create conditions under which it becomes possible.

26. In the expression 'let someVar: any = "hello"; test = 23;'

a) No error will occur
b) There will be an error because the type is not specified in the second expression
c) There will be an error because the types do not match in the first and second expressions
d) There is no correct answer

27. Which TypeScript strictness flag makes TypeScript issue an error on variables implicitly inferred as 'any'?

a) strictNullChecks
b) noImplicitAny
c) strict
d) noSurpriseVariables
e) noAnyChecks

28. When working with class constructors in TypeScript, what is a key difference between function signatures and constructor signatures?

a) Constructors can have type parameters, unlike functions
b) Constructors can have return type annotations, unlike functions
c) Constructors always return the class instance type
d) Constructors cannot have default values for parameters

29. What is 'as' in TS?

a) It is a type assertion, a way to specify to the compiler which type (previously declared) the variable will have.
b) It is a way to combine types and assign a different type (not previously defined) to a variable during compilation forcibly.
c) It is a replacement of the type previously described for a variable with the type needed in a specific line.
d) It is a deprecated operator that is not used at the moment.

30. In TypeScript, what is the default visibility modifier for class members?

a) public
b) private
c) protected
d) internal

31. In the expression 'let test: any = "hello"; test = 23;'

a) There will be an error because the type is not specified in the first expression.
b) There will be an error because the type is not specified in the second expression.
c) No error will occur.
d) There is no correct answer.

32. What does the postfix ! operator do in TypeScript?

a) It negates a boolean value.
b) It asserts that a value isn't null or undefined.
c) It converts a variable to a different type.
d) It is used for arithmetic operations.

33. How can you add type annotations to variables in TypeScript?

a) Before the variable, using "int x = 0;" style declarations.
b) After the variable, using "let x: string = 'hello';" style declarations.
c) Using the type keyword.
d) TypeScript automatically infers types; no annotations needed.