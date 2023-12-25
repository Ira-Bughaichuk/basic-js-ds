const { NotImplementedError } = require('../extensions/index.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this._addRecursive(this.rootNode, data);
  }

  _addRecursive(node, data) {
    if (!node) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this._addRecursive(node.left, data);
    } else if (data > node.data) {
      node.right = this._addRecursive(node.right, data);
    }

    return node;
  }

  has(data) {
    return this._hasRecursive(this.rootNode, data);
  }

  _hasRecursive(node, data) {
    if (!node) {
      return false;
    }

    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this._hasRecursive(node.left, data);
    } else {
      return this._hasRecursive(node.right, data);
    }
  }

  find(data) {
    return this._findRecursive(this.rootNode, data);
  }

  _findRecursive(node, data) {
    if (!node) {
      return null;
    }

    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._findRecursive(node.left, data);
    } else {
      return this._findRecursive(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this._removeRecursive(this.rootNode, data);
  }

  _removeRecursive(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this._removeRecursive(node.left, data);
    } else if (data > node.data) {
      node.right = this._removeRecursive(node.right, data);
    } else {
      if (!node.left && !node.right) {
        return null; // Node with no children
      } else if (!node.left) {
        return node.right; // Node with one child (right)
      } else if (!node.right) {
        return node.left; // Node with one child (left)
      }

      // Node with two children
      node.data = this._findMin(node.right).data;
      node.right = this._removeRecursive(node.right, node.data);
    }

    return node;
  }

  _findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  min() {
    const minNode = this._findMin(this.rootNode);
    return minNode ? minNode.data : null;
  }

  max() {
    const maxNode = this._findMax(this.rootNode);
    return maxNode ? maxNode.data : null;
  }

  _findMax(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }
}


module.exports = {
  BinarySearchTree
};