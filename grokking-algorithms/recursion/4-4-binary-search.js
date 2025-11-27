// 4.4 Remember binary search from chapter 1? It’s a D&C algorithm,
// too. Can you come up with the base case and recursive case for
// binary search?

function recursiveBinarySearch(arr, item, low, high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    let currentHigh = high;
    let currentLow = low;
    if (low > high) {
        if (guess === item) {
            return mid;
        } else {
            return false;
        }
    } else {
        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
            currentHigh = high;
        } else {
            low = mid + 1;
            currentLow = low;
        }
        return recursiveBinarySearch(arr, item, currentLow, currentHigh);
    }
}
const sortedArray = [1, 3, 7, 12, 18, 24, 33, 47, 59, 62, 100];
let low = 0;
let high = sortedArray.length - 1;

console.log(recursiveBinarySearch(sortedArray, 1, low, high));
