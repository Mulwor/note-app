const crypto = require('crypto');

// === 1. ШИФРОВАНИЕ (createCipheriv) ===
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // Секретный ключ (256 бит)
const iv = crypto.randomBytes(16);  // Вектор инициализации

// Зашифровываем
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Секретное сообщение', 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Зашифровано:', encrypted);

// === 2. РАСШИФРОВКА (createDecipheriv) ===
// Используем ТОТ ЖЕ алгоритм, ключ и IV
const decipher = crypto.createDecipheriv(algorithm, key, iv);

// Расшифровываем
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Расшифровано:', decrypted);
// Вывод: "Секретное сообщение"