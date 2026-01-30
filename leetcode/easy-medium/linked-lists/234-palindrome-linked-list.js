// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
// Input: head = [1,2,2,1]
// Output: true

// Input: head = [1,2]
// Output: false

class LinkedListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    head;
    size = 0;

    insert(val) {
        if (!this.head) {
            this.head = new LinkedListNode(val);
        } else {
            this.#append(val);
        }
    }

    #append(val) {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        const newNode = new LinkedListNode(val);
        currentNode.next = newNode;
    }

    printList() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.val);
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

const list3 = new LinkedList();
list3.insert(1);
list3.insert(1);
list3.insert(2);
list3.insert(1);
// false

const isPalindrome = function (head) {
    // create a new linkedList with a deep copy, then reverse it
    function deepCopyLinkedList(head) {
        if (!head) return null;
        const newHead = new LinkedListNode(head.val);
        let currentOriginal = head.next;
        let currentCopy = newHead;

        while (currentOriginal) {
            currentCopy.next = new LinkedListNode(currentOriginal.val);
            currentCopy = currentCopy.next;
            currentOriginal = currentOriginal.next;
        }
        return newHead;
    }
    function reverseList(headNode) {
        const newHead = deepCopyLinkedList(head);

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
    const newHead = deepCopyLinkedList(head);
    const reversedHead = reverseList(newHead);

    // iterate both lists and compare each node, if one false return false
    let currentOriginal = head;
    let currentReversed = reversedHead;
    while (currentOriginal && currentReversed) {
        if (currentOriginal.val !== currentReversed.val) {
            return false;
        }
        currentOriginal = currentOriginal.next;
        currentReversed = currentReversed.next;
    }
    return true;
};

console.log(isPalindrome(list1.head));
