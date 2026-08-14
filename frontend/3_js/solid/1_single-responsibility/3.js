class TextManipulator {
  constructor(text) {
    this.text = text;
  }

  toUpperCase() {
    return this.text.toUpperCase();
  }

  toLowerCase() {
    return this.text.toLowerCase();
  }

  capitalize() {
    return this.text.charAt(0).toUpperCase() + this.text.slice(1);
  }

  isValidationEmpty() {
    return this.text.trim() === '';
  }

  saveToFile(filename) {
    console.log(`Текст сохранен в файл ${filename}`);
  }

  print() {
    console.log(`Печать текста: ${this.text}`);
  }
}

// !==============================================================
class Text {
  constructor(content) {
    this.content = content;
  }
}

class TextFormatter {
  static toUpperCase(text) {
    return text.content.toUpperCase();
  }

  static toLowerCase(text) {
    return text.content.toLowerCase();
  }

  static capitalize(text) {
    return text.content.charAt(0).toUpperCase() + text.content.slice(1);
  }
}

class TextValidator {
  static isEmpty(text) {
    return text.content.trim() === '';
  }

  static isTooLong(text, maxLength) {
    return text.content.length > maxLength;
  }
}

class FileManager {
  saveToFile(text, filename) {
    console.log(`Текст сохранен в файл ${filename}`);
  }
}

class Printer {
  print(text) {
    console.log(`Печать текста: ${text.content}`);
  }
}

const text = new Text("Hello World");

console.log(TextFormatter.toUpperCase(text)); // HELLO WORLD
console.log(TextFormatter.capitalize(text)); // Hello world

if (!TextValidator.isEmpty(text)) {
  const printer = new Printer();
  printer.print(text);
}