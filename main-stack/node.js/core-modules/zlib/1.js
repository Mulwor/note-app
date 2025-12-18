const zlib = require('zlib');
const fs = require('fs');

function createGzipFile() {
    // Читаем файл, сжимаем и записываем — все потоками
    const readStream = fs.createReadStream('large_log.txt'); // Большой исходный файл
    const writeStream = fs.createWriteStream('large_log.txt.gz'); // Целевой архив
    const gzipStream = zlib.createGzip(); // Создаем поток для сжатия GZIP

    // Соединяем потоки в конвейер (pipeline)
    readStream
        .pipe(gzipStream) // Данные из файла -> сжатие
        .pipe(writeStream) // Сжатые данные -> в новый файл
        .on('finish', () => {
            console.log('Файл успешно сжат в GZIP!');
        });
}

function readGzipFile() {
    // Читаем и распаковываем на лету
    const readStream = fs.createReadStream('large_log.txt.gz');
    const writeStream = fs.createWriteStream('decompressed_log.txt');
    const gunzipStream = zlib.createGunzip(); // Поток для распаковки GZIP

    readStream
        .pipe(gunzipStream) // Архив -> распаковка
        .pipe(writeStream)  // Данные -> в новый файл
        .on('finish', () => {
            console.log('Файл успешно распакован!');
        });
}

// Вызываем функции
// createGzipFile();
// readGzipFile();