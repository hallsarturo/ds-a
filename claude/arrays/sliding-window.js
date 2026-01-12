// Question 2: Sliding Window
// Find the maximum sum of any contiguous subarray of size k

// Output: 9 (because subarray [5, 1, 3] has sum = 9)
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

const slidingWindow = function (arr, k) {
    let max = null;

    for (let i = 0; i < arr.length - k; i++) {
        let current = arr
            .slice(i, i + k)
            .reduce((acc, current) => (acc += current));
        if (max < current) max = current;
    }

    return max;
};

console.log(slidingWindow(arr, k));
