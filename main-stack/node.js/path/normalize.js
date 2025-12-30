// Пользователь ввел запутанный путь
const messyPath = '/home/user/../admin/./docs//file.txt';
const cleanPath = path.normalize(messyPath);

console.log(cleanPath);
// Linux/macOS: '/home/admin/docs/file.txt'
// Windows: '\\home\\admin\\docs\\file.txt'

// Еще пример
const pathWithDots = 'src/./components/../../utils/./helpers.js';
console.log(path.normalize(pathWithDots)); // 'utils/helpers.js'

// * ==========================================================================

// ! Пример №2 => Сравнение путей
// Два пути, которые ведут к одному файлу
const path1 = '/project/src/utils/../components/Button.js';
const path2 = '/project/src//components/./Button.js';

const normalized1 = path.normalize(path1);
const normalized2 = path.normalize(path2);

console.log('path1:', normalized1); // '/project/src/components/Button.js'
console.log('path2:', normalized2); // '/project/src/components/Button.js'
console.log('Равны ли пути?', normalized1 === normalized2); // true


// * ==========================================================================

// ! Пример №2 => Работа с конфигурационными файлами
// Конфигурация сервера с путями
const config = {
    staticFiles: './public/../static//',
    uploads: 'uploads/./temp/../',
    logs: '../logs/./app/'
};

// Нормализуем все пути в конфиге
function normalizeConfig(config) {
    const normalized = {};
    
    for (const [key, value] of Object.entries(config)) {
        if (typeof value === 'string' && value.includes('/')) {
            normalized[key] = path.normalize(value);
        } else {
            normalized[key] = value;
        }
    }
    
    return normalized;
}

const cleanConfig = normalizeConfig(config);
console.log(cleanConfig);
// {
//   staticFiles: 'static',
//   uploads: 'uploads',
//   logs: '../logs/app'
// }