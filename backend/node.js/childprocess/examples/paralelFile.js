const { fork } = require('child_process');
const path = require('path');

// Создаем пул процессов
const workers = [];
for (let i = 0; i < 4; i++) {
  workers.push(fork(path.join(__dirname, 'worker.js')));
}

// Распределяем задачи
workers.forEach((worker, index) => {
  worker.send({ task: `task-${index}` });
});