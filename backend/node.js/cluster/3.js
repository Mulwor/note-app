const cluster = require('cluster');
const http = require('http');

if (cluster.isPrimary) {
  console.log('Главный процесс начал работу');
  
  const worker1 = cluster.fork();
  const worker2 = cluster.fork();
  
  // Событие, когда воркер начинает слушать порт
  cluster.on('listening', (worker, address) => {
    console.log(`Воркер ${worker.id} слушает порт ${address.port}`);
  });
  
  // Событие отключения воркера
  cluster.on('disconnect', (worker) => {
    console.log(`Воркер ${worker.id} отключился`);
  });
  
  // Отправка сообщений конкретным воркерам
  setTimeout(() => {
    worker1.send('Привет первому воркеру!');
    worker2.send('Привет второму воркеру!');
  }, 2000);
  
  // Доступ к процессу воркера
  console.log('Процесс воркера 1:', worker1.process.pid);
  console.log('Процесс воркера 2:', worker2.process.pid);
  
} else {
  // Каждый воркер создает HTTP сервер
  http.createServer((req, res) => {
    res.end(`Ответ от воркера ${cluster.worker.id}`);
  }).listen(0); // Слушаем случайный порт
  
  // Получаем сообщения от главного процесса
  process.on('message', (msg) => {
    console.log(`Воркер ${cluster.worker.id} получил: ${msg}`);
  });
}