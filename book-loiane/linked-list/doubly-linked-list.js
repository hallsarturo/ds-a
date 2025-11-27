class DoublyLinkedListNode {
    constructor(data, next = null, previous = null) {
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}

class DoublyLinkedList {
    #head;
    #tail;
    #size = 0;
    #isInvalidPosition(position) {
        return position < 0 || position > this.#size;
    }

    #insertInTheMiddle(data, position) {
        const newNode = new DoublyLinkedListNode(data);
        let currentNode = this.#head;
        let previousNode;

        for (let index = 0; index < position; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        newNode.next = currentNode;
        newNode.previous = previousNode;
        currentNode.previous = newNode;
        previousNode.next = newNode;
        this.#size++;
        return true;
    }

    #removeFromHead() {
        const nodeToRemove = this.#head;
        this.#head = nodeToRemove.next;

        if (this.#head) {
            this.#head.previous = null;
        } else {
            this.#tail = null;
        }
        this.#size--;
        nodeToRemove.next = null;
        return nodeToRemove.data;
    }

    #removeFromTail() {
        const nodeToRemove = this.#tail;
        this.#tail = nodeToRemove.previous;
        if (this.#tail) {
            this.#tail.next = null;
        } else {
            this.#head = null;
        }
        this.#size--;
        nodeToRemove.previous = null;
        return nodeToRemove.data;
    }

    #removeFromTheMiddle(position) {
        let nodeToRemove = this.#head;
        let previousNode;
        let index;
        while (index++ < position) {
            previousNode = nodeToRemove;
            nodeToRemove = nodeToRemove.next;
        }

        previousNode.Next = nodeToRemove.next;
        nodeToRemove.next.previous = previousNode;
        nodeToRemove.next = null;
        nodeToRemove.previous = null;
        this.#size--;
        return nodeToRemove.data;
    }

    append(data) {
        const newNode = new DoublyLinkedListNode(data);
        if (!this.#head) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.previous = this.#tail;
            this.#tail.next = newNode;
            this.#tail = newNode;
        }
        this.#size++;
    }

    prepend(data) {
        const newNode = new DoublyLinkedListNode(data, this.#head.next);
        if (!this.#head) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.next = this.#head;
            this.#head.previous = newNode;
            this.#head = newNode;
        }
        this.#size++;
    }

    insert(data, position) {
        if (this.#isInvalidPosition(position)) {
            return false;
        }
        if (position === 0) {
            this.prepend(data);
            return true;
        }
        if (position === this.#size) {
            this.append(data);
            return true;
        }
        return this.#insertInTheMiddle(data, position);
    }

    removeAt(position) {
        if (this.#size === 0) {
            throw new RangeError('Cannot remove from an empty list');
        }
        if (this.#isInvalidPosition(position)) {
            throw new RangeError('Invalid Positon');
        }
        if (position === 0) {
            return this.#removeFromHead;
        }

        if (position === this.#size - 1) {
            return this.#removeFromTail;
        }
        return this.#removeFromTheMiddle(position);
    }
}
