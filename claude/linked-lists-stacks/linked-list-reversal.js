// Problem: Reverse Linked List
// Given the head of a singly linked list, reverse the list and return the new head.

class LinkedListNode {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head;
    #size = 0;

    insert(data) {
        const newNode = new LinkedListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.#size++;
        } else {
            this.#append(data);
        }
    }

    #append(data) {
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        let newNode = new LinkedListNode(data);
        currentNode.next = newNode;
        this.#size++;
    }

    printList() {
        if (this.head) {
            let currentNode = this.head;
            while (currentNode !== null) {
                console.log(currentNode.data);
                currentNode = currentNode.next;
            }
        }
    }
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.printList();

const reverseList = function (head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let newNext = current.next;
        current.next = prev;
        prev = current;
        current = newNext;
    }

    return prev;
};

list.head = reverseList(list.head);
list.printList();
