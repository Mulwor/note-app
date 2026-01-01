const http = require('http');         // ? Создаем серверный роутинг
const fs = require('fs');             // ? Нужен для работы с файлами которые будем возвращать в браузер
const path = require('path');         // ? Нужен для формирования корректного пути

const PORT = 3000; 

const server = http.createServer((request, response) => {
  console.log('Server request');

  response.setHeader('Content-type', 'text/html');

  const createPath = (page) => path.resolve(__dirname, 'views-for-routing', `${page}.html`)

  let basePath = "";

  switch(request.url) {
    case '/' : case "/home": case '/index.html':
      basePath = createPath('index');
      response.statusCode = 200;
      break;
    case '/about-us': 
      // Доп-информация которая мы передаем в ответе для того, чтобы дать пояснения
      // что редирект контролируемый. То есть когда пользователь хотел направится на 
      // старый домен то мы его направляем в новый
      response.statusCode = 301;
      response.setHeader('Location', '/contacts')
      response.end()
      break;
    case '/contacts':
      basePath = createPath('contacts');
      response.statusCode = 200;
      break;
    default:
      basePath = createPath('error');
      response.statusCode = 404;
      break;
  }

  fs.readFile(basePath, (err, data) => {
      if (err) {
        console.log(err);
        response.statusCode = 500;
        // ? Если работаем с запросами и ответами, то всегда нужно завершать их
        // ? Чтобы вернуть контроль браузеру
        response.end();
      } else {
        response.write(data);
        response.end()
      }
    })
  }
)

server.listen(PORT, 'localhost', (error) => {
  error 
    ? console.log(error)
    : console.log(`Listening porn ${PORT}`)
})