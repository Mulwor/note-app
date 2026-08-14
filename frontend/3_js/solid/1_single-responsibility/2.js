// ! Bad practice - Обработка заказа
class OrderProcessor {
  constructor(order) {
    this.order = order;
  }

  // Проверка заказа
  validate() {
    if (!this.order.items || this.order.items.length === 0) {
      throw new Error("Заказ пуст");
    }
  }

  // Расчет суммы
  calculateTotal() {
    return this.order.items.reduce((sum, item) => sum + item.price, 0);
  }

  // Обработка платежа
  processPayment() {
    console.log("Платеж обработан");
  }

  // Обновление инвентаря
  updateInventory() {
    console.log("Инвентарь обновлен");
  }

  // Отправка подтверждения
  sendConfirmationEmail() {
    console.log("Письмо отправлено");
  }
}

// ! =========================================================
// ! Good practice 
class Order {
  constructor(items) {
    this.items = items;
  }
}

// Валидация заказа
class OrderValidator {
  static validate(order) {
    if (!order.items || order.items.length === 0) {
      throw new Error("Заказ пуст");
    }
  }
}

// Расчет стоимости
class PriceCalculator {
  static calculateTotal(order) {
    return order.items.reduce((sum, item) => sum + item.price, 0);
  }
}

// Обработка платежей
class PaymentProcessor {
  process(order, amount) {
    console.log(`Платеж на сумму ${amount} обработан`);
    // Логика платежа
  }
}

// Управление инвентарем
class InventoryManager {
  update(order) {
    order.items.forEach(item => {
      console.log(`Товар ${item.name} списан со склада`);
    });
  }
}

// Уведомления
class NotificationService {
  sendOrderConfirmation(order) {
    console.log("Подтверждение заказа отправлено");
  }
}

// Использование
const order = new Order([
  { name: "Книга", price: 500 },
  { name: "Ручка", price: 50 }
]);

OrderValidator.validate(order);
const total = PriceCalculator.calculateTotal(order);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.process(order, total);

const inventoryManager = new InventoryManager();
inventoryManager.update(order);

const notificationService = new NotificationService();
notificationService.sendOrderConfirmation(order);