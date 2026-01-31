// ? Типы данных в JS
let string = "Oleg";
let number = 25;
let bigInt = 1234567890123456789012345678901234567890n;
let boolean = true;
let id = Symbol("id");

let undef;
let emptyValue = null;

console.log(undef); // undefined

let user = { 
  name: "Иван", 
  age: 30 
};

// ! =================================================================
// ? Определить тип данных можно через typeOf
console.log(typeof 0)                               // * number
console.log(typeof true)                            // * boolean
console.log(typeof 'Javascript')                    // * string
console.log(typeof undefined)                       // * undefined
console.log(typeof Math)                            // * object
console.log(typeof Symbol('JS'))                    // * symbol
console.log(typeof null)                            // * object
console.log(typeof function() {})                   // * function
console.log(typeof NaN)                             // * number
console.log(typeof typeof 100)                      // * string