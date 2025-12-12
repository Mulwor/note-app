const { parentPort } = require('worker_threads');

const responses = {
  'Привет!': 'Здравствуйте!',
  'Как дела?': 'Отлично, работаю в отдельном потоке!',
  'Пока!': 'До свидания!'
};

parentPort.on('message', (message) => {
  console.log(`Получено от main: ${message}`);
  
  const response = responses[message] || 'Не понял сообщение';
  
  // Имитируем обработку
  setTimeout(() => {
    parentPort.postMessage(response);
  }, 500);
});