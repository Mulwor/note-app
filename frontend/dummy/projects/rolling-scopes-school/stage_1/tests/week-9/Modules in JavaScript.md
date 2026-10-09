1. Is it possible for a JavaScript module to contain both a default export and named exports?

a) No
`b) Yes`
c) Yes, by it should be one default and one named exports
d) Yes, but named exports should be maximum 2

---

2. Are module scripts always deferred? - `Yes` / No

---

3. In a JavaScript ES6 module, what does the 'this' keyword refer to?

a) global
b) window
c) null
`d) undefined`

---

4. What correctly describes a JS module? (мультивыбор)

`a) Module path must be a string and can’t be a function call`
b) Modules offer no benefits to developers
`c) Module can be imported conditionally or at run-time`
d) Modules can't load each other and interchange functionality

---

5. How to enable modules in project?

`a) Add attribute type="module" to <script> tag`
b) Add to name of JS file identifier of module - script.module.js
c) Modules are enabled by default
d) None of the above

---

6. What does 're-export' mean in JavaScript modules?

a) Duplication of export in module code
`b) Ability to export within one module functionality imported into it from another module`
c) Ability of JS to export functionality again if something goes wrong
d) None of the above

---

7. How does the inclusion of top-level 'await' affect the loading and execution of a script in an ES module?

`a) Blocks module execution until the promise resolves`
b) Has no impact on script loading
c) Causes a syntax error
d) Delays loading of all dependent modules
e) It throws a dramatic pause into the script, like a cliffhanger in a soap opera

---

8. Is it true that JavaScript modules only work with HTTP/HTTPS and require a local web server for local development? - Yes / `No`

---

9. Is the 'export' keyword used to make variables and functions accessible outside their current JavaScript module? - Yes / `No`

---

10. Is it true that module scripts execute before the HTML document is fully ready if the module's size is smaller than the HTML file?

a) Yes, they execute based on size comparison
`b) No, execution does not depend on file size`

---

11. How many times does a JS module code imports?

a) After every re-render
`b) Only once, at the initial import`
c) Varies depending on the code structure
d) None of above
e) Whenever it feels like it needs a change of scenery

---

12. Which ways to export code from JS module really exist? (мультивыбор)

`a) default export`
b) initial export
c) single export
`d) named export`

---

13. What is a dynamic import?

a) Module import in conditional statement
`b) Function-like expression that allows loading modules asynchronously`
c) Re-exported imports
d) All of the above

---

14. What is the primary purpose of using an IIFE in JavaScript?

a) Making code more readable
b) Better communication with server
`c) Reducing global scope pollution`
d) To create a secret society within your code
e) Improving of code quality

---

15. In JavaScript modules, how are live bindings different from typical variable or function references?

`a) They are constantly updated`
b) They are static references
c) No difference in behavior
d) Only applicable to functions

---

16. What happens when a module imports itself in JavaScript?

a) Throws an error
b) Generates a new instance of the module
c) Ignored by the interpreter
`d) Handled as a cyclic dependency`
e) It gets caught in a narcissistic loop of self-admiration

---

17. How can you rename an imported module in JavaScript?

a) Create new variable with new name in script which uses this import
b) Import the whole content of module and extract it with destructing syntax
`c) Use 'as' (e.g. import { getText as ExternalFunc } from './utils/')`
d) Imports can be imported and used only with their original names

---

18. What IIFE syntax is correct?

`a) (function() { ... })`
b) function() { ... }
c) (function() { ... })()
d) All of the above

---

19. Is it possible for JavaScript modules to export class declarations?

`a) Yes, class declarations can be directly exported`
b) No, only instances
c) Only anonymous classes
d) Only if extended

---

20. Are JavaScript modules compatible with older browsers lacking ES6 support?

a) Directly supported
`b) Yes, using polyfills for backward compatibility`
c) With server-side rendering
d) Not compatible
e) Only if you whisper sweet nothings into the browser's ear

---

21. What benefits do modules provide? (мультивыбор)

`a) This approach helps to divide code into reusable pieces of code`
`b) Encapsulation of implementation details`
`c) Easy dependencies management`
d) Modules automatically download all dependecies

---

22. What information is contained in the 'meta' property of an 'import' object in JavaScript?

`a) Information regarding the current module`
b) Settings or configurations of the module
c) List of imports
d) This property doesn't exist
e) Secret messages from other developers

---

23. Which of the following statements are correct about JS modules? (мультивыбор)

`a) Module can be imported to another module`
b) Module is directory with scripts
`c) One script is one module`
`d) Module usually includes 'export' statements in its code`
e) Modules are magical boxes where JS elves write your code

---

24. How does JavaScript manage side effects within modules?

a) Ignored
`b) Executed once`
c) Not allowed
d) Depends on the export type

---

25. What are the key features of a JavaScript module? (мультивыбор)

`a) Always work in strict mode`
`b) Top-level variables and functions from a module are not seen in other scripts`
c) In a module, top-level's 'this' equals top-level's local scope
`d) A module code is evaluated only the first time when imported`

---

26. Which statements about dynamic import are correct? (мультивыбор)

`a) It works in regular scripts and does not require the 'type="module"' attribute in a <script> tag`
b) import() is regular function
`c) import() looks like function but it's special syntax`
d) 'call' and 'apply' methods can be used with import()

---

27. What is the difference between default and named export in a JS module?  (мультивыбор)

a) Default and named exports are the same
`b) Only one default export is allowed per file, whereas multiple named exports are permitted`
c) Only one named export is accepted in one file, default exports can be multiple
`d) You can choose any name when importing default export, named exports are imported as it is or should be renamed explicitly`

---

28. What types of JS modules exist?

`a) CommonJS`
`b) Universal Module Definition (UMD)`
`c) Asynchronous Module Definition (AMD)`
`d) ES6`

---

29. Can named exports in JavaScript modules be modified?

a) Yes, always
`b) No, named exports are immutable and read-only`
c) Only in strict mode
d) Depends on the variable type

---

30. What is the maximum number of default exports allowed in a single JavaScript module file?

a) 0
`b) 1`
c) Maximum 5
d) Unlimited number

---

31. Can the 'import' keyword be used to import functionality from an index.html file? - Yes / `No`

---

32. Which of the following statements correctly describe characteristics of IIFE functions in JavaScript? (мультивыбор)

`a) Anonymous function that is invoked when it is declared`
`b) Immediately Invoked Function Expression`
c) Initially Invoked Function Expression
`d) Named function that is invoked when it is declared`