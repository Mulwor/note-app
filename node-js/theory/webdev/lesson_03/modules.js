// ? 1. Для импорта мы используем require
// const sayWorld = require('./test')
// console.log(sayWorld)

// ? 2. Мы можем использовать деструктурицаю, чтобы вытащить несколько значений
const { world, sayHelloWorld } = require('./test')

console.log(world);
console.log(sayHelloWorld(world))