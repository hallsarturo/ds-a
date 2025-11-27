// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// This is the Learning JS Data Structures and Algorithms answer

class MinStack {
    stack = [];
    minStack = [];

    push(x) {
        this.stack.push(x);
        if (
            this.minStack.length === 0 ||
            x <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.push(x);
        }
    }

    pop() {
        const x = this.stack.pop();
        if (x === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top);
console.log(minStack.getMin());
