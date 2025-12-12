const { Worker } = require('worker_threads');

function runScenario(useUnref, scenarioName) {
  console.log(`\n=== Сценарий: ${scenarioName} ===`);
  
  const worker = new Worker('./worker.js');
  
  worker.on('message', (msg) => console.log(`Сообщение от worker: ${msg}`));
  worker.on('exit', () => console.log('Worker завершился'))
  
  if (useUnref) {
    worker.unref(); // 👈 Ключевой момент!
    console.log('Воркер "unrefнут" - программа может завершиться раньше');
  } else {
    console.log('Воркер "refнут" (по умолчанию) - программа ждет завершения');
  }
  
  setTimeout(() => console.log('Основной поток завершает свою работу (через 2 сек)'), 2000);
}

runScenario(false, 'Worker.ref() - по умолчанию');
setTimeout(() => runScenario(true, 'Worker.unref()'), 4000);