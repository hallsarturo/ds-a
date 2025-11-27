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

// const searchQueue = new Deque();
// searchQueue.addRear(graph['me']);
// // console.log(searchQueue.size);
// // console.log(searchQueue.peekFront());

// function personIsSeller(name) {
//     return name[name.length - 1] === 'j';
// }

// outerLoop: while (searchQueue.size > 0) {
//     let person = searchQueue.removeFront();
//     // console.log(person);
//     for (let i = 0; i < person.length; i++) {
//         if (personIsSeller(person[i])) {
//             console.log(person[i], ' is a mango seller!');
//             break outerLoop;
//         } else {
//             searchQueue.addRear(graph[person[i]]);
//             console.log(false);
//         }
//     }
// }

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
