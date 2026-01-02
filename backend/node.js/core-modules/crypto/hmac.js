const crypto = require('crypto');

// Сервер отправляет данные
function sendData(data, secretKey) {
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(data);
    const signature = hmac.digest('hex');
    
    return { data, signature };
}

// Клиент принимает и проверяет
function verifyData(received, secretKey) {
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(received.data);
    const expectedSignature = hmac.digest('hex');
    
    return received.signature === expectedSignature;
}

// Использование
const secret = 'my-secret';
const payload = sendData('Hello World', secret);
console.log(verifyData(payload, secret)); // true