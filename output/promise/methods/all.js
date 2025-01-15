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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, ms);
  });
}

const promise1 = delay(1000, "Результат 1"); // Выполнится через 1 секунду
const promise2 = delay(2000, "Результат 2"); // Выполнится через 2 секунды
const promise3 = delay(1500, "Результат 3"); // Выполнится через 1.5 секунды

Promise.all([promise1, promise2, promise3])
          .then((results) => console.log(results))
          .catch((error) => console.error("Один из промисов завершился с ошибкой:", error));
