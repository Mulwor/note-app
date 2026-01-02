const http = require('http');
const fs = require('fs')

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
      if (url.includes('/images')) {
        fs.readFile('./public' + url, {}, function(error, data) {
            if (error) {

            }
            res.setHeader('Content-Type', 'image/png')
            res.write(data);
        })
      } else {
        console.log('404');
        res.write('<h1>404</h1>')
      }
  }

  res.end()
}).listen(3100)