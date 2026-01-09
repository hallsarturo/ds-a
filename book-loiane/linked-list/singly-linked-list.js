export class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

export class LinkedList {
    #head;
    #size = 0;
    #isInvalidPosition(position) {
        return position < 0 || position >= this.#size;
    }
    #removeFromHead() {
        const nodeToRemove = this.#head;
        this.#head = this.#head.next;
        this.#size--;
        return nodeToRemove.data;
    }
    #removeFromMiddleOrEnd(position) {
        let nodeToRemove = this.#head;
        let previous;
        for (let index = 0; index < position; index++) {
            previous = nodeToRemove;
            nodeToRemove = nodeToRemove.next;
        }
        previous.next = nodeToRemove.next;
        this.#size;
        return nodeToRemove.data;
    }

    append(data) {
        const newNode = new LinkedListNode(data);
        if (!this.#head) {
            this.#head = newNode;
        } else {
            let current = this.#head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.#size++;
    }

    prepend(data) {
        const newNode = new LinkedListNode(data, this.#head);
        this.#head = newNode;
        this.#size++;
    }

    insert(data, position) {
        if (this.#isInvalidPosition(position)) {
            return false;
        }
        const newNode = new LinkedListNode(data);
        if (position === 0) {
            this.prepend(data);
            return true;
        }
        let current = this.#head;
        let previous = null;
        let index = 0;

        while (index++ < position) {
            previous = current;
            current = current.next;
        }

        newNode.next = current;
        previous.next = newNode;
        this.#size++;
        return true;
    }

    indexOf(data, compareFunction = (a, b) => a === b) {
        let current = this.#head;
        let index = 0;
        while (current) {
            if (compareFunction(current.data, data)) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    removeAt(position) {
        if (this.#size === 0) {
            throw new RangeError('Cannot remove from an empty list');
        }
        if (this.#isInvalidPosition(position)) {
            throw new RangeError('Invalid position');
        }
        if (position === 0) {
            return this.#removeFromHead();
        }
        return this.#removeFromMiddleOrEnd(position);
    }

    remove(data, compareFunction = (a, b) => a === b) {
        const index = this.indexOf(data, compareFunction);
        if (index === -1) {
            return null;
        }
        return this.removeAt(index);
    }

    isEmpty() {
        return this.#size === 0;
    }

    get size() {
        return this.#size;
    }

    get head() {
        return this.#head;
    }

    clear() {
        this.#head = null;
        this.#size = 0;
    }

    // toString() {
    //     let current = this.#head;
    //     let objString = '';
    //     while (current) {
    //         objString += this.#elementToString(current.data);
    //         current = current.next;
    //         if (current) {
    //             objString += ', ';
    //         }
    //     }
    //     return objString;
    // }

    forEach(callback) {
        let current = this.#head;
        let index = 0;
        while (current) {
            callback(current.data, index);
            current = current.next;
            index++;
        }
    }
}
