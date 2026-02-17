// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
];
// Output: 1;

const grid2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
];
// Output: 3;

const numIslands = function (grid) {
    // Traverse the Grid in order
    let islandCount = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                islandCount++;
                dfs(grid, i, j);
            } 
        }
    }

    function dfs(graph, r, c) {
        // Boundary check
        if (r < 0 || r >= graph.length || c < 0 || c >= graph[0].length) {
            return;
        }
        // Base case
        if (graph[r][c] === '0') {
            return;
        }

        // Mark current position as visited
        graph[r][c] = '0';

        // recursion right
        dfs(graph, r, c + 1);
        // recursion left
        dfs(graph, r, c - 1);
        // recursion up
        dfs(graph, r - 1, c);
        // recursion down
        dfs(graph, r + 1, c);
    }

    return islandCount;
};

// console.log(numIslands(grid));
console.log(numIslands(grid2));
