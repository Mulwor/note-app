// 1. CPU-intensive вычисления на JavaScript
const worker = fork('./heavy-calculation.js');

// 2. Микросервисы/модули внутри одного приложения
const apiServer = fork('./api-server.js');
const webSocket = fork('./websocket.js');

// 3. Когда нужно отправлять данные туда-обратно
worker.send({ task: 'processData', data: largeData });
worker.on('message', result => useResult(result));

// 4. Изоляция нестабильного кода
const plugin = fork('./third-party-plugin.js');
// Если упадет - не затронет основной процесс

// 5. 
// main.js
const { fork } = require('child_process');
const child = fork('./child.js');

child.on('message', (msg) => console.log('Message from child:', msg));
child.send({ hello: 'world' });

// child.js
process.on('message', (msg) => {
  console.log('Message from parent:', msg);
  process.send({ foo: 'bar' });
});