
function solution(input) {
  const [N, ...rest] = input.split("\n");
  const tree = rest.map((el) => el.split(" "));
  const binaryTree = new BinaryTree();
  const result = [];

  for (let [parent, left, right] of tree) {
    const paerntNode = parent;
    const leftChildNode = left !== "." ? left : null;
    const rightChildNode = right !== "." ? right : null;
    binaryTree.insert(paerntNode, leftChildNode, rightChildNode);
  }

  result.push(binaryTree.preOrder().join(""));
  result.push(binaryTree.inOrder().join(""));
  result.push(binaryTree.postOrder().join(""));

  return result.join("\n");
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value, leftValue, rightValue) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    }
    if (!leftValue && !rightValue) return;
    const paerntNode = this.findNode(value);
    if (leftValue) {
      const leftChildNode = new Node(leftValue);
      paerntNode.left = leftChildNode;
    }
    if (rightValue) {
      const rightChildNode = new Node(rightValue);
      paerntNode.right = rightChildNode;
    }
  }

  findNode(value, node = this.root) {
    if (node === null) return;
    if (node.value === value) {
      return node;
    }
    const leftNode = this.findNode(value, node.left);
    const rightNode = this.findNode(value, node.right);
    return leftNode ? leftNode : rightNode;
  }

  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }
  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }
  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));
