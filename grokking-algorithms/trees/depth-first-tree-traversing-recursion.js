import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Deque } from '../../book/queue/deque-class.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const limitedDir = path.join(__dirname, '../trees/pics');

function printNames(dir) {
    const files = fs.readdirSync(dir).sort();
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isFile()) {
            console.log(file);
        } else {
            printNames(fullPath);
        }
    }
}

printNames(limitedDir);
