const { spawn } = require('child_process');
const tail = spawn('tail', ['-f', '/var/log/system.log']);

tail.stdout.on('data', (data) => {
  console.log(`LOG: ${data}`);
});