const { Worker } = require('worker_threads');

function runWorker(data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./processor.js', {
      workerData: data // Передаем данные при создании
    });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Worker остановлен с кодом ${code}`));
    });
  });
}

async function main() {
  // Создаем несколько worker'ов для параллельной обработки
  const workersData = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  try {
    // Запускаем все worker'ы параллельно
    const promises = workersData.map(data => runWorker(data));
    const results = await Promise.all(promises);
    
    console.log('Все результаты:', results);
    console.log('Общая сумма:', results.reduce((a, b) => a + b, 0));
  } catch (err) {
    console.error('Ошибка:', err);
  }
}

main();