// ? Метод Promise.resolve создаёт promise, который сразу переходит в состояние "выполнен" (fulfilled) 
// ? с переданным значением. Это удобно, если нужно вернуть уже готовое значение в виде promise.

const resolvedPromise = Promise.resolve('Успех!');

resolvedPromise.then((value) =>  console.log('Результат:', value));

// ====================================================================================================
var p = Promise.resolve([1, 2, 3]);

p.then(function (v) {
  console.log(v[0]); // 1
});