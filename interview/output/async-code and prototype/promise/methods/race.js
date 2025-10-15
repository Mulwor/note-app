// ? Promise.race возвращает результат первого завершившегося промиса из переданного набора, 
// ? независимо от того, завершился он успешно или с ошибкой.

const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Успех 1'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 300, 'Ошибка 2'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 700, 'Успех 3'));

Promise.race([promise1, promise2, promise3])
  .then((value) =>  console.log('Первый завершившийся результат:', value))
  .catch((error) => console.error('Первый завершившийся промис с ошибкой:', error));