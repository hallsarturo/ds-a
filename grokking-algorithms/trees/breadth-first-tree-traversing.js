import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Deque } from '../../book-loiane/queue/deque-class.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const limitedDir = path.join(__dirname, '../trees/pics');

function printNames(startDir) {
    const searchQueue = new Deque();
    searchQueue.addRear(startDir);
    while (searchQueue.size > 0) {
        const dir = searchQueue.removeFront();
        const files = fs.readdirSync(dir).sort();
        for (const file of files) {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isFile()) {
                console.log(file);
            } else if (fs.statSync(fullPath).isDirectory()) {
                searchQueue.addRear(fullPath);
            }
        }
    }
}

printNames(limitedDir);
