const http = require('http');
const zlib = require('zlib');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Читаем большой HTML-файл
    const readStream = fs.createReadStream('index.html');

    // Проверяем, какой алгоритм сжатия поддерживает клиент
    const acceptEncoding = req.headers['accept-encoding'] || '';
    let zipStream;
    let encodingHeader = '';

    if (acceptEncoding.includes('br')) {
        zipStream = zlib.createBrotliCompress();
        encodingHeader = 'br';
    } else if (acceptEncoding.includes('gzip')) {
        zipStream = zlib.createGzip();
        encodingHeader = 'gzip';
    } else if (acceptEncoding.includes('deflate')) {
        zipStream = zlib.createDeflate();
        encodingHeader = 'deflate';
    }

    // Устанавливаем заголовки ответа
    res.writeHead(200, {
        'Content-Type': 'text/html',
        // Если нашли подходящий алгоритм — сообщаем клиенту
        ...(encodingHeader && { 'Content-Encoding': encodingHeader })
    });

    // Если клиент поддерживает сжатие — сжимаем поток, иначе отдаем как есть
    if (zipStream) {
        readStream.pipe(zipStream).pipe(res);
    } else {
        readStream.pipe(res);
    }
});

server.listen(3000, () => {
    console.log('Сервер слушает на порту 3000...');
});