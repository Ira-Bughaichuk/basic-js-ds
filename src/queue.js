const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  getUnderlyingList() {
    let current = this.front;
    const underlyingList = [];

    while (current) {
      underlyingList.push({
        value: current.value,
        next: current.next ? { ...current.next } : null,
      });

      current = current.next;
    }

    return underlyingList.length > 0 ? underlyingList[0] : null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (!this.front) {
      return null; // Queue is empty
    }

    const dequeuedValue = this.front.value;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null; // Queue is now empty
    }

    return dequeuedValue;
  }
}

module.exports = {
  Queue
};
