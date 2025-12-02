// const pino = new BinarySearchTree();

// pino.insert(25);
// pino.insert(10);
// pino.insert(15);
// pino.insert(30);

// pino.print('inOrder');
// console.log(pino.search(10));
// console.log(pino.search(12));

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

    isLessThan(data, currentNode) {
        return data < currentNode.data;
    }

    isGreaterThan(data, currentNode) {
        return data > currentNode.data;
    }

    isEqualThan(data, currentNode) {
        return data === currentNode.data;
    }

    #insertNode(data, currentNode) {
        if (this.isLessThan(data, currentNode)) {
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
        console.log(x);
    }

    #preOrderTraversal(node, callback) {
        if (node) {
            callback(node.data);
            this.#preOrderTraversal(node.left, callback);
            this.#preOrderTraversal(node.right, callback);
        }
    }

    #inOrderTraversal(node, callback) {
        if (node) {
            this.#inOrderTraversal(node.left, callback);
            callback(node.data);
            this.#inOrderTraversal(node.right, callback);
        }
    }

    #postOrderTraversal(node, callback) {
        if (node) {
            this.#postOrderTraversal(node.left, callback);
            this.#postOrderTraversal(node.right, callback);
            callback(node.data);
        }
    }

    print(visitingType) {
        switch (visitingType) {
            case 'preOrder':
                this.#preOrderTraversal(this.#root, this.#logNode);
                break;
            case 'inOrder':
                this.#inOrderTraversal(this.#root, this.#logNode);
                break;
            case 'postOrder':
                this.#postOrderTraversal(this.#root, this.#logNode);
        }
    }

    search(data) {
        return this.#searchNode(data, this.#root);
    }

    #searchNode(data, currentNode) {
        if (!currentNode) {
            return false;
        }

        if (this.isEqualThan(data, currentNode)) {
            return true;
        }

        if (this.isLessThan(data, currentNode)) {
            return this.#searchNode(data, currentNode.left);
        } else {
            return this.#searchNode(data, currentNode.right);
        }
    }

    remove(data) {
        return this.#removeNode(data, this.#root);
    }

    #removeNode(data, currentNode) {
        // case 0: no value
        if (!currentNode) {
            return null;
        }

        // traverse the tree left or right
        if (this.isLessThan(data, currentNode)) {
            currentNode.left = this.#removeNode(data, currentNode.left);
            return currentNode;
        } else if (this.isGreaterThan(data, currentNode)) {
            currentNode.right = this.#removeNode(data, currentNode.right);
            return currentNode;
        } else {
            // Found node to remove

            // Case 1: is a leaf (no children)
            if (!currentNode.left && !currentNode.right) {
                return null;
            }

            // Case 2: has one children
            if (!currentNode.left) {
                return currentNode.right;
            }
            if (!currentNode.right) {
                return currentNode.left;
            }

            // Case 3: has 2 children
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
        this.#findMinNode(node.left);
    }
}
class AVLNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree extends BinarySearchTree {
    #root;

    insert(data) {
        this.#root = this.#insertNode(data, this.#root);
    }

    #insertNode(data, currentNode) {
        if (!currentNode) {
            return new AVLNode(data);
        }

        if (this.isLessThan(data, currentNode.data)) {
            currentNode.left = this.#insertNode(data, currentNode.left);
        } else {
            currentNode.right = this.#insertNode(data, currentNode.right);
        }

        currentNode.height = this.#updateNodeHeight(currentNode);

        return this.#balance(currentNode);
    }

    #updateNodeHeight(node) {
        return (
            1 +
            Math.max(this.#getHeight(node.left), this.#getHeight(node.right))
        );
    }

    #getHeight(node) {
        return node ? node.height : 0;
    }

    #getBalanceFactor(node) {
        if (!node) return 0;
        return this.#getHeight(node.left) - this.#getHeight(node.right);
    }

    #balance(node) {
        const balanceFactor = this.#getBalanceFactor(node);

        // Left heavy (balance factor > 1)
        if (balanceFactor > 1) {
            // Left-Left case
            if (this.#getBalanceFactor(node.left) >= 0) {
                return this.#rotateRight(node);
            }
            // Left-Right case
            return this.#rotateLeftRight(node);
        }

        // Right Heavy (balance factor < -1)
        if (balanceFactor < -1) {
            // Right-Right case
            if (this.#getBalanceFactor(node.right) <= 0) {
                return this.#rotateLeft(node);
            }
            // Right-Left case
            return this.#rotateRightLeft(node);
        }

        // Balanced
        return node;
    }

    #rotateRight(node) {
        const newRoot = node.left; // Identify the pivot (left child)
        const temp = newRoot.right; // Store the right child temporarily

        // Perform the rotation
        newRoot.right = node;
        node.left = temp;

        // Update heights of the affected nodes
        node.height = this.#updateNodeHeight(node);
        newRoot.height = this.#updateNodeHeight(newRoot);

        return newRoot; // Return the new root of the subtree
    }

    #rotateLeft(node) {
        const newRoot = node.right; // Identify the pivot (right child)
        const temp = newRoot.left; // Store the left child temporarily

        newRoot.left = node; // Perform the rotation
        node.right = temp;

        node.height = this.#updateNodeHeight(node);
        newRoot.height = this.#updateNodeHeight(newRoot);
        return newRoot;
    }

    #rotateLeftRight(node) {
        node.left = this.#rotateLeft(node.left); // First, rotate left on the left child
        return this.#rotateRight(node); // Then, rotate right on the original node
    }

    #rotateRightLeft(node) {
        node.right = this.#rotateRight(node.right); // Rotate right on the right child
        return this.#rotateLeft(node); // Then, rotate left on the original node
    }

    remove(data) {
        this.#root = this.#removeNode(data, this.#root);
    }

    #removeNode(data, currentNode) {
        // Case 0: No node
        if (!currentNode) {
            return null;
        }

        if (this.isLessThan(data, currentNode)) {
            currentNode.left = this.#removeNode(data, currentNode.left);
        } else if (this.isGreaterThan(data, currentNode)) {
            currentNode.right = this.#removeNode(data, currentNode.right);
        } else {
            // Found Node
            // Case 1: no children
            if (!currentNode.left && !currentNode.right) {
                return null;
            }

            // Case 2: One child
            if (!currentNode.left) {
                return currentNode.right;
            }

            if (!currentNode.right) {
                return currentNode.left;
            }

            // Case 3: two children
            const minNode = this.#findMinNode(currentNode.right);
            currentNode.data = minNode.data;
            currentNode.right = this.#removeNode(
                minNode.data,
                currentNode.right
            );
        }
        currentNode.height = this.#updateNodeHeight(currentNode);
        return this.#balance(currentNode);
    }

    #findMinNode(node) {
        if (!node.left) {
            return node;
        }
        return this.#findMinNode(node.left);
    }
}
