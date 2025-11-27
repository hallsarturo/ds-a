import { Queue } from './queue-class.js';

const queue = new Queue();

queue.enqueue({ document: 'Chapter05.docx', pages: 20 });
queue.enqueue({ document: 'JavaScript.pdf', pages: 60 });
queue.enqueue({ document: 'TypeScript.pdf', pages: 80 });

console.log(queue.front());
console.log(queue.size);

while (!queue.isEmpty()) {
    console.log(queue.dequeue());
}
