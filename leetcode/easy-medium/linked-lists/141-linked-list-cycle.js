// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

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
        console.log(`list size: ${this.#size}`);
    }
}

const list = new LinkedList();
list.insertNode(1);
list.insertNode(2);
// list.insertNode(3);
// list.insertNode(4);
// [3,2,0,-4]
list.printList();

// list.setCycle(1);
// list.printList();

const hasCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) return true;

    }
    return false;
};

console.log(hasCycle(list.head));
