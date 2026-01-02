// ! Разбирает путь на составные части: 
const parsed = path.parse('/home/user/projects/app/src/index.js');
console.log(parsed);
// {
//   root: '/',
//   dir: '/home/user/projects/app/src',
//   base: 'index.js',
//   name: 'index',
//   ext: '.js'
// }

// * =============================================================

function analyzeFilePath(filePath) {
  const parsed = path.parse(filePath);
    
  console.log('Анализ пути:', filePath);
  console.log('Корневая директория:', parsed.root);
  console.log('Директория файла:', parsed.dir);
  console.log('Имя файла с расширением:', parsed.base);
  console.log('Имя файла без расширения:', parsed.name);
  console.log('Расширение файла:', parsed.ext);
    
  return parsed;
}

// Пример использования
analyzeFilePath('/var/www/html/index.html');
// root: '/'
// dir: '/var/www/html'
// base: 'index.html'
// name: 'index'
// ext: '.html'