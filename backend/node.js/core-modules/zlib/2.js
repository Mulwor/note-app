const zlib = require('zlib');
const util = require('util');

// Преобразуем асинхронные методы в Promise для удобства (опционально)
const deflatePromise = util.promisify(zlib.deflate);
const inflatePromise = util.promisify(zlib.inflate);

async function example1() {
    const originalData = 'Это очень важные данные, которые нужно сжать. '.repeat(50);
    console.log('Исходный размер:', originalData.length, 'байт');

    // 1. Сжимаем данные в формат Deflate
    const compressedBuffer = await deflatePromise(originalData);
    console.log('Размер после сжатия (deflate):', compressedBuffer.length, 'байт');

    // 2. Распаковываем обратно
    const decompressedBuffer = await inflatePromise(compressedBuffer);
    const decompressedData = decompressedBuffer.toString();
    console.log('Размер после распаковки:', decompressedData.length, 'байт');
    console.log('Данные корректны?', originalData === decompressedData);
}

example1().catch(console.error);