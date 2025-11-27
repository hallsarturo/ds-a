// Given the head of a singly linked list, reverse the list, and return the reversed list.

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

let head = arrayToList([1, 2, 3, 4, 5]);

const reverseList = function (head) {
    let current = head;
    let previous = null;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
};

let reversed = reverseList(head);
console.log(listToArray(reversed));
