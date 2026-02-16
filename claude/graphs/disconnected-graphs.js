function dfsAll(graph) {
    const visited = new Set();

    for (let node in graph) {
        if (!visited.has(node)) {
            console.log(`New component starting at ${node}`);
            dfs(graph, node, visited);
        }
    }
}
