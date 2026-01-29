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
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        let newNode = new LinkedListNode(data);
        currentNode.next = newNode;
    }

    printList() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

list.printList();

function reorderList(head) {
    let left = head;
    let right = null;
    // base case
    if (!head.next) {
        right = head;
        left.next = right;
        right.next = left.next;

        left = left.next;
    }
    //recursion
    reorderList(head.next);
}

console.log(reorderList(list.head));
