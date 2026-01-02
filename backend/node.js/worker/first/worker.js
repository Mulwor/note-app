const { parentPort } = require('worker_threads');

// Получаем данные от главного потока
parentPort.on('message', (numbers) => {
  // Выполняем тяжелые вычисления
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  
  // Отправляем результат обратно
  parentPort.postMessage(sum);
});