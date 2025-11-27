class CircularQueue {
    #items = [];
    #capacity = 0;
    #front = 0;
    #rear = -1;
    #size = 0;

    constructor(capacity) {
        this.#items = new Array(capacity);
        this.#capacity = capacity;
    }

    get size() {
        return this.#size;
    }

    enqueue(item) {
        if (this.isFull()) {
            throw new Error('The Queue is full');
        }

        this.#rear = (this.#rear + 1) % this.#capacity;
        this.#items[this.#rear] = item;
        this.#size++;
    }
    isFull() {
        return this.#size === this.#capacity;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }

        const item = this.#items[this.#front];

        this.#size--;
        if (this.isEmpty()) {
            this.#front = 0;
            this.#rear = -1;
        } else {
            this.#front = (this.#front + 1) % this.#capacity;
        }
        return item;
    }
    isEmpty() {
        return this.#size === 0;
    }
}

// Instantiation

function hotPotato(players, numPasses) {
    const queue = new CircularQueue(players.length);
    for (const player of players) {
        queue.enqueue(player);
    }
    while (queue.size > 1) {
        for (let i = 0; i < numPasses; i++) {
            queue.enqueue(queue.dequeue());
        }
        console.log(`${queue.dequeue()} is eliminated`);
    }
    return `Winnwer: ${queue.dequeue()}`;
}

const players = ['Violet', 'Feyre', 'Poppy', 'Oraya', 'Aelin'];
const numPasses = 7;

console.log(hotPotato(players, numPasses));
