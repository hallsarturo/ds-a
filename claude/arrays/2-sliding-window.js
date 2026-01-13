// Question 2: Sliding Window
// Find the maximum sum of any contiguous subarray of size k

// Output: 9 (because subarray [5, 1, 3] has sum = 9)
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

const slidingWindow = function (arr, k) {
    // Calculate sum of first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i]; // Remove left, add right
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
};

console.log(slidingWindow(arr, k));
