class Node {
  constructor(val) {
    this.val = val;                                 // ? Piece of data 
    this.next = null;                               // ? Reference to next node
  }
}

// var first = new Node("Hi");
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you?")

class SingleLinkedList {
  constructor() {
    this.head = null;         // ? Указывает на первый и последний узел списка.
    this.tail = null;     
    this.length = 0;
  }

  // * Добавляет в конец списка значение
  push(value) {
    let newNode = new Node(value);

    // ? Если списка нет, то добавляется первый узел в head и tail
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // ? Текущий хвост указывает на новый узел
      this.tail.next = newNode
      // ? Новый узел становится новым хвостом списка
      this.tail = newNode
    }

    this.length++
    return this;

    /*
      *    head: {
      *      val: 'Hello', 
      *      next: {
      *        val: 'Goodbye', 
      *        next:  {
      *          val: 1, 
      *          next: null
      *        }
      *      }
      *    }
      *    length: 2
      *    tail: {
      *      val: 1,
      *      next: null
      *    }
    */
  }

  // * Удаляет последний элемент из списка
  pop() {
    // ? Проверка на пустой список
    if (!this.head) return undefined

    // ? Устанавливает переменные на первый узел списка
    let current = this.head;
    let newTail = current;

    // ? Этот цикл проходит по всему списку, пока не дойдёт до последнего
    // ? узла (того, у которого свойство next равно null).
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // ? Обновляет хвост списка - после выхода из цикла this.tail устанавливается
    // ? на newTail; а next последнего узла (который теперь стал новым хвостом)
    // ? устанавливается на null, чтобы обозначить конец списка.
    this.tail = newTail;
    this.tail.next = null;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }

    return current;
  }

  // * Удаляет первый элемент и возвращает его значение.
  shift() {
    if (!this.head) return undefined

    // ? Сохраняет текущий элемент head
    let currentHead = this.head;
    // ? Голова списка обновляется, указывая на следующий 
    // ? элемент после текущей головы. Таким образом, следующий элемент
    // ? становится новой головой списка.
    this.head = currentHead.next
    
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    
    return currentHead;
  }

  // * Добавляет в начало элемента значение и смещает все списка направо
  unShift(value) {
    let newNode = new Node(value);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // ? Указывает на старую голову списка (что было первым элементом 
      // ? до добавления нового узла)
      newNode.next = this.head;
      // ? Затем  обновляем голову списка, чтобы она указывала на новый узел
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // * Находит узел по index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    
    // ? Счетчик, который отслеживает текущую позицию в списке.
    let counter = 0;
    // ? Ссылка на текущий узел списка, который указывает на начало списка
    let current = this.head;
    
    while (counter !== index) {
      current = current.next
      counter++
    }
    
    return current
  }

  // * Обновляет значения узла в связанном списке по заданному индексу.
  set(index, val) {
    // ? Поиск узла по индексу:
    let foundNode = this.get(index);

    if (foundNode) {
      // ? Если узел найден, его значение (val) обновляется на новое 
      // ? значение, переданное в методе через параметр value.
      foundNode.val = val;
      return true;
    } 

    return false;
  }

  // * Метод insert предназначен для вставки нового узла в связанный список на 
  // * определённую позицию, указанную индексом index
  insert(index, value) {
    // ? Проверка, находится ли указанный index в пределах допустимого 
    // ? диапазона (от 0 до this.length). 
    if (index < 0 || index > this.length) return false;
    // ? Если индекс равен длине списка, то новый элемент добавляется в конец 
    // ? списка с помощью метода push(value)
    if (index === this.length) return !!this.push(value)
    // ? Если индекс равен 0, новый элемент добавляется в начало списка
    // ? с помощью метода unShift(value)
    if (index === 0) return !!this.unShift(value)
    
    // ? Вставка в середину списка
    let newNode = new Node(value);
    let previous = this.get(index - 1);
    let temp = previous.next;     // ? Сохраняется ссылка на узел, который должен следовать за новым узлом.
    previous.next = newNode;      // ? Предшествующий узел указывает теперь на новый узел.
    newNode.next = temp;          // ? Новый узел указывает на следующий узел, который ранее следовал за previous.

    this.length++;
    return true
  }

  // * Удаляет элемент по индексу из связного списка.
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    // ? Удаление последнего элемента
    if (index === this.length - 1) return this.pop()
    // ? Удаление первого элемента
    if (index === 0) return this.shift();

    // ? Удаление элемента в середине списка:
    let previous = this.get(index - 1);
    let removed = previous.next;
    previous.next = removed.next;

    this.length--;
    return currentValue
  }

  // * Разворачивает список
  reverse() {
    // ? Первый элемент списка
    let node = this.head;
    // ? Голова и хвост списка меняются местами.
    this.head = this.tail;
    // ? Хвостом становится предыдущая голова.
    this.tail = node;  

    let previous = null;    // ? Переменная для хранения предыдущего узла. 
    for (let i = 0; i < this.length; i++) {
      let next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }

    return this;
  }
}

var list = new SingleLinkedList();
list.push("Hello")
list.push("Goodbye");
list.push(1)
list.pop()