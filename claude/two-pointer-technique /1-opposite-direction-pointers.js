// Question 1: Opposite Direction Pointers
// Given a sorted array, find two numbers that sum to a target
// This is a classic two-pointer problem!

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const t = 12;

function twoNums(arr, t) {
    let left = 0;
    let right = arr.length - 1;
    let sum = arr[left] + arr[right];

    while (sum !== t) {
        if (sum < t) {
            left++;
        } else {
            right--;
        }
        sum = arr[left] + arr[right];
    }
    return [arr[left], arr[right]];
}

console.log(twoNums(arr, t));
