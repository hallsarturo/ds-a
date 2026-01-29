// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

class LinkedListNode {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head;
    size = 0;

    insert(data) {
        if (!this.head) {
            this.head = new LinkedListNode(data);
        } else {
            this.#append(data, this.head);
        }
    }

    #append(data, currentNode) {
        while (currentNode) {
            currentNode = currentNode.next;
        }
        currentNode.next = new LinkedListNode(data);
    }

    printList() {
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.data) 
            currentNode
        }
    }
}

const reorderList = function (head) {};
