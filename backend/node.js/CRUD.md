- [Что такое сервер и его особенности](#serverIs);
  - [Создание сервера, модуль http и req, res](#createServer)
  - [Роутинг на сервере и передача статических методов](#routingOnServer);

<a id='serverIs'></a>
<h2 align="center">Что такое сервер и его особенности</h2>
Сервер на Node.js — это приложение, которое использует среду выполнения Node.js для обработки HTTP-запросов, обычно создаваемое с помощью встроенного модуля http, позволяя писать бэкэнд для веб-приложений, API или микросервисов, используя JavaScript, работая с запросами (request) и отправляя ответы (response).

Особенности Node.js сервера:

1\. Асинхронный и неблокирующий — обрабатывает множество соединений одновременно;

2\. Однопоточный с событийным циклом — эффективно использует ресурсы;

3\. Работает на JavaScript — единый язык для фронтенда и бэкенда


<h2 align="center">Создание сервера, модуль http и req, res</h2>
Для работы с сервером и протоколом http в Node.js используется модуль http - https://nodejs.org/api/http.html, http работает только со строками. Для того, чтобы создать сервер, используется метод: `http.createServer()` и у него есть метод `.listen(3100)`, который говорит что сервер будет прослушивать порт 3100 и все что к этому порту обращается будет направлено на сервер ноды. Если мы не напишем данный метод, то по умолчанию он будет запущен на 3000 сервере, а он очень популярный

```js
const http = require("http");
const server = http.createServer().listen(3100);
```

createServer принимает 2 параметра - request (запрос который присылает клиент, браузер, система), response (ответ, то как сервер будет отвечать)

```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Сервер работает!');
});
server.listen(3500, () => console.log('Сервер запущен на порту 3500'));
```

У request есть несколько методов, которые часто используется:
| Метод | Его назначения |
|-------------|-------------|
| `.url` | Возвращает путь и строку запроса (то, что идет после домена и порта) из URL |
| `.method` | Какой http-метод использовался | 
| `.headers` |  Содержащий все заголовки HTTP-запроса. Заголовки — это метаданные о запросе. | 
| `.httpVersion` | Версия HTTP-протокола => 1.1
| `.socket` | Сокет соединения (Информация о сетевом соединении)
| `.on('data', callback)` | Получение тела запроса (для POST/PUT) |
| `.on('end', callback)` | Завершение получения данных | 

У response есть несколько методов

| Метод | Его назначения |
|-------------|-------------|
| `.end('some-text')` | [Сервер заканчивает обработку запроса и отсылает что-то в ответ](./server/1.js) |
| `.setHeader('Content-Type', 'text/html; charset=utf-8;')` | Устанавливаем заголовок для того, чтобы отдать браузеру response. Данного метода может быть много, так как может понадобиться несколько заголовков. В данном заголовке говорится, что он будет отдавать информацию в формате text/html и его кодировка будет utf-8. Он нужен для того, чтобы заголовок адекватно работал с файлами. [Другой пример с json](./server/5.js) | 
| `.write('<h2>some-information</h2>')` | [Нужен для отсылания информации на сервер. Данный метод можно использовать много раз, он не перезатирает предыдущую написанный write. Он формируется в response и когда отдается команда `res.end()`. Он отправляется одним куском](./server/2.js) |
| `.statusCode` | Позволяет задать или узнать установленный числовой код статуса HTTP для отправляемого ответа. |
| `.statusMessage = 'some-message'` | Сообщение статуса |
| `.getHeader(name)` | Получения значения заголовка | 
| `.removeHeader(name)` | Удаление заголовка | 
| `.setTimeout(msecs, callback)` | Установка таймаута |


<a id='routingOnServer'></a>
<h2 align="center">Роутинг на сервере и передача статических методов</h2>
Роутинг - когда мы хотим поменять страницу нам необходимо дать определенные данные для каждой страницу. Пример кода снизу

```js
http.createServer(function(req, res) {
  const url = req.url;
  console.log(url);

  switch (url) {
    case '/':
      console.log('main page')
      res.write('<h1>Main</h1>')
      break;
    case '/contacts':
      console.log('contact page')
      res.write('<h1>Contact</h1>')
      break;
    // Если страница не существует
    default: 
      console.log('404')
      res.write('<h1>404</h1>')
  }

  res.end()
}).listen(3100)
```

<a id='sendHTMLFile'></a>
[Сервер отдающий HTML-файлы - находится один из примеров работы](./server/4/server-node-js-routing.js)

Рассмотрим еще варианты работы с заголовками. Вот основные методы у .setHeader:

```js
// Нужен для корректного отображения контента
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

function staticFile(res, filePath, ext) {
  res.setHeader("Content-type", mimeTypes[ext])
  fs.readFile('./public' + filePath, ( error, data ) => {
    if (error) {
      res.statusCode = 404;
      res.end();
    }
    res.end(data)
  })
}

http.createServer(function(req, res) {
    ...
    case '/contact':
      staticFile(res, '/contact.html', '.html')
      break;
    default:
      const extname = String(path.extname(url)).toLocaleLowerCase()
      if (extname in mineType) {
        staticFile(res, url, extname)
      } else {
        res.statusCode = 404;
        res.end();
      }
})
```