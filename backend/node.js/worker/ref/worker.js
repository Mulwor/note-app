const { parentPort } = require('worker_threads');

// Длительная операция - таймер на 5 секунд
setTimeout(() => {
  parentPort.postMessage('Работа завершена!');
}, 5000);

console.log('Воркер начал работу...');