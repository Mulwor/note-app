const hash = crypto.createHash('sha256');
hash.update('test data');

// Различные форматы вывода
const hex = hash.digest('hex');        // '1e...' 64 hex символа для sha256
const base64 = hash.digest('base64');  // 'Hu...' 44 base64 символа
const base64url = hash.digest('base64url'); // URL-safe base64
const latin1 = hash.digest('latin1');  // Бинарная строка
const buffer = hash.digest();          // Buffer объект (без аргументов)
const binary = hash.digest('binary');  // Устаревший алиас для 'latin1'

// После digest() объект нельзя использовать
hash.update('more data'); // ОШИБКА: Digest already called

// Проверка длины хешей
const md5 = crypto.createHash('md5').update('test').digest('hex');
console.log(md5.length); // 32 символа (128 бит)

const sha256 = crypto.createHash('sha256').update('test').digest('hex');
console.log(sha256.length); // 64 символа (256 бит)

const sha512 = crypto.createHash('sha512').update('test').digest('hex');
console.log(sha512.length); // 128 символов (512 бит)