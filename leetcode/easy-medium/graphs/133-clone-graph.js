// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

class Graph {
    nodes = [];
    size = 0;

    insertNode(val, neighbors) {
        if(!this.nodes.find((node) => node.val === val)) {
            // create node
        } else {
            //update value
        }

        // create Neighbor nodes if don't exist.
        neighbors.forEach((neighbor) => {
            if (!this.nodes.find((node) => node.val === neighbor)) {
                this.nodes.push(new Node(neighbor));
            }
        });

        const a = this.nodes.find((n) => n.val === neighbors[0]);
        const b = this.nodes.find((n) => n.val === neighbors[1]);

        const newNode = new Node(val, [a, b]);
        this.nodes.push(newNode);
        this.size++;
    }

    printGraph() {
        console.log(this.nodes);
    }

    get size() {
        return this.size;
    }

    getNode(val) {
        return this.nodes.find((n) => n.val === val);
    }
}

const testGraph = new Graph();
testGraph.insertNode(1, [2, 4]);
testGraph.insertNode(2, [1, 3]);
testGraph.insertNode(3, [2, 4]);
testGraph.insertNode(4, [1, 3]);

testGraph.printGraph();
// console.log(testGraph.size);

// const cloneGraph = function (node) {
//     const clonedGraph = [];
//     let val = 1

//     while(val)

// };

// const node1 = testGraph.getNode(1);
// cloneGraph(node1);
