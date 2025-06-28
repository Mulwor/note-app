// Создаем сервер с помощью http модуля
const http = require('http');

const PORT = 3000; 

// Создаем коллбек функцию которая будет вызываться каждый раз
// когда к серверу идет какое-то обращение
// Request - хранит информацию, которую мы можем исп на нашем сервере
// Response - объект которые мы будем формировать и отправлять в браузер
const server = http.createServer((request, response) => {
  console.log('Server request');
  console.log(
    "Информация о пути:", request.url,
    "_Информация о запрашиваемом метода", request.method
  )

  // ? Помогает браузеры определить какие типы данных ему были отправлены
  // ? 1. response.setHeader('Content-Type', 'text/plan')
  // ? 1. response.write("Hello world!")

  // ? 2. response.setHeader('Content-Type', 'text/html')
  // ? 2. response.write("<h1>Hello world!</h1>")

  response.setHeader('Content-Type', 'application/json')
  const data = JSON.stringify([
    {name: "Tom", age: 18},
    {name: "and", age: 19},
    {name: "Jerry", age: 20}
  ]);

  response.end(data);
})

server.listen(PORT, 'localhost', (error) => {
  error 
    ? console.log(error)
    : console.log(`Listening porn ${PORT}`)
})