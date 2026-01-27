// Finding the Middle of a Linked List**
// Also uses fast & slow pointers, but differently!
// **Problem:** Find the middle node of a linked list.

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head;
    #size = 0;

    insertNode(data) {
        if (!this.head) {
            this.head = new LinkedListNode(data);
            this.#size++;
        } else {
            this.#append(data);
        }
    }

    #append(data) {
        let currentNode = this.head;
        let newNode = new LinkedListNode(data);
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this.#size++;
    }

    setCycle(tail) {
        let counter = 0;
        let currentNode = this.head;
        while (counter < tail) {
            currentNode = currentNode.next;
            counter++;
        }
        let newTail = currentNode;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newTail;
    }

    printList() {
        let currentNode = this.head;
        if (!currentNode) {
            return 'no nodes in this list';
        }
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
        // console.log(`list size: ${this.#size}`);
    }
}

const list = new LinkedList();
list.insertNode(1);
list.insertNode(2);
list.insertNode(3);
list.insertNode(4);
list.insertNode(5);
list.printList();

const findMiddleLinkedList = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

console.log(findMiddleLinkedList(list.head));
