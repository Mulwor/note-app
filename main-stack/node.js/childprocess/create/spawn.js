// 1. Длинный вывод (логи, файлы)
const tail = spawn('tail', ['-f', 'app.log']);
tail.stdout.on('data', chunk => processChunk(chunk));

// 2. Интерактивные команды
const python = spawn('python', ['interactive.py']);
python.stdin.write('input data\n'); // Можно писать в stdin

// 3. Видео/аудио конвертация
const ffmpeg = spawn('ffmpeg', ['-i', 'input.mp4', 'output.avi']);

// 4. Работа с pipe (конвейеры)
const grep = spawn('grep', ['error']);
const cat = spawn('cat', ['server.log']);
cat.stdout.pipe(grep.stdin);

// 5. 
const { spawn } = require('child_process');
const ls = spawn('ls', ['-la']);

ls.stdout.on('data', (data) => console.log(`stdout: ${data}`))
ls.stderr.on('data', (data) => console.error(`stderr: ${data}`));
ls.on('close', (code) =>console.log(`child process exited with code ${code}`));