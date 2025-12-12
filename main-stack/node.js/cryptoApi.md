### Crypto API - Шифрование 

Node.js Crypto API - это встроенный модуль для криптографических операций, предоставляющий набор функций для шифрования, дешифрования, хеширования, подписи, генерации ключей и других криптографических задач.

```js
const crypto = require('crypto');

const hash = crypto.createHash('sha256');
hash.update('данные для хеширования');
console.log(hash.digest('hex'));
```