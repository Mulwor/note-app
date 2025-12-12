const { Worker } = require('worker_threads');

// Создаем worker и отправляем запрос к дочернему модулю
const worker = new Worker('./worker.js');
const numbers = [1, 2, 3, 4, 5];
worker.postMessage(numbers);

// Получаем результат от worker'а
worker.on('message', (result) => {
  console.log(`Сумма чисел: ${result}`);
  worker.terminate(); // Завершаем worker
});

// Обработка ошибок
worker.on('error', (err) => console.error('Ошибка в worker:', err));

// Обработка завершения
worker.on('exit', (code) => {
  if (code !== 0) console.error(`Worker остановлен с кодом: ${code}`);
});