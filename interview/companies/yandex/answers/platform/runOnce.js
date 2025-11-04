// ? Реализовать функцию-обертку runOnce, которая принимает функцию и возвращает новую
// ? функцию. Новая функции может быть вызвана только 1 раз, все последующие вызовы
// ? возвращают undefined.

// ? Оборачиваемая функция может принимать аргументы и возвращать результат

function runOnce(fn) {
  let called = false;
  
  return function(...args) {
    if (called) {
      return undefined;
    }
    called = true;
    return fn(...args);
  };
}

const logHello = () => {
  console.log('hello!')
}

const logHelloOnce = runOnce(logHello);
console.clear();
logHelloOnce();
logHelloOnce();