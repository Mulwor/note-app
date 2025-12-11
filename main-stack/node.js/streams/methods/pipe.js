const fs = require('fs');
const { Transform } = require('stream');

// ? Создаем два потока - чтения и запись
const reader = fs.createReadStream('./data/input.txt'); 
const writer = fs.createWriteStream('./data/output.txt');

// ! ========= Берем данные из одной папки и отправляем в другой ============
// reader.pipe(writer);

// ! ================ Копирование с выводом на экран ========================
// reader.pipe(process.stdout);

// ! ======================= Замена текста ==================================
const replaceWord = new Transform({
  transform(chunk, encoding, callback) {
    let text = chunk.toString();
    text = text.replace(/hello/gi, 'ЗДРАВСТВУЙТЕ'); // меняем слово
    this.push(text);
    callback();
  }
});
// reader.pipe(replaceWord).pipe(writer);
