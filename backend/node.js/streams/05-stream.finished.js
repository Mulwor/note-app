const { finished } = require('stream');
const { createServer } = require("http");
const PORT = 3000;

const server = createServer((request, response) => {
  let body = ""; 

  request.on('data', (chunk) => {
    body += chunk.toString();
  });

  request.on('end', () => {
    const parsedBody = JSON.parse(body);
    console.log('Parsed body', parsedBody);

    const propsCount = Object.keys(parsedBody).length;
    console.log("Props count", propsCount);

    response
      .writeHead(200, {"content-type": "text/plain"})
      .end(`Body from request has been successfully accepted and parsed. It has ${propsCount}`)
  })

  // Есть функция, которая достается из модуля stream, принимает в себя стрим
  // окончания которого она принимается и после этого у нас есть коллбек если есть
  // ошибка, то мы что-то можем сделать, а если нет то вытащим Success
  finished(response, (err) => {
    if (err) {
        process.stderr.write('FAIL');
    } else {
        process.stdout.write("SUCCESS")
    }
  })
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})