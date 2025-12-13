// 1. Выполнения системных команд
const { exec } = require('child_process');

exec('ls -la', (error, stdout, stderr) => {
  console.log(stdout);
});

// 2. Запуск внешних программ
const { spawn } = require('child_process');
const pythonProcess = spawn('python', ['script.py']);

// 3. Основной процесс не блокируется
const heavyTask = spawn('node', ['cpu-intensive.js']);