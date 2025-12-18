const cluster = require('cluster');

if (cluster.isPrimary) {
  const worker = cluster.fork();
  
  // Получаем сообщения от воркера
  worker.on('message', (msg) => {
    console.log(`От воркера ${worker.id}:`, msg);
    
    if (msg === 'завершить') {
      // Отключаем воркера
      worker.disconnect();
      
      // Закрываем все воркеры через 2 секунды
      setTimeout(() => {
        cluster.disconnect(() => {
          console.log('Все воркеры отключены');
        });
      }, 2000);
    }
  });
  
  // Отправляем сообщение воркеру
  setTimeout(() => {
    worker.send({ task: 'выполнить', data: 'тест' });
  }, 1000);
  
} else {
  // Воркер получает сообщения от главного процесса
  process.on('message', (msg) => {
    console.log('Воркер получил:', msg);
    
    // Отправляем ответ обратно
    process.send('задание получено');
    
    // Через секунду отправляем сообщение о завершении
    setTimeout(() => {
      process.send('завершить');
    }, 1000);
  });
}