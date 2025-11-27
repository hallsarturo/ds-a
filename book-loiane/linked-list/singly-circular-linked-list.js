class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class CircularLinkedList {
    #head;
    #size = 0;

    append(data) {
        const newNode = new LinkedListNode(data);
        if (!this.#head) {
            this.#head = newNode;
            newNode.next = this.#head;
        } else {
            let current = this.#head;
            while (current.next !== this.#head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.#head;
        }
        this.#size++;
    }

    prepend(data) {
        const newNode = new LinkedListNode(data, this.#head);
        if (!this.#head) {
            this.#head = newNode;
            newNode.next = this.#head;
        } else {
            let current = this.#head;
            while (current !== this.#head) {
                current = current.next;
            }
            current.next = newNode;
            this.#head = newNode;
        }
        this.#size++;
    }

    #removeFromHead() {
        const nodeToRemove = this.#head;
        let lastNode = this.#head;
        while (lastNode.next !== this.#head) {
            lastNode = lastNode.next;
        }
        this.#head = nodeToRemove.next;
        lastNode.next = this.#head;

        if (this.#size === 1) {
            this.#head = null;
        }
        this.#size--;
        return nodeToRemove.data;
    }

    #removeFromTail() {
        if (this.#head.next === this.#head) {
            const nodeToRemove = this.#head;
            this.#head = null;
            this.#size--;
            return nodeToRemove.data;
        } else {
            let lastNode = this.#head;
            let previousNode = null;
            while (lastNode.next !== this.#head) {
                previousNode = lastNode;
                lastNode = lastNode.next;
            }
            previousNode.next = this.#head;
            this.#size--;
            return lastNode.data;
        }
    }
}
