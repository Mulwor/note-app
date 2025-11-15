const world = "world";
const sayHelloWorld = (world) => `Hello, ${world}`;

// ? 1. Если мы хотим использовать переменную в другом месте, то мы можем
// ? его экспортировать через module
// ? module.exports = world;

// ? 2. Если нам нужно экспортировать несколько значение то мы это делаем через объект
module.exports = {
  world,
  sayHelloWorld
}