const cluster = require('cluster');

if (cluster.isPrimary) {
  const worker = cluster.fork();
  
  // Имитация graceful shutdown через 5 секунд
  setTimeout(() => {
    console.log('Начинаем graceful shutdown...');
    
    // Отправляем сигнал на завершение воркеру
    worker.send('shutdown');
    
    // Ждем завершения и отключаем
    worker.on('disconnect', () => {
      console.log('Воркер отключился, завершаем главный процесс');
      cluster.disconnect();
    });
  }, 5000);
  
} else {
  // Обработка graceful shutdown в воркере
  process.on('message', (msg) => {
    if (msg === 'shutdown') {
      console.log(`Воркер ${cluster.worker.id} начинает shutdown...`);
      
      // Имитация завершения работы
      setTimeout(() => {
        console.log('Воркер завершил работу');
        cluster.worker.disconnect();
      }, 2000);
    }
  });
  
  console.log(`Воркер ${cluster.worker.id} запущен`);
}