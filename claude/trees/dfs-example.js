const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: [],
};

// Recursive DFS
function dfs(graph, node, visited = new Set()) {
    if (visited.has(node)) return;

    visited.add(node);
    console.log(node); // process the node

    for (const neighbor of graph[node]) {
        dfs(graph, neighbor, visited); // go deep before going wide
    }
}

dfs(graph, 'A');
// Output: A B D E F C
