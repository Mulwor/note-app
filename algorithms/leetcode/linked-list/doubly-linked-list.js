class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // * Добавляет в конец двусвязного списка значение
  push(value) {
    var newNode = new Node(value);

    // ? Если списка нет, то добавляется первый узел в head и tail
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // ? Текущий хвост указывает на новый узел
      this.tail.next = newNode;
      // ? Новый узел знает, что перед ним находится текущий хвост.
      newNode.prev = this.tail;
      // ? Новый узел становится новым хвостом списка
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // * Удаляет последний элемент из списка и возвращает его
  pop() {
    // ? Проверка на пустой список
    if (!this.head) return undefined

    // ? Устанавливает переменную на последний узел списка
    let poppedNode = this.tail;

    // ? Удаление узла в случае, если в списке один элемент
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // ? Указатель tail перемещается на предыдущий узел (poppedNode.prev), 
      // ? то есть на предпоследний элемент в списке. 
      this.tail = poppedNode.prev;
      // ? У нового последнего узла (теперь это this.tail) поле next
      // ? устанавливается в null, разрывая связь с удаляемым узлом.
      this.tail.next = null;
      // ? У удаляемого узла поле prev также обнуляется, чтобы полностью 
      // ? разорвать его связи с остальными элементами списка.
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  // * Удаляет первый элемент и возвращает его значение.
  shift() {
    if (this.length === 0) return undefined;
    
    // ? Устанавливают переменную на текущую голову
    var oldHead = this.head;
    
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // ? Если в списке больше одного элемента, то указатель head 
      // ? перемещается на следующий узел (oldHead.next), то есть 
      // ? на второй элемент в списке. 
      this.head = oldHead.next;
      // ? У нового головного узла (теперь это this.head) поле prev 
      // ? устанавливается в null, разрывая связь с удалённым узлом. 
      this.head.prev = null;
      // ? У удалённого узла поле next также обнуляется, чтобы полностью
      // ? разорвать его связи с остальными элементами списка.
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  // * Добавляет в начало элемента значение и смещает все списка направо
  unShift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // ? Текущая голова получает ссылку на новый узел в своем поле prev
      this.head.prev = newNode;
      // ? Указывает на текущую голову
      newNode.next = this.head;
      // ? Обновляется и теперь указывает на новый узел, который стал новым
      // ? головным узлом списка
      this.head = newNode;
    }

    this.length++;
    return this;
  }

    // * Находит узел по index и возвращает его
    get(index) {
      if (index < 0 || index >= this.length) return null;

      var count, current; 
      
      // ? 1. Метод выбирает, с какой стороны списка начинать поиск узла — с головы (head) или с хвоста (tail):
      // ? 2. Если индекс меньше или равен половине длины списка (this.length / 2), то поиск начинается с головы. 
      // ? В этом случае переменные count и current инициализируются соответственно нулем и головным узлом (this.head).
      if (index <= this.length / 2) {
        count = 0;
        current = this.head;
        // ? Поиск с головы:
        while (count !== index) {
          current = current.next;
          count++;
        }
      // ? 3. Если индекс больше половины длины списка, то поиск начинается с хвоста. В этом случае переменные count 
      // ? и current инициализируются длиной списка минус один (this.length - 1) и хвостовым узлом (this.tail).
      } else {
        count = this.length - 1;
        current = this.tail;
        // ? Поиск с хвоста:
        while(count !== index) {
          current = current.prev;
          count--;
        }
      }
      
      return current
    }
  
    // * Обновляет значения узла в связанном списке по заданному индексу.
    set(index, val) {
      // ? Поиск узла по индексу:
      let foundNode = this.get(index);
  
      if (foundNode != null) {
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
    // ? Вставка в конец списка
    if (index === this.length) return !!this.push(value)
    // ? Вставка в начало списка
    if (index === 0) return !!this.unShift(value)
    
    // ? Вставка в середину списка
    let newNode = new Node(value);
    let previousNode = this.get(index - 1);
    let afterNode = previousNode.next;     // ? Сохраняется ссылка на след.узел
   
    // ? Обновление ссылок узлов;
    // ? Сначала обновляется ссылка next у узла previousNode, чтобы он указывал на новый узел newNode.
    // ? Затем обновляется ссылка prev у нового узла, чтобы он указывал на узел previousNode.
    // ? Далее, ссылка next у нового узла устанавливается на узел afterNode.
    // ? Наконец, ссылка prev у узла afterNode устанавливается на новый узел newNode.
    previousNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;

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
    let removedNode = this.get(index - 1);
    // ? Переменные beforeNode и afterNode указывают на узлы, находящиеся перед и после удаляемого узла соответственно.
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    // ? Узел beforeNode теперь указывает своим свойством next на afterNode, а afterNode 
    // ? указывает своим свойством prev на beforeNode. Таким образом, удаляемый узел 
    // ? исключается из цепочки.
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return currentValue
  }
}

list = new DoubleLinkedList();
list
list.push(1)