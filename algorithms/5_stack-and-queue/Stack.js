class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  // Add element to top of stack
  push(value) {
    this.storage[this.count] = value
    this.count++
  }

  pop() {
    // Если нулевой элемент то возвращаю undefined
    if(this.count === 0) return undefined

    this.count--
    const response = this.storage[this.count]
    delete this.storage[this.count]
    return response
  }

  // Вернуть верхний элемент 
  peek() {
    return this.storage[this.count - 1];
  }

  // Вернуть кол-во элементов в стеке
  size() {
    return this.count
  }
}

const stack = new Stack();

stack.push("a") 
// Stack { 
//   storage: { 0: a }, 
//   count: 1
// }
stack.push("b")   
// Stack { 
//   storage: { 0: a, 1: b }, 
//   count: 2
// }
stack.push("c")
// Stack { 
//   storage: { 0: a, 1: b, 2: c }, 
//   count: 3
// }

stack.peek()      // 'c' 
stack.size()      // 3
