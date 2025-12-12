const { parentPort, workerData } = require('worker_threads');

// Получаем данные переданные при создании worker'а
const data = workerData;

// Имитируем тяжелые вычисления
function processData(arr) {
  // Искусственная задержка
  const start = Date.now();
  while (Date.now() - start < 1000) {
    // Симуляция работы
  }
  
  return arr.reduce((sum, num) => sum + num * 2, 0);
}

// Обрабатываем и отправляет данные
const result = processData(data);
parentPort.postMessage(result);