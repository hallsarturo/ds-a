function dfs(graph, start, visited = new Set()) {
    // Mark as visited
    visited.add(start);
    console.log(start);

    // Visit all unvisited neighbors
    for (let neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['B', 'C', 'E'],
    E: ['D'],
};

dfs(graph, 'A');
