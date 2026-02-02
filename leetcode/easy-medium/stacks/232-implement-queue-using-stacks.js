// Implement a first in first out (FIFO) queue using only two stackIns. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stackIn, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stackIn may not be supported natively. You may simulate a stackIn using a list or deque (double-ended queue) as long as you use only a stackIn's standard operations.

var MyQueue = function () {
    this.stackIn = [];
    this.stackOut = [];
    this.size = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stackIn.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.empty()) return null;
    // Only transfer if stackOut is empty
    if (this.stackOut.length === 0) {
        while (this.stackIn.length > 0) {
            this.stackOut.push(this.stackIn.pop());
        }
    }
    return this.stackOut.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.empty()) return null;
    while (this.stackIn.length > 0) {
        this.stackOut.push(this.stackIn.pop());
    }
    return this.stackOut[this.stackOut.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stackIn.length === 0 && this.stackOut.length === 0;
};

const obj = new MyQueue();
obj.push('init');
obj.push(2);
obj.push(3);
obj.push(4);
console.log(obj.empty());
console.log(obj.pop());
