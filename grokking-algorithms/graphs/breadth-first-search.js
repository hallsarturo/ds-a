import { Deque } from './../../book/queue/deque-class.js';

const graph = {};

graph['me'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

function personIsSeller(name) {
    return name[name.length - 1] === 'j';
}

function search(name) {
    const searchQueue = new Deque();
    searchQueue.addRear(graph[name]);
    const searched = new Set();

    while (searchQueue.size > 0) {
        let person = searchQueue.removeFront();
        console.log(person);
        person.forEach((person) => {
            if (!searched.has(person)) {
                if (personIsSeller(person)) {
                    console.log(person, ' is a mango seller');
                    return true;
                } else {
                    searchQueue.addRear(graph[person]);
                    searched.add(person);
                }
            }
        });
    }
    return false;
}

search('me');

/// Other example:
// Graph represented as adjacency list
const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: [],
};

function bfsTraversal(graph) {
    const queue = [];
    queue.push('A');
    const searched = new Set();

    while (queue.length > 0) {
        let item = queue.shift();
        console.log(item);
        searched.add(item);

        for (const neighbor of graph[item]) {
            if (!searched.has(neighbor)) {
                searched.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

bfsTraversal(graph);
