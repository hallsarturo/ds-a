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

    insertNode(val, neighborsToBe) {
        let node = this.nodes.find((n) => n.val === val);
        if (!node) {
            node = new Node(val);
            this.nodes.push(node);
        }
        neighborsToBe.forEach((ntb) => {
            let neighbor = this.nodes.find((n) => n.val === ntb);
            if (!neighbor) {
                neighbor = new Node(ntb);
                this.nodes.push(neighbor);
            }
            if (!node.neighbors.includes(neighbor)) {
                node.neighbors.push(neighbor);
            }
            // For undirected graph, add the reverse connection
            if (!neighbor.neighbors.includes(node)) {
                neighbor.neighbors.push(node);
            }
        });
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

const cloneGraph = function (node) {
    const visited = new Map();

    function recurse(node) {
        if (visited.has(node)) {
            return visited.get(node);
        }

        // create cloned Node
        const clonedNode = new Node(node.val);
        visited.set(node, clonedNode);

        // Neighbors recurse
        const a = recurse(node.neighbors[0]);
        const b = recurse(node.neighbors[1]);

        const neighborsArr = [a, b];
        clonedNode.neighbors = neighborsArr;
    }
    recurse(node);
    return visited.get(node);
};

const testGraph = new Graph();
testGraph.insertNode(1, [2, 4]);
testGraph.insertNode(2, [1, 3]);
testGraph.insertNode(3, [2, 4]);
testGraph.insertNode(4, [1, 3]);

testGraph.printGraph();
const node1 = testGraph.getNode(1);
cloneGraph(node1);
