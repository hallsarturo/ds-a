// Given an integer n, return the number of structurally unique BST's
// (binary search trees) which has exactly n nodes of unique values from 1 to n.

// create a BST class, that produces all the 4 tpes of trees:

// Left-left heavy
// Right-Right heavy
// Balanced
// Left-Right
// Right-Left

// convert the input n, into its factors: 3 => 1, 2, 3
// loop substract 1 to n until n === 1

let n = 3;
let nodes = [];
while (n > 0) {
    nodes.push(n);
    n--;
}
nodes.reverse()
console.log(nodes);

class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    #root;

    insert(data) {
        if (!this.#root) {
            this.#root = new BSTNode(data);
        } else {
            
        }
    }

    #insertNode(data, currentNode) {}
}

[ 3, 2, 1 ]