const fs = require('fs');

const reader = fs.createReadStream('./data/source.txt');
const writer1 = fs.createWriteStream('./data/copy1.txt');
const writer2 = fs.createWriteStream('./data/copy2.txt');

reader.pipe(writer1);

setTimeout(() => {
  console.log('Отсоединяем от writer1...');
  reader.unpipe(writer1);
  
  console.log('Подключаем к writer2...');
  reader.pipe(writer2);
}, 1000);