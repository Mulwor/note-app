const crypto = require('crypto');

// 1. Генерируем ключ и IV (в реальности храним их безопасно)
const key = crypto.randomBytes(32); // 256 бит для AES-256
const iv = crypto.randomBytes(16);  // 128 бит для AES

// 2. Создаем шифратор
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

// 3. Шифруем данные
let encrypted = cipher.update('Секретное сообщение', 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Зашифровано:', encrypted);
// Вывод: что-то вроде "a1b2c3d4e5f67890..."

/* 
  * crypto.createCipheriv() создает объект шифратора для симметричного шифрования 
  * с использованием:

  * Алгоритма (например, AES-256-CBC) => 
    'aes-256-cbc'     // AES 256 бит, режим CBC (чаще всего)
    'aes-256-gcm'     // AES 256 бит, режим GCM (автопроверка целостности)
    'aes-128-cbc'     // AES 128 бит
    'aes-192-cbc'     // AES 192 бит
    'des-ede3-cbc'    // Triple DES (устарел)
    'chacha20-poly1305' // Современный алгоритм

  * Ключа (секретный ключ) - секрет для шифрования/расшифровки => 
    ? Длина ключа зависит от алгоритма:
    const keyAES256 = crypto.randomBytes(32); // 256 бит = 32 байта
    const keyAES128 = crypto.randomBytes(16); // 128 бит = 16 байт
    const keyAES192 = crypto.randomBytes(24); // 192 бит = 24 байта

  * IV (Initialization Vector) — вектор инициализации - делает шифрование уникальным даже при одинаковых данных => 
    const iv = crypto.randomBytes(16); // Обычно 16 байт для AES
*/

const crypto = require('crypto');

function encryptDecryptExample() {
    // === ШИФРОВАНИЕ ===
    const algorithm = 'aes-256-cbc';
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    const plaintext = 'Мои секретные данные: пароль 123';
    
    // 1. Создаем шифратор
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    
    // 2. Шифруем данные
    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    console.log('Исходный текст:', plaintext);
    console.log('Ключ (hex):', key.toString('hex'));
    console.log('IV (hex):', iv.toString('hex'));
    console.log('Зашифрованный текст:', encrypted);
    
    // === РАСШИФРОВКА ===
    // 1. Создаем дешифратор (те же algorithm, key, iv)
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    
    // 2. Расшифровываем
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    console.log('Расшифрованный текст:', decrypted);
    console.log('Совпадает?', plaintext === decrypted);
}

encryptDecryptExample();

// ! ==========================================================================

const crypto = require('crypto');
const fs = require('fs');

function encryptFile(inputFile, outputFile, password) {
    // Генерируем ключ из пароля
    const salt = crypto.randomBytes(16);
    const key = crypto.scryptSync(password, salt, 32);
    const iv = crypto.randomBytes(16);
    
    // Создаем потоки
    const input = fs.createReadStream(inputFile);
    const output = fs.createWriteStream(outputFile);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    
    // Записываем соль и IV в начало файла
    output.write(salt);
    output.write(iv);
    
    // Шифруем и пишем
    input.pipe(cipher).pipe(output);
    
    console.log('Файл зашифрован:', outputFile);
}