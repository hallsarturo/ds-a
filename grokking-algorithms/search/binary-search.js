// O(log n) Logarithmic time

function binarySearch(arr, item) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];
        if (guess == item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
}

// Example of a dummy sorted array
const sortedArray = [1, 3, 7, 12, 18, 24, 33, 47, 59, 62, 100];

console.log(binarySearch(sortedArray, 100));
