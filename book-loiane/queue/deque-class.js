export class Deque {
    #items = [];

    addFront(item) {
        this.#items.unshift(item);
    }

    addRear(item) {
        this.#items.push(item);
    }

    removeFront() {
        return this.#items.shift();
    }

    removeRear() {
        return this.#items.pop();
    }

    peekFront() {
        return this.#items[0];
    }

    peekRear() {
        return this.#items[this.#items.length - 1];
    }

    get size() {
        return this.#items.length;
    }
}
