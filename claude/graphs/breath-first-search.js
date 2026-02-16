function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node);

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
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

bfs(graph, 'A');
