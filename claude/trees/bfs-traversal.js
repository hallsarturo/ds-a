import { Deque } from '../../book-loiane/queue/deque-class.js';

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    #root;

    insert(val) {
        if (!this.#root) {
            this.#root = new BSTNode(val);
        } else {
            this.#insertNode(val, this.#root);
        }
    }

    #isLowerThan(val, currentNode) {
        return val < currentNode.val;
    }
    #isGreaterThan(val, currentNode) {
        return val > currentNode.val;
    }
    #isEqual(val, currentNode) {
        return val === currentNode.val;
    }

    #insertNode(val, currentNode) {
        if (this.#isLowerThan(val, currentNode)) {
            if (!currentNode.left) {
                currentNode.left = new BSTNode(val);
            } else {
                this.#insertNode(val, currentNode.left);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = new BSTNode(val);
            } else {
                this.#insertNode(val, currentNode.right);
            }
        }
    }

    printTree() {
        this.#inorderTraversal(this.#root, this.#logNode);
    }

    #logNode(x) {
        console.log(x);
    }

    #inorderTraversal(node, callBack) {
        if (node) {
            this.#inorderTraversal(node.left, callBack);
            callBack(node.val);
            this.#inorderTraversal(node.right, callBack);
        }
    }

    bfTraversal(node) {
        const queue = new Deque();
        queue.addRear(this.#root);

        while (queue.size > 0) {
            const node = queue.removeFront();
            console.log(node.val);
            if (node.left) {
                queue.addRear(node.left);
            }
            if (node.right) {
                queue.addRear(node.right);
            }
        }
    }
}

const tree = new BSTree();
tree.insert(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);
tree.printTree();
