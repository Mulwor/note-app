// ? Методы у promise

// ? Promise.all(iterable) -  метод, который позволяет запустить несколько промисов 
// ? параллельно и получить результат когда все они завершаться успешно или хотя бы 1 
// ? завершится с ошибкой

let p1 = Promise.resolve(3);
let p2 = 1337;
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);                      // [3, 1337, 'foo']
});

// ========================================================================================
function delay(ms, result) {
  return new Promise((resolve) => setTimeout(() => resolve(result), ms));
}

const delay_1 = delay(1000, "Результат 1"); // Выполнится через 1 секунду
const delay_2 = delay(2000, "Результат 2"); // Выполнится через 2 секунды
const delay_3 = delay(1500, "Результат 3"); // Выполнится через 1.5 секунды

Promise
  .all([delay_1, delay_2, delay_3])
    .then((results) => console.log(results))
    .catch((error) => console.error("Один из промисов завершился с ошибкой:", error));

// ========================================================================================
const promise1 = Promise.resolve('Успех 1');
const promise2 = Promise.reject(new Error('Что-то пошло не так!'));
const promise3 = Promise.resolve('Успех 3');

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log('Успех:', results))
  .catch((error) => console.error('Ошибка:', error.message));