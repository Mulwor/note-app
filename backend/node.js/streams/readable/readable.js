const { createServer } = require("http");
const PORT = 3000;

const server = createServer((request, response) => {
  let body = ""; 

  // Подписываемся на readable, когда вылетает данное событие когда стрим говорит нам, что нужно прочитать. У меня есть данные приди и забери
  request.on('readable', () => {
    let chunk;
    // req.read() - берем и вызываем метод read() - он возвращает нам либо наши данные либо null (возвращает в том случае когда достигнут конец нашего источника данных в нашем случае когда body будет прочитано до конца либо когда данные не готовы - когда мы забираем быстрее чем они помещаются в наш буфер)
    // Пока результат не является наллом мы записываем значения
    while ((chunk = req.read()) !== null) {
        body += chunk.toString();
    }
  });

  request.on('end', () => {/* Тоже самое что и в первом примере */})
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})