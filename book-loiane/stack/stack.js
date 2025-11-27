export default class Stack {
    #items = []; // {1}

    push(item) {
        this.#items.push(item);
    }

    pop() {
        return this.#items.pop();
    }

    peek() {
        return this.#items[this.#items.length - 1];
    }

    isEmpty() {
        return this.#items.length === 0;
    }

    get size() {
        return this.#items.length;
    }

    clear() {
        this.#items = [];
    }

    toString() {
        if (this.isEmpty()) {
            return 'Empty Stack';
        } else {
            return this.#items
                .map((item) => {
                    if (typeof item === 'object' && item !== null) {
                        return JSON.stringify(item);
                    } else {
                        return item.toString();
                    }
                })
                .join(', ');
        }
    }
}
