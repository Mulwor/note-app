const { spawn, exec } = require('child_process');

const child = spawn('long-running-script.sh');

// Таймаут 30 секунд
const timeout = setTimeout(() => {
  child.kill('SIGTERM');
  console.log('Process timeout');
}, 30000);

child.on('close', () => clearTimeout(timeout));