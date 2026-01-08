// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

import {
    LinkedList,
    LinkedListNode,
} from '../../../book-loiane/linked-list/singly-linked-list.js';

const list1 = new LinkedList();
const list2 = new LinkedList();

list1.append(1);
list1.append(2);
list1.append(4);

list2.append(1);
list2.append(3);
list2.append(4);

const mergeTwoLists = function (list1, list2) {
    // traverse list1 and list2, and insert the values in order

    if (!list1 && !list2) {
        return list1;
    } else if (!list1 && list2) {
        return list2;
    } else if (list1 && !list2) {
        return list1;
    } else {
        let currentA = list1;
        let currentB = list2;

        let newHead = null;
        let currentMain = null;
        while (currentA.next !== null && currentB.next !== null) {
            // compare values between the same list index, order them
            if (currentA.val <= currentB.val) {
                if (!newHead) {
                    newHead = currentA;
                    newHead.next = currentB;
                    currentMain = newHead.next;
                } else {
                    currentMain.next = currentA;
                }
            } else {
                if (!newHead) {
                    newHead = currentB;
                    newHead.next = currentA;
                } else {
                    currentMain.next = currentB;
                }
            }
        }
        return newHead;
    }
};

mergeTwoLists(list1, list2);
