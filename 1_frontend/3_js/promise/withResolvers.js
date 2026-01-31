// Promise.withResolvers() - возвращает объект, который содержит объект с 3 функциями:
// cам промисс; resolve (функция для перевода fulfill) и reject (функция для перевода в 
// отрицательный результат),

const { resolve, reject, promise } = Promise.withResolvers()

// ====================================================================================
// ? Классический способ создания promise
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>  resolve(), ms)
  });
}

function delay(ms) {
  const { resolve, reject, promise } = Promise.withResolvers();
  setTimeout(() => resolve(), ms)
  return promise
}

async function run() {
  console.log('Начало')
  await delay(2000)
  console.log('конец')
}
run()

// ====================================================================================
let resolveCallback, rejectCallback;
const variablePromise = new Promise((resolve, reject) => {
  resolveCallback = resolve;
  rejectCallback = reject;
});

// После (с использованием withResolvers) - resolve и reject ограничены этой областью
const { promise, resolve, reject } = Promise.withResolvers();

// ====================================================================================
// Убирает шаблонный код, где нужно объявлять переменные заранее
function createDeferred() {
  let deferred = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}

function createDeferred() {
  return Promise.withResolvers();
}