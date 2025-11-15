const fs = require('fs');

// ? 1. Для того чтобы прочитать файл, нам необходимо исп метод асинхронной функции 
// ? readFile => readFile(путь до файла, callback срабатывает когда мы вызовем метод)
fs.readFile('./test.txt', (error, data) => {
  console.log('Buffer:', data)
  console.log('Чтения текста без кодировки', data.toString())
});

// Можно toString() не писать, а просто использовать utf8
fs.readFile('./test.txt', 'utf8', (error, data) => {
  console.log('Чтения текста с кодировкой', data)
});

// ? 2. Для того чтобы написать новый файл мы можем исп метод: fs.writeFile(путь по 
// ? которому будет создан новый файл с именем, data - данные, которые будут записаны
// ? и коллбек функция)
fs.writeFile('./test_01.txt', 'new text', () => {});

// Мы можем так скопировать данные внутри у readFile некая копия, чтобы не создавать
// с нуля
fs.readFile('./test.txt', 'utf8', (error, data) => {
  fs.writeFile('./test_02.txt', `${data} new text`, () => {})
});

// ? 3. Если нам необходимо поместить файл в папку или в дироктирую, нам необходимо исп
// ? mkdir (путь по которому будет создан новый файл с именем и коллбек);
fs.mkdir('./emptyFiles', () => {})

// ? 3.1. Происходит чтения файла, как только оно произошло
fs.readFile('./test.txt', 'utf8', (error, data) => {
  // ? 3.2. Затем запускается процесс создания папки
  fs.mkdir('./notEmptyFiles', () => {
    // ?3.3. Где читается и создается новый с названием теста
    fs.writeFile('./notEmptyFiles/test.txt', `${data} new text`, () => {})
  })
});

// ? Можно без вложенности
// fs.readFile('./test.txt', 'utf8', (error, data) => {
//   fs.mkdirSync('./notEmptyFiles', () => {});
//   fs.writeFileSync('./notEmptyFiles/test_02.txt', `${data} new text`, () => {})
// });

// ? 4. Удаления файла через метод unlink('путь до файла' и коллбек) и 
// ? дирректории (папки) через метод rmdir('путь до папки' и коллбек)
setTimeout(() => {
  // Условия для проверку существующего файла
  if (fs.existsSync('./notEmptyFiles/test.txt')) {
    fs.unlink('./notEmptyFiles/test.txt', () => {})
  }
}, 5000); 

setTimeout(() => {
  if (fs.existsSync('./notEmptyFiles')) {
    fs.rmdir('./notEmptyFiles', () => {})
  }
}, 8000); 
