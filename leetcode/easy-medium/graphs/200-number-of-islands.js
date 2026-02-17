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
    // Start a 4 axes DFS traversal, add it to the counter at the end
    //    // add visited node position into a MAP
    // Continue traverse, if not zero Start a new Traversal (if position has been visited skip)
    // return counter
};
