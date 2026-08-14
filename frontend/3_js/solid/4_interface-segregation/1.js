// ! ПЛОХО: Один интерфейс на все случаи жизни
class MultiFunctionDevice {
  print(document) { throw new Error('Метод print должен быть реализован')}
  scan(document) { throw new Error('Метод scan должен быть реализован')}
  fax(document) { throw new Error('Метод fax должен быть реализован')}
  photocopy(document) { throw new Error('Метод photocopy должен быть реализован')}
}

// ? Старый принтер должен реализовывать ВСЕ методы, даже те, что не поддерживает
class OldPrinter extends MultiFunctionDevice {
  print(document) { console.log(`Печатаю: ${document}`) }
  
  // Нарушении!
  scan(document) { throw new Error('Этот принтер не умеет сканировать!')}
  fax(document) { throw new Error('Этот принтер не умеет отправлять факсы!')}
  photocopy(document) { throw new Error('Нет функции фотокопирования!')}
}

// ? Клиентский код зависит от методов, которые не использует
function printReport(printer, document) {
  printer.print(document);
  // А что если кто-то вызовет printer.scan()? Будет ошибка!
}

const oldPrinter = new OldPrinter();
printReport(oldPrinter, 'Отчёт');

// ! ===============================================================================
// ! ХОРОШО: Разделяем на специализированные интерфейсы
class Printer {
  print(document) { throw new Error('Метод print должен быть реализован') }
}

class Scanner {
  scan(document) { throw new Error('Метод scan должен быть реализован') }
}

class FaxMachine {
  fax(document) { throw new Error('Метод fax должен быть реализован') }
}

class Photocopier {
  photocopy(document) { throw new Error('Метод photocopy должен быть реализован') }
}

// ? Устройства реализуют ТОЛЬКО нужные интерфейсы
class SimplePrinter extends Printer {
  print(document) { console.log(`Просто печатаю: ${document}`); }
}

class AllInOnePrinter extends Printer {
  constructor() {
    super();

    this.scanner = new ScannerImpl();
    this.fax = new FaxImpl();
  }
  
  print(document) {
    console.log(`Печатаю на МФУ: ${document}`);
  }
  
  scan(document) {
    return this.scanner.scan(document);
  }
  
  fax(document) {
    return this.fax.fax(document);
  }
}

// Вспомогательные классы для композиции
class ScannerImpl {
  scan(document) {
    console.log(`Сканирую: ${document}`);
    return `Отсканировано: ${document}`;
  }
}

class FaxImpl {
  fax(document) {
    console.log(`Отправляю факс: ${document}`);
    return true;
  }
}

// Клиенты зависят ТОЛЬКО от нужных интерфейсов
function officeWorkflow() {
  const simplePrinter = new SimplePrinter();
  const mfu = new AllInOnePrinter();
  
  // Документооборот только с печатью
  const printService = {
    printDocument(printer, doc) {
      printer.print(doc); // Требуется ТОЛЬКО метод print
    }
  };
  
  // Сканирование документов
  const scanService = {
    scanDocument(scanner, doc) {
      return scanner.scan(doc); // Требуется ТОЛЬКО метод scan
    }
  };
  
  printService.printDocument(simplePrinter, 'Договор');
  printService.printDocument(mfu, 'Отчёт');
  
  // scanService.scanDocument(simplePrinter, 'Чек'); // Ошибка! У simplePrinter нет scan
  scanService.scanDocument(mfu, 'Паспорт'); // OK
}

officeWorkflow();