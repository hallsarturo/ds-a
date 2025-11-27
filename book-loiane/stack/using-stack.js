import Stack from './stack.js';

const stack = new Stack();

stack.push({ action: 'typing', text: 'S' });
stack.push({ action: 'typing', text: 't' });
stack.push({ action: 'typing', text: 'a' });
stack.push({ action: 'typing', text: 'c' });
stack.push({ action: 'typing', text: 'k' });

console.log(stack.size);
stack.pop();
stack.pop();
console.log(stack.size);
console.log(stack);
