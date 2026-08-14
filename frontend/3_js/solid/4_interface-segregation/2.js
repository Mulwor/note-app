// ТОЛСТЫЙ интерфейс
class MultiFunctionPrinter {
  print() { /* ... */ }
  scan() { /* ... */ }
  fax() { /* ... */ }
}

// Старый принтер не умеет сканировать и отправлять факсы!
class OldPrinter extends MultiFunctionPrinter {
  print() { console.log('Печатаю'); }
  scan() { throw new Error('Не умею!'); } // Проблема!
  fax() { throw new Error('Не умею!'); } // Проблема!
}

// Клиент
function workWithPrinter(printer) {
  printer.print(); // ОК
  // printer.scan(); // Ошибка! Но метод есть в интерфейсе
}

// ! ============================================================
// МАЛЕНЬКИЕ интерфейсы
class Printer { print() { throw new Error('Реализуйте меня'); }}
class Scanner { scan() { throw new Error('Реализуйте меня'); }}

// Класс реализует ТОЛЬКО то, что умеет
class SimplePrinter extends Printer { print() { console.log('Печатаю'); }}

class AllInOneMachine extends Printer {
  scan() { console.log('Сканирую'); }
  print() { console.log('Печатаю на МФУ'); }
}

// Клиенты зависят от минимального интерфейса
function printDocument(printer) {
  printer.print(); // Требуется ТОЛЬКО print()
}

const simple = new SimplePrinter();
const mfu = new AllInOneMachine();

printDocument(simple); // ОК
printDocument(mfu); // ОК
// mfu.scan(); // Тоже ОК, но отдельно