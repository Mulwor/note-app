// ? Реализовать структуру данных MaxStack, в которой есть методы: 

// ? 1. pop() - удаляет и возвращает последний добавленный элемент 
// ? за O(1), кидает исключение или возвращает ошибку, если стек
// ? пустой;

// ? 2. push(value) - добавляет элемент в стек за O(1);

// ? 3. max() - возвращает макимальное значение среди всех элементов стека
// ? за O(1), кидает исключение или возвращает ошибку, если стек пустой

stack.push(2);                // max = 2, stack = [2]
stack.push(1);                // max = 2, stack = [2, 1]
stack.push(3);                // max = 3, stack = [2, 1, 3]
stack.push(3);                // max = 3, stack = [2, 1, 3, 3]
stack.pop();                  // 3; max = 3, stack = [2, 1, 3]
stack.pop();                  // 3; max = 2, stack = [2, 1]

// =======================================================================


class MaxStack {
  constructor() {
    this.stack = []; // основной стек для хранения значений
    this.maxStack = []; // стек для хранения текущих максимумов
  }

  // Добавляет элемент в стек
  push(value) {
    this.stack.push(value);
    
    // Если maxStack пустой или новый элемент >= текущего максимума
    if (this.maxStack.length === 0 || value >= this.max()) {
      this.maxStack.push(value);
    }
  }

  // Удаляет и возвращает последний добавленный элемент
  pop() {
    if (this.stack.length === 0) {
      throw new Error("Stack is empty");
    }
    
    const value = this.stack.pop();
    
    // Если удаляемый элемент равен текущему максимуму, удаляем его из maxStack
    if (value === this.max()) {
      this.maxStack.pop();
    }
    
    return value;
  }

  // Возвращает максимальное значение в стеке
  max() {
    if (this.maxStack.length === 0) {
      throw new Error("Stack is empty");
    }
    
    return this.maxStack[this.maxStack.length - 1];
  }

  // Дополнительные методы для удобства тестирования
  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

// Пример использования из условия задачи
const stack = new MaxStack();
stack.push(2);                // max = 2, stack = [2]
console.log(stack.max());     // 2

stack.push(1);                // max = 2, stack = [2, 1]
console.log(stack.max());     // 2

stack.push(3);                // max = 3, stack = [2, 1, 3]
console.log(stack.max());     // 3

stack.push(3);                // max = 3, stack = [2, 1, 3, 3]
console.log(stack.max());     // 3

console.log(stack.pop());     // 3; max = 3, stack = [2, 1, 3]
console.log(stack.max());     // 3

console.log(stack.pop());     // 3; max = 2, stack = [2, 1]
console.log(stack.max());     // 2
