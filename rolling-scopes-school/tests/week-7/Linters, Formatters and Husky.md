1. What is a linter?

`a) A tool for improving code quality`
b) A tool for formatting new code before a commit to be created
c) A modern native Git hooks tool
d) None of the above

---
2. How do you configure plugins in an ESLint configuration file?

a) Using the 'eslint-config' key
`b) Using the 'plugins' key`
c) Directly in the 'rules' section
d) In the '.eslintrc' file's header

---
3. What is a linter used for? (мультивыбор)

a) Fix programming errors
`b) Code standardization`
c) Adapting legacy code for modern browsers
`d) Identify bugs`

---
4. What is Husky? (мультивыбор)

a) JavaScript library 
b) The most popular code formatter
`c) Tool for automation of adding Git Hooks (Инструмент для автоматизации добавления Git Hooks)`
d) A linter for detecting code style issues (Линтер для обнаружения проблем со стилем кода)

---
5. What is Prettier?

a) A bugs highlighter
b) A pre-commit hook
c) A linter
`d) A code formatter`

---
6. What statements are correct about Prettier and ESLint integration? (мультивыбор)

`a) Integration of this tools gives opportunity to run them together as one job`
`b) Prettier provides 'eslint-plugin-prettier' and 'eslint-config-prettier' rules to accomplish this`
`c) Prettier's config can be defined in a .eslintrc.* (or eslint.config.js.) file, but it can lead to an inconsistent experience`
d) These tools can't be integrated with each other

---
7. Why is a good practice to use ESLint together with Prettier?

a) Prettier is able only detect problems in code, ESLint fix it
b) Prettier makes ESLint warnings and errors more readable for users
`c) Prettier enforces a consistent code style and linter/ESLint is responsible for code-quality rules and catching bugs`
d) ESLint identifies issues but cannot fix all, Prettier can
e) There is no difference between ESLint and Prettier and it's not necessary to use them together

---
8. What types of checks do a linter provide? (мультивыбор)

`a) Syntax errors`
`b) Potential problems`
c) Number of warnings in console
`d) Code standards adherence`

---
9. Which option in Prettier is used to control trailing commas?

a) 'commaStyle'
`b) 'trailingComma'`
c) 'commaEnd'
d) 'endComma'

---
10. What does a .eslintrc.* (or eslint.config.js.) file represent?

a) Configuration file used by Prettier
b) Configuration file used by Node.js
`c) Configuration file used by ESLint`
d) File with this name doesn't exist

---
11. What does setting 'singleQuote' to true do in Prettier?

a) Forces the use of double quotes
b) Enables single quotes in JSX
`c) Uses single quotes instead of double quotes`
d) Disables quote conversion

---
12. Which of the following Git hooks are not supported by Husky? (мультивыбор)

`a) pre-receive`
`b) update`
c) pre-push
`d) post-receive`

---
13. What does the 'eslint-plugin-' prefix in ESLint plugin names indicate?

`a) It's a mandatory prefix for all ESLint plugins`
b) It can be omitted from plugin names in configuration
c) It's only used for scoped packages
d) Indicates a deprecated plugin

---
14. What are Code Smells?

a) The processes of verifying codebases for adherence to code styles
b) Errors in code after compilation
`c) Signs that something might be wrong with a code`
d) All of the above

---
15. What does an ESLint rule with a value 'warn' do?

`a) It shows a warning in the terminal with a path to a problematic file`
b) It shows an error message
c) It provides analytics with all warnings
d) It does nothing

---
16. Which of the following is true about the 'tabWidth' option in Prettier? (мультивыбор)

`a) Specifies the number of characters per indentation-level`
b) Defaults to 4 spaces
c) Is used to set the width of tabs in the output file
`d) Controls the number of spaces in a tab character`

---
17. What does the 'semi' option in Prettier control?

`a) The insertion of semicolons at the end of statements`
b) Checking for missing semicolons
c) Conversion of double quotes to semicolons
d) The style of semicolons used

---
18. What are code style guides created for?

a) To design application UI in a unified style
`b) To help developers write consistent and maintainable code`
c) To simplify code writing by accumulation of typical code blocks
d) Style guides are created for UI/UX designers

---
19. What Git hooks from the list really exists? (мультивыбор)

`a) pre-commit`
`b) pre-push`
c) pre-pull
`d) pre-rebase`

---
20. What does running "husky init" do? (мультивыбор)

`a) Creates a .husky/ directory and a "pre-commit" script`
b) Installs Husky globally and adds a "post-install" script to package.json
c) Creates .huskyrc and updates the "start" script in package.json
`d) Adds a "prepare" script to package.json`

---
21. How can ESLint be configured? (мультивыбор)

`a) By enabling a rule as a warning or an error`
`b) By creating custom rules`
c) By adding code quality analytics
`d) By integrating linting into a build process`

---
22. What are ESLint rules?

a) Open list of rules for code checks, set up in package.json
b) Predefined list of rules for code checks, set up in package.json
c) Open list of rules for code checks, set up in ESLint configuration file
`d) Predefined list of rules for code checks, set up in ESLint configuration file`

---
23. What values can be set to ESLint rules?

a) 'off', 'on'
`b) 'off', 'warn', 'error'`
c) 'ignore', 'warn', 'error'
d) 'disable', 'enable'

---
24. Is it mandatory to use linters, formatters, Husky in project?

a) Yes, everything is mandatory
b) Only linters and Husky are mandatory
c) Only formatters are mandatory
`d) They're not mandatory but highly recommended to keep a good code quality`

---
25. What are features of Husky? (мультивыбор)

a) Zero dependencies and lightweight
b) User-friendly messages
c) Husky supports platforms such as macOS, Linux, and Windows
d) Powered by modern new Git feature (core.hooksPath)

Ответ: все

---
26. What do an ESLint rule with a value 'error' in case of any error?

a) It crashes an app
`b) It shows an error message in the terminal with a path to a file with the error`
c) It shows only an error message
d) It shows a number of errors in an app

---
27. What are benefits of using ESLint? (мультивыбор)

`a) Objective measurement of a code quality`
`b) Readable, maintainable, and more consistent code`
`c) Fewer errors in production`
d) Education about code quality reaches more app users

---
28. What can Husky do? (мультивыбор)

a) Run any command, for example from one of the installed packages (e.g. Prettier)
b) Use 'pre-commit' script to run all tests
c) Validate commit messages
d) Fix code smells before pushing the commit

Ответ: все

---
29. What is a .prettierrc file?

`a) Configuration file used by Prettier`
b) Configuration file used by Node.js
c) Configuration file used by ESLint
d) File with this name doesn't exist

---
30. Which coding style guides are most popular? (мультивыбор)

`a) Airbnb`
`b) Netflix`
c) Google
d) Idiomatic
e) The Rolling Scopes School

---
31. How does Husky works?

a) It checks if a relevant Git Hook is available for a called Git command
b) It formats code to comply with code style requirements
`c) It runs a Git Hook when a relevant Git command is called`
d) It scans code to indicate all problems with code quality

---
32. What is the default value for Prettier's 'printWidth' option?

`a) 80 characters`
b) 100 characters
c) 120 characters
d) No default value

---
33. Is ESLint capable of formatting code?

a) Yes, without any limits
b) Yes, but Prettier is a more capable tool for this purpose
`c) Yes, but Husky is a more relevant tool for this purpose`
d) Absolutely not