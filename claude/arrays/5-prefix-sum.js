// Array/String Manipulation - Question 5: Prefix Sum
// Given an array, answer multiple queries about sum of subarrays efficiently
// You're given an array and multiple queries asking for the sum of elements between indices [left, right].

// Query 1: sum from index 1 to 3 → 2+3+4 = 9
// Query 2: sum from index 0 to 2 → 1+2+3 = 6
// Query 3: sum from index 2 to 4 → 3+4+5 = 12

// Challenge: If you get 1000 queries, how can you answer each one in O(1) time instead of recalculating the sum each time?
// Hint: Pre-compute something that helps you calculate any range sum quickly.

const array = [1, 2, 3, 4, 5];

function prefixSum(left, right, array) {
    let preCalc = [];
    let sum = 0;
    for (let i of array) {
        sum += i;
        preCalc.push(sum);
    }

    if (left === 0) {
        return preCalc[right];
    }
    return preCalc[right] - preCalc[left - 1];
}

console.log(prefixSum(2, 4, array));


// my second answer (months later)
function prefixSum2(arr, queries) {
    const prefix = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }
    // console.log(prefix);
    const [l, r] = queries;

    return prefix[r] - (prefix[l - 1] || 0); //set a guard for
}

const arr = [1, 2, 3, 4, 5];
const queries = [
    [1, 3], // sum from index 1 to 3
    [0, 2], // sum from index 0 to 2
    [2, 4], // sum from index 2 to 4
];

console.log(prefixSum2(arr, queries[1]));
