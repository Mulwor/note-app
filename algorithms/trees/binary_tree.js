class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);

    if(!this.root) {
      this.root = newNode;
      return this;
    } 

    while(currentNode) {
      // Если текущее наше значение меньше чем currentNode
      if(newNode.value < currentNode.value) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          return;
        }

        currentNode = currentNode.left
      } else {
        if(!currentNode.right) {
          currentNode.right = newNode;
          return;
        }

        currentNode = currentNode.right
      }
    }
  }

  // Обход дерево - №1 ===> Breadth first search (обход в ширину) - идем в ширину
  traverseBFC() {

  }


  // Обход дерево в глубину ===> Depth first search - идем по цепочки 
  // внизу до самого конца. У него есть 3 возможных вариаций: 
  // 1. In order (в начале спускаемся по левому краю - делаем что-то потом
  // идем по правому краю и делаем что-то),
  // 2. Post order (идем в начале вправо, потом влево и только потом вызываем 
  // какой-то callback), 
  // 3. Pre-order (вызываем callback, идем в самое левое, затем в самый правый
  // край дерева)
  traverseDFC() {

  }
}

const tree = new BinaryTree();