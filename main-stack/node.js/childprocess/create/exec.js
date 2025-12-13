const { exec } = require('child_process');


// 1. Команды с небольшим выводом (<200KB)
exec('ls -la', callback);
exec('git status', callback);

// 2. Команды, которые быстро завершаются
exec('echo "Hello"', callback);

// 3. Когда нужен простой синхронный стиль
exec('pwd', (error, stdout) => {
  console.log(`Текущая директория: ${stdout}`);
});

// 4.
exec('find . -type f | wc -l', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files: ${stdout}`);
});

