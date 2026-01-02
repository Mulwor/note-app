// ! ============ Простой вывод текста ===============
process.stdout.write('Привет, мир!\n');

// ! ========== Вывод с форматированием ==============
const name = 'Анна';
const age = 25;
process.stdout.write(`Имя: ${name}, Возраст: ${age}\n`);
process.stdout.write('Результат: ' + (10 + 5) + '\n');

// ! ========== Вопрос-ответ в консоль ================
process.stdout.write('Как вас зовут? ');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Привет, ${name}!\n`);
  process.exit();
});

// ! ================== Вывод цветов ==================
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

process.stdout.write(colors.red + 'Красный текст\n' + colors.reset);
process.stdout.write(colors.green + 'Зеленый текст\n' + colors.reset);
process.stdout.write(colors.yellow + 'Желтый текст\n' + colors.reset);