// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:

const numCourses = 2;
const prerequisites = [[1, 0]];
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

const numCourses2 = 2;
const prerequisites2 = [
    [1, 0],
    [0, 1],
];
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

const numCourses3 = 3;
const prerequisites3 = [
    [1, 0],
    [2, 1],
];
// Output: true

// Explanation:
// Valid order: 0 → 1 → 2

const canFinish = function (numCourses, prerequisites) {
   

    
};

console.log(canFinish(numCourses, prerequisites));
console.log(canFinish(numCourses2, prerequisites2));
console.log(canFinish(numCourses3, prerequisites3));
