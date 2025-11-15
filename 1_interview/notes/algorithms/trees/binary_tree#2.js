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

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // ? O(log n)
  add(value) {      
    let newNode = new Node(value);

    if(this.root === null) {
      this.root = newNode;
      return this;
    } 

    let current = this.root

    while(true) {
      if (value === current) return undefined;
      // Если текущее наше значение меньше чем currentNode
      if(value < current.value) {
        if(current.left === null) {
          current.left = newNode;
          return this;
        }

        current = current.left
      } else {
        if(!current.right) {
          current.right = newNode;
          return;
        }

        current = current.right
      }
    }
  }

  // ? O(log n)
  find(value) {
    if (this.root === null) return undefined;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if(value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if (!found) return undefined
    return current;
  }
  
  contains(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if(value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }
    return false;
  }

  // Происходит поиск по ширине бинарного дерево
  breathFirstSearch() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(node)

    while(queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // Происходит поиск по глубине бинарного дерево c конца в начало
  depthFirstSearchPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);

    return data;
  }

  // Происходит поиск по глубине бинарного дерево c начало до конца
  depthFirstSearchPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);

    return data;
  }

  // Происходит поиск по глубине бинарного дерево по порядку возрастания
  depthFirstSearchInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      // + node.left && traverse(node.left)
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }
}

const tree = new BinaryTree();
tree.add(1);
tree.add(2);
tree.add(5);
tree.contains(2)
tree.breathFirstSearch()