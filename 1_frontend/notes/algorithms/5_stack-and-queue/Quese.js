class Queue {
  constructor() {
    this.collection = [];
  }

  // Войти в очередь добавить элемент в конец
  enqueue(element) {
    this.collection.push(element)
  }

  // Покинуть очередь, удалить первый элемент и показать его
  dequeue() {
    return this.collection.shift()
  }

  // Получить первый элемент
  front() {
    return this.collection[0];
  }

  // Проверить пуста ли очередь
  isEmpty() {
    return this.collection.length === 0
  }

  // Получить кол-во элементов в очереди
  size() {
    return this.collection.length
  }
}

const q = new Queue();
q.enqueue(1)              
q.enqueue(2)
q.enqueue(3)                  // * [1, 2, 3]

q.front()                     // * 1

q.dequeue()                   // * Удалил 1, в очереди сейчас [2, 3]
q.front()                     // * 2

q.size()                      // * 2
q.isEmpty();                  // * false