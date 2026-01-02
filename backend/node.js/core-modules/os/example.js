const os = require('os');

console.log('Платформа:', os.platform());
console.log('Архитектура:', os.arch());
console.log('Пользователь:', os.userInfo().username);
console.log('Домашняя папка:', os.homedir());

console.log('Всего памяти:', (os.totalmem() / 1024 ** 3).toFixed(2), 'ГБ');
console.log('Свободно памяти:', (os.freemem() / 1024 ** 3).toFixed(2), 'ГБ');

console.log('Количество ядер CPU:', os.cpus().length);
console.log('Символ конца строки в ОС:', JSON.stringify(os.EOL));

/*
    Платформа: win32
    Архитектура: x64
    Пользователь: mulwo
    Домашняя папка: C:\Users\mulwo
    Всего памяти: 31.95 ГБ
    Свободно памяти: 19.75 ГБ
    Количество ядер CPU: 12
    Символ конца строки в ОС: "\r\n"
*/