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
    const graph = Array(numCourses)
        .fill(0)
        .map(() => []);

    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }

    const visited = new Set();
    const recursionStack = new Set();

    function hasCycle(course) {
        // If we're currently visiting this course in our path → cycle!
        if (recursionStack.has(course)) return true;

        // If we already fully explored this course → no cycle here
        if (visited.has(course)) return false;

        // Mark this course as "currently exploring"
        recursionStack.add(course);

        // Check all courses that depend on this one
        for (let nextCourse of graph[course]) {
            if (hasCycle(nextCourse)) return true;
        }

        // Done exploring this path, remove from stack
        recursionStack.delete(course);
        visited.add(course);

        return false;
    }

    // Check every course as a starting point
    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i)) return false;
    }

    return true;
};

console.log(canFinish(numCourses, prerequisites));
console.log(canFinish(numCourses2, prerequisites2));
console.log(canFinish(numCourses3, prerequisites3));
