// ? 2. Promise.any - возвращает результат первого успешно-выполненного промиса

const promise1 = new Promise((resolve, reject) => setTimeout(reject, 100, 'Ошибка 1'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'Успех 2'));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 300, 'Ошибка 3'));

Promise.any([promise1, promise2, promise3])
  .then((value) => console.log('Первый успешный результат:', value))          // Успех 2
  .catch((error) => console.error('Все промисы провалились:', error.errors));
