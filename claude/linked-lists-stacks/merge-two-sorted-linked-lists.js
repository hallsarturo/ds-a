// Pattern 4: Merging Two Sorted Linked Lists
// You already solved this in Week 1 (LeetCode #21), but let's deepen your understanding!

class LinkedListNode {
    constructor(val, next) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    head;
    #size = 0;

    insert(val) {
        if (!this.head) {
            this.head = new LinkedListNode(val);
        } else {
            this.append(val, this.head);
        }
        this.#size++;
    }

    append(val, currentNode) {
        let newNode = new LinkedListNode(val);
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
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
const list2 = new LinkedList();

list1.insert(1);
list1.insert(2);
list1.insert(4);
//list.printList();
list2.insert(1);
list2.insert(3);
list2.insert(4);

// Iterative (dummy node)
const mergeTwoLists = function (list1, list2) {
    let dummy = new LinkedListNode(-1);
    let tail = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    tail.next = list1 !== null ? list1 : list2;
    return dummy.next;
};

console.log(mergeTwoLists(list1.head, list2.head));
