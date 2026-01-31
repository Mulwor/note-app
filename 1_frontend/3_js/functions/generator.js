// ? Генераторы — это функции, которые могут приостанавливать своё
// ? выполнение и возобновлять его позже. 

function* generatorFunction() {
  yield 'Первое значение';
  yield 'Второе значение';
  return 'Финал';
}

const gen = generatorFunction();

console.log(gen.next()); // { value: 'Первое значение', done: false }
console.log(gen.next()); // { value: 'Второе значение', done: false }
console.log(gen.next()); // { value: 'Финал', done: true }