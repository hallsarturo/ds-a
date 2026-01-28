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
    // Check if anny list is empty, if so, return the one that is not or return an empty LinkedList

    if (!list1 && !list2) {
        return list1;
    } else if (!list1 && list2) {
        return list2;
    } else if (list1 && !list2) {
        return list1;
    } else {
        // if both aren't empty, traverse each list at the same time
        let dummy = new ListNode(-1);
        let tail = dummy;
        dummy.next = tail;

        while (list1 && list2) {
            // compare values between the same list index, order them
            if (list1.val < list2.val || list1.val === list2.val) {
                tail.next = list1;
                tail = tail.next;
                list1 = list1.next;
            } else {
                tail.next = list2;
                tail = tail.next;
                list2 = list2.next;
            }
        }

        tail.next = list1 !== null ? list1 : list2;
        return dummy.next;
    }
};

const merged = mergeTwoLists(list1, list2);
merged.forEach((data) => console.log(data));
