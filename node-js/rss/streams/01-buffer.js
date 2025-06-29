const { Buffer } = require('buffer');

const buffer = Buffer.from("Hello world!");

for (const chunk of buffer) {
  // 72 101 108 108 111 33 => Hello 
  // 119 111 114 108 100 33 => world! 
  // console.log(chunk.toString())
}

// ? Можно конкатировать с помощью буфера
const buffer1 = Buffer.from("Hello");
const buffer2 = Buffer.from(' ');
const buffer3 = Buffer.from("world!")

const complexBuffer = Buffer.concat([buffer1, buffer2, buffer3])
console.log(complexBuffer.toString())