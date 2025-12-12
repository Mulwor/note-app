const { Worker } = require('worker_threads');

const worker = new Worker('./chatWorker.js');

// Отправляем сообщения worker'у
setTimeout(() => worker.postMessage('Привет!'), 1000);
setTimeout(() => worker.postMessage('Как дела?'), 2000);
setTimeout(() => worker.postMessage('Пока!'), 3000);

// Получаем ответы от worker'а
worker.on('message', (msg) => {
  console.log(`Worker ответил: ${msg}`);
  
  if (msg === 'До свидания!') {
    setTimeout(() => worker.terminate(), 1000);
  }
});