// 1. Запуск бинарных файлов
execFile('/usr/local/bin/myapp', callback);

// 2. Скрипты с shebang
execFile('./script.sh', callback);

// 3. Когда shell не нужен (безопасность)
execFile('node', ['app.js'], callback); // Без shell инъекций

// 4. C/C++ программы, Go приложения и т.д.
execFile('./compiled-binary', callback);

// 5.
const { execFile } = require('child_process');

execFile('./script.sh', (error, stdout, stderr) => {
  if (error) throw error;
  console.log(stdout);
});