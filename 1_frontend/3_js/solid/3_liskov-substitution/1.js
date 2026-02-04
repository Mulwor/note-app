class Rectangle {
  setWidth(w) { this.width = w; }
  setHeight(h) { this.height = h; }
  area() { return this.width * this.height; }
}

// Нарушение: изменяет контракт методов setWidth/setHeight
class Square extends Rectangle {
  setWidth(w) { 
    this.width = w; 
    this.height = w; // Неожиданное побочное действие!
  }
}

// ! А если соблюдать принцип L (барбары лискова), то
// * Вариант А: Отказ от наследования, если нет полной совместимости
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  setSize(width, height) {
    this.width = width;
    this.height = height;
  }
  
  area() { return this.width * this.height; }
}

class Square {
  constructor(side) {
    this.side = side;
  }
  
  setSide(side) {
    this.side = side;
  }
  
  area() { return this.side * this.side; }
}

// Вариант Б: Правильная иерархия через общий интерфейс/абстракцию
class Shape {
  area() {
    throw new Error('Метод area должен быть реализован');
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  area() { return this.width * this.height; }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  
  area() { return this.side * this.side; }
}

// Функция работает с абстракцией Shape
function calculateTotalArea(shapes) {
  return shapes.reduce((total, shape) => total + shape.area(), 0);
}

// Можем подставлять любые фигуры
const shapes = [
  new Rectangle(5, 10),
  new Square(7),
  new Rectangle(3, 4)
];

console.log(calculateTotalArea(shapes)); // 50 + 49 + 12 = 111