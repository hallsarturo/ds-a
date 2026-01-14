// Question 4: Three Pointers
// Dutch National Flag Problem: Sort an array of 0s, 1s, and 2s
// You need to sort the array in-place in one pass.

// Input: [2, 0, 2, 1, 1, 0]
// Output: [0, 0, 1, 1, 2, 2]

// Input: [2, 0, 1]
// Output: [0, 1, 2]

// Input: [0]
// Output: [0]

// Requirements:

// Must be done in-place
// Cannot use built-in sort functions
// Should be O(n) time with a single pass

// const arr = [2, 0, 2, 1, 1, 0];
const arr2 = [2, 0, 1];

function threePointers(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (high >= mid) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else if (arr[mid] === 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr
}

console.log(threePointers(arr2));
