// ? Promise.allSettled - возвращает новый promise, который завершится, когда все promise в переданном массиве будут либо
// ? выполнены, либо отклонены. В отличие от Promise.all, который завершится с ошибкой, если хотя бы один promise отклонится, 
// ? Promise.allSettled всегда завершает выполнение и возвращает результаты для каждого promise, независимо от их состояния.

const promises = [
  Promise.resolve(10),
  Promise.reject('Ошибка!'),
  Promise.resolve(20)
];

Promise.allSettled(promises)
  .then((results) => console.log(results))

/*
  0 : {status: 'fulfilled', value: 10}
  1 : {status: 'rejected', reason: 'Ошибка!'}
  2 : {status: 'fulfilled', value: 20}
*/