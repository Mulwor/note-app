const fs = require('fs');

// Читает из /01-buffer.js
const rs = fs.createReadStream('./01-buffer.js');
// И пишет в другой файл
const ws = fs.createWriteStream('new_file.txt');

ws.on('close', () => console.log("Writable stream has been closed"));
ws.on('finish', () => console.log("Writable streams has been finished"));
ws.on('pipe', () => console.log("Piped to readable stream"));
ws.on('unpipe', () => console.log("Unpiped from readable stream"));

/*
  Piped to readable stream
  Writable streams has been finished
  Unpipe from readable stream
  Writable stream has been closed
*/

ws.on('error', (err) => console.log(`Error occurred: ${err}`));
ws.destroy(new Error("Ooops"))

rs.pipe(ws);

// 32 минута - https://www.youtube.com/watch?v=o1WPOQgPT3Y