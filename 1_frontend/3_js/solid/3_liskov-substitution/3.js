class PaymentMethod {
  processPayment(amount) {
    console.log(`Обрабатываю оплату на сумму ${amount} руб.`);
  }
}

class CreditCardPayment extends PaymentMethod {
  processPayment(amount) {
    console.log(`Оплата картой на сумму ${amount} руб.`);
  }
}

class PayPalPayment extends PaymentMethod {
  processPayment(amount) {
    console.log(`Оплата через PayPal на сумму ${amount} руб.`);
  }
}

class CryptoPayment extends PaymentMethod {
  processPayment(amount) {
    console.log(`Оплата криптовалютой на сумму ${amount} руб.`);
  }
}

function checkout(paymentMethod, amount) {
  paymentMethod.processPayment(amount);
}

// Все три способа оплаты можно подставить вместо базового класса
const card = new CreditCardPayment();
const paypal = new PayPalPayment();
const crypto = new CryptoPayment();

checkout(card, 1000);    // "Оплата картой на сумму 1000 руб."
checkout(paypal, 2500);  // "Оплата через PayPal на сумму 2500 руб."
checkout(crypto, 500);   // "Оплата криптовалютой на сумму 500 руб."

// Ничего не ломается! Каждый дочерний класс:
// 1. Выполняет основную задачу (обработка оплаты)
// 2. Может добавлять свою специфичную логику
// 3. Полностью заменяет родительский класс