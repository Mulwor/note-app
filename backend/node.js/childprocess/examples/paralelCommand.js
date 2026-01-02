const { exec } = require('child_process');

const commands = [
  'echo "Первая команда"',
  'sleep 2 && echo "Вторая команда"',
  'ls -la | head -5'
];

let completed = 0;

commands.forEach((cmd, index) => {
  console.log(`Запуск команды ${index + 1}: ${cmd}`);
  
  exec(cmd, (error, stdout, stderr) => {
    completed++;
    
    if (error) {
      console.error(`Ошибка в команде ${index + 1}:`, error.message);
    } else {
      console.log(`Результат команды ${index + 1}:\n${stdout}`);
    }
    
    if (completed === commands.length) {
      console.log('Все команды выполнены');
    }
  });
});