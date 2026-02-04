// ! Bad practice
class OrderCalculator {
  calculateTotal(price, discountType) {
    if (discountType === 'regular') {
      return price * 0.9; // 10% скидка
    } else if (discountType === 'vip') {
      return price * 0.8; // 20% скидка
    } else if (discountType === 'blackFriday') {
      return price * 0.7; // 30% скидка
    } else if (discountType === 'newYear') {
      return price * 0.75; // 25% скидка
    }

    // Что будет, если добавить новую скидку? Нужно менять этот класс!
    return price;
  }
}

// Использование
const calculatorBadPractice = new OrderCalculatorBadPractice();
console.log(calculatorBadPractice.calculateTotal(1000, 'vip')); // 800

// ! ==============================================================
// ! Good Practice

// 1. Абстракция (интерфейс) для скидок
class Discount {
  apply(price) {
    throw new Error('Метод apply должен быть реализован');
  }
}

// 2. Конкретные реализации скидок
class RegularDiscount extends Discount {
  apply(price) {
    return price * 0.9; // 10% скидка
  }
}

class VIPDiscount extends Discount {
  apply(price) {
    return price * 0.8; // 20% скидка
  }
}

class BlackFridayDiscount extends Discount {
  apply(price) {
    return price * 0.7; // 30% скидка
  }
}

// 3. Калькулятор (закрыт для модификации)
class OrderCalculator {
  calculateTotal(price, discount) {
    return discount.apply(price);
  }
}

// Использование
const calculator = new OrderCalculator();
const vipDiscount = new VIPDiscount();
console.log(calculator.calculateTotal(1000, vipDiscount)); // 800

// 4. Легко добавить НОВУЮ скидку БЕЗ изменения существующего кода
class NewYearDiscount extends Discount {
  apply(price) {
    return price * 0.75; // 25% скидка
  }
}

const newYearDiscount = new NewYearDiscount();
console.log(calculator.calculateTotal(1000, newYearDiscount)); // 750