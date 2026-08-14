// ? Метод Promise.reject(reason) используется для создания промиса, который сразу переходит
// ? в состояние "отклонён" (rejected) с переданной причиной ошибки. 

const rejectedPromise = Promise.reject('Что-то пошло не так');

rejectedPromise
  .then((value) =>  console.log('Успех:', value))
  .catch((error) =>  console.log('Ошибка:', error));
