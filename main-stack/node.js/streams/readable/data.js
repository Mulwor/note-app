const { createServer } = require("http");
const PORT = 3000;

// Представим себе, что мы с клиента отправляем запрос, который содержит тело и нам
// это тело нужно прочитать и что-то с ним сделать
const server = createServer((request, response) => {
  let body = ""; 

  // Подписываемся на событие date, и здесь у нас callback, 
  // который передается чанк с данными и приводим к строке
  request.on('data', (chunk) => {
    body += chunk.toString();
  });

  // После чего мы просто отправляем на клиент сообщение, что тело
  // было успешно прочитано и мы отправляем сколько в нем было св-в
  request.on('end', () => {
    const parsedBody = JSON.parse(body);
    console.log('Parsed body', parsedBody);

    const propsCount = Object.keys(parsedBody).length;
    console.log("Props count", propsCount);

    response
      .writeHead(200, { "Content-type": "text/plain" })
      .end(`Body from request has been successfully accepted and parsed. It has ${propsCount}`)
  })
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})