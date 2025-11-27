class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    #root;

    insert(data) {
        if (!this.#root) {
            this.#root = new BSTNode(data);
        } else {
            this.#insertNode(data, this.#root);
        }
    }

    #isLessThan(data, currentNode) {
        return data < currentNode.data;
    }

    #isBiggerThan(data, currentNode) {
        return data > currentNode.data;
    }

    #isEqualThan(data, currentNode) {
        return data === currentNode.data;
    }

    #insertNode(data, currentNode) {
        if (this.#isLessThan(data, currentNode)) {
            if (!currentNode.left) {
                currentNode.left = new BSTNode(data);
            } else {
                this.#insertNode(data, currentNode.left);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = new BSTNode(data);
            } else {
                this.#insertNode(data, currentNode.right);
            }
        }
    }

    #logNode(x) {
        return console.log(x);
    }

    #preOrderTraverse(node, callback) {
        if (node) {
            callback(node.data);
            this.#preOrderTraverse(node.left, callback);
            this.#preOrderTraverse(node.right, callback);
        }
    }

    #inOrderTraverse(node, callback) {
        if (node) {
            this.#inOrderTraverse(node.left, callback);
            callback(node.data);
            this.#inOrderTraverse(node.right, callback);
        }
    }

    #postOrderTraverse(node, callback) {
        if (node) {
            this.#postOrderTraverse(node.left, callback);
            this.#postOrderTraverse(node.right, callback);
            callback(node.data);
        }
    }

    print(visitingType) {
        switch (visitingType) {
            case 'preOrder':
                this.#preOrderTraverse(this.#root, this.#logNode);
                break;

            case 'inOrder':
                this.#inOrderTraverse(this.#root, this.#logNode);
                break;

            case 'postOrder':
                this.#postOrderTraverse(this.#root, this.#logNode);
                break;
        }
    }

    // More methods /////////////

    search(data) {
        return this.#searchNode(data, this.#root);
    }

    #searchNode(data, currentNode) {
        if (!currentNode) {
            return false;
        }

        if (this.#isEqualThan(data, currentNode)) {
            return true;
        }

        if (this.#isLessThan(data, currentNode)) {
            return this.#searchNode(data, currentNode.left);
        } else {
            return this.#searchNode(data, currentNode.right);
        }
    }

    remove(data) {
        this.#root = this.#removeNode(data, this.#root);
    }

    #removeNode(data, currentNode) {
        // Case 0: no node
        if (!currentNode) {
            return null;
        }

        // Traverse left or right
        if (this.#isLessThan(data, currentNode)) {
            currentNode.left = this.#removeNode(data, currentNode.left);
            return currentNode;
        } else if (this.#isBiggerThan(data, currentNode)) {
            currentNode.right = this.#removeNode(data, currentNode.right);
            return currentNode;
        } else {
            // Found node!
            // Case 1: node is a leaf. has no children

            if (!currentNode.left && !currentNode.right) {
                return null;
            }
            // Case 2: node has one children
            if (!currentNode.left) {
                return currentNode.right;
            }
            if (!currentNode.right) {
                return currentNode.left;
            }

            // Case 3: node has 2 children
            const minNode = this.#findMinNode(currentNode.right);
            currentNode.data = minNode.data;
            currentNode.right = this.#removeNode(
                minNode.data,
                currentNode.right
            );
            return currentNode;
        }
    }

    #findMinNode(node) {
        if (!node.left) {
            return node;
        }
        return this.#findMinNode(node.left);
    }
}
