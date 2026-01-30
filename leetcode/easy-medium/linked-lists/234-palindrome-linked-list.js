// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
// Input: head = [1,2,2,1]
// Output: true

// Input: head = [1,2]
// Output: false

class LinkedListNode {
    constructor(data) {
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
            this.#append(data);
        }
    }

    #append(data) {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        const newNode = new LinkedListNode(data);
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

const list1 = new LinkedList();
list1.insert(1);
list1.insert(2);
list1.insert(2);
list1.insert(1);

const list2 = new LinkedList();
list2.insert(1);
list2.insert(2);

const isPalindrome = function (head) {
    // create a new linkedList with a deep copy, then reverse it
    const newHead = head;

    function reverseList(headNode) {
        let prev = null;
        let current = headNode;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }

    const reversedHead = reverseList(newHead);

    // iterate both lists and compare each node, if one false return false
    let currentOriginal = head;
    let currentReversed = reversedHead;
    while (currentOriginal) {
        if (currentOriginal.data !== currentReversed.data) return false;
        currentOriginal = currentOriginal.next;
        currentReversed = currentReversed.next;
    }
    return true;
};

console.log(isPalindrome(list1.head));

function deepCopyLinkedList(head) {
    if (!head) return null;
    const newHead = new LinkedListNode(head.data);
    let currentOriginal = head.next;
    let currentCopy = newHead;

    while (currentOriginal) {
        currentCopy.next = new LinkedListNode(currentOriginal.data);
        currentCopy = currentCopy.next;
        currentOriginal = currentOriginal.next;
    }
    return newHead;
}
