const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isPrimary) {
  console.log(`Главный процесс ${process.pid} запущен`);
  
  // Настройка создания воркеров
  cluster.setupMaster({
    exec: __filename, // Используем текущий файл
    args: [],
    silent: false
  });
  
  // Создаем воркеры по числу CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  // Событие при создании воркера
  cluster.on('fork', (worker) => {
    console.log(`Воркер ${worker.id} создан`);
  });
  
  // Событие при запуске воркера
  cluster.on('online', (worker) => {
    console.log(`Воркер ${worker.id} онлайн`);
  });
  
  // Событие при завершении воркера
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Воркер ${worker.id} завершился с кодом ${code}`);
    // Автозапуск нового воркера
    cluster.fork();
  });
  
  // Доступ ко всем воркерам
  console.log('Активные воркеры:', Object.keys(cluster.workers));
  
} else {
  // Код для воркеров
  console.log(`Воркер ${cluster.worker.id} (PID: ${process.pid}) запущен`);
  
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Привет от воркера ' + cluster.worker.id);
  }).listen(8000);
  
  console.log(`Воркер ${cluster.worker.id} слушает порт 8000`);
}