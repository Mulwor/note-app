// TODO => Пример №1 
console.log(foo);                           // * undefined
var foo = 123;


// Todo => Пример №2
var specialVarFirst;
console.log(specialVarFirst);               // * undefined
console.log(specialVarSecond);              // * undefined
var specialVarSecond = 1;


// TODO => Пример №3
console.log(foo);                           // * Error
let foo = 123;


// TODO => Пример №4
let age = 50;
function printAge() {
  console.log(age);
  let age = 30;
}
printAge();                                 // * Error


// TODO => Пример №5
console.log(animal);                      // * Uncaught ReferenceError: animal is not defined
if(true) {
  console.log(animal);                    // * Uncaught ReferenceError: Cannot access  'animal' before initialization
  const animal = "Parrot"
  console.log(animal);                    // * "Parrot"
}
