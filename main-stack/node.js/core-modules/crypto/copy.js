// Пример 1: Использование как потока
const hashStream = crypto.createHash('sha256');

// Через stream API
hashStream.write('Hello');
hashStream.write(' ');
hashStream.write('World');
hashStream.end(); // Завершаем запись

// Чтение результата
const result = hashStream.read(); // Возвращает Buffer
console.log('Hash as buffer:', result);
console.log('Hash as hex:', result.toString('hex'));

// Пример 2: Пайпинг
const fs = require('fs');
const zlib = require('zlib');

// Цепочка: читаем файл -> сжимаем -> хешируем
fs.createReadStream('document.pdf')
  .pipe(zlib.createGzip())
  .pipe(crypto.createHash('sha256'))
  .on('data', (hash) => {
    console.log('Gzipped file hash:', hash.toString('hex'));
  });

// Пример 3: Кастомный Readable stream с хешем
const { Readable } = require('stream');

class HashingStream extends Readable {
  constructor(options) {
    super(options);
    this.hash = crypto.createHash('sha256');
  }
  
  _read(size) {
    // Генерируем какие-то данные
    const data = crypto.randomBytes(size);
    this.hash.update(data);
    
    // Передаем данные дальше
    this.push(data);
  }
  
  getHash() {
    this.push(null); // Завершаем stream
    return this.hash.digest('hex');
  }
}

const hashingStream = new HashingStream();
hashingStream.on('data', (chunk) => {
  // Обрабатываем данные...
});

hashingStream.on('end', () => {
  console.log('Final hash:', hashingStream.getHash());
});