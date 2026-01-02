const crypto = require('crypto');

// Генерируем 32 случайных байта (256 бит)
const randomData = crypto.randomBytes(32);
console.log(randomData);
// Вывод: <Buffer a3 4f 1b 89 d2 67 ...> (32 байта в шестнадцатеричном виде)

// Чаще используют в строковом формате
const hexString = crypto.randomBytes(32).toString('hex');
console.log(hexString);
// Вывод: "a34f1b89d267e5c91f8b2a3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8091a2b3c4d5e"
// Это 64 символа hex (2 символа на байт)

// ! ======================================================================================

// Ключевое отличие: Math.random() генерирует псевдослучайные числа для игр/симуляций, 
// а crypto.randomBytes() — настоящие случайные числа для безопасности.

// ! ======================================================================================

// Для HMAC, JWT, шифрования
const API_KEY = crypto.randomBytes(32).toString('hex');
const JWT_SECRET = crypto.randomBytes(64).toString('hex');
const ENCRYPTION_KEY = crypto.randomBytes(32); // 256-битный ключ AES

console.log('API Key:', API_KEY);
console.log('JWT Secret:', JWT_SECRET);

// ! ======================================================================================
// Генерация паролей и токенов
// Сброс пароля
const passwordResetToken = crypto.randomBytes(32).toString('hex');
// Пример: "a1b2c3d4e5f6...7890" - отправляется пользователю по email

// Токен верификации email
const emailVerifyToken = crypto.randomBytes(16).toString('hex');

// CSRF-токен для защиты форм
const csrfToken = crypto.randomBytes(32).toString('base64');