// ! ===========================================================================================
console.log(foo);                         
var foo = 123;

// ! ===========================================================================================
var specialVarFirst;
console.log(specialVarFirst);

// ! ===========================================================================================
console.log(foo);
let foo = 123;

// ! ===========================================================================================
let age = 50;
function printAge() {
  console.log(age);
  let age = 30;
}
printAge();                               // * Error

// ! ===========================================================================================
console.log(animal);                      // * Uncaught ReferenceError: animal is not defined
if(true) {
  console.log(animal);                    // * Uncaught ReferenceError: Cannot access  'animal' before initialization
  const animal = "Parrot"
  console.log(animal);                    // * "Parrot"
}
