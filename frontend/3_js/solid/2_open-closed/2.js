// ! Bad practice
class ReportGenerator {
  generate(reportType, data) {
    if (reportType === 'pdf') {
      return this.generatePDF(data);
    } else if (reportType === 'excel') {
      return this.generateExcel(data);
    } else if (reportType === 'html') {
      return this.generateHTML(data);
    } else if (reportType === 'json') {
      return this.generateJSON(data);
    }
    throw new Error('Неизвестный тип отчета');
  }

  generatePDF(data) { /* ... */ }
  generateExcel(data) { /* ... */ }
  generateHTML(data) { /* ... */ }
  generateJSON(data) { /* ... */ }
}

// ! ==============================================
// ! Good practice
class Report {
  generate(data) {
    throw new Error('Метод generate должен быть реализован');
  }
}

// 2. Конкретные реализации
class PDFReport extends Report {
  generate(data) {
    console.log('Генерация PDF отчета');
    return `PDF: ${data}`;
  }
}

class ExcelReport extends Report {
  generate(data) {
    console.log('Генерация Excel отчета');
    return `Excel: ${data}`;
  }
}

class HTMLReport extends Report {
  generate(data) {
    console.log('Генерация HTML отчета');
    return `<html>${data}</html>`;
  }
}

// 3. Генератор (не меняется при добавлении новых форматов)
class ReportGenerator {
  generate(report, data) {
    return report.generate(data);
  }
}

// Использование
const generator = new ReportGenerator();
const pdfReport = new PDFReport();
console.log(generator.generate(pdfReport, 'Данные'));

// 4. Легко добавить новый формат
class JSONReport extends Report {
  generate(data) {
    console.log('Генерация JSON отчета');
    return JSON.stringify({ report: data });
  }
}

const jsonReport = new JSONReport();
console.log(generator.generate(jsonReport, 'Новые данные'));