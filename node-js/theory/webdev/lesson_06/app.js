// В node-js есть 4 основных типа потоков - readable (читающий), 
// writable(пишущий), duplex (когда происходит и чтения и запись), 
// transform (преобразующий - аналогичный duplex, но позволяет менять
// читаемая и записываемые данные) 

const fs = require('fs')

// ! ===================== Создаем читающий поток ==================
const readStream = fs.createReadStream('./docs/text.txt');

readStream.on('data', (chunk) => console.log(chunk.toString()))

// ! =============== Создаем пишущий поток (копию файла) ===========
const writeStream = fs.createWriteStream('./docs/nex-text.txt')
// readStream.on('data', (chunk) => {
//   writeStream.write('Разделяем буферы')
//   writeStream.write(chunk)
// })

// Копию можно создать еще так: readStream.pipe(writeStream);

// ! ===== Создаем duplex (когда происходит и чтения и запись) =====

// Если в момент чтения данных происходит ошибка, то с помощью метод
// destroy будем уничтожать читающий поток
const handleError = () => {
  console.log("Error");
  readStream.destroy();
  writeStream.end("Finished with error")
}

// Почему два handleError - причина в том что если при записи и чтении 
// произойдет ошибка мы об этом узнаем
// readStream.on('error', handleError).pipe(writeStream).on('error', handleError);

// ! ===== Создаем transform (передаваемые данные будем изменять) =====
// ? Модуль сжатия
const zlib = require('zlib')
const compressStream = zlib.createGzip("")

const handleErrorForCompression = () => {
  console.log("Error");
  readStream.destroy();
  writeStream.end("Finished with error")
}

readStream
  .on('error', handleErrorForCompression)
  .pipe(compressStream)
  .pipe(writeStream)
  .on('error', handleErrorForCompression);