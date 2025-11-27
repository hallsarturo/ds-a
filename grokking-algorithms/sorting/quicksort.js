function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let pivot = arr[0];
        const less = [];
        const greater = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= pivot) {
                less.push(arr[i]);
            } else {
                greater.push(arr[i]);
            }
        }

        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
}

// Example: Large unordered array
const largeUnorderedArray = [
    42, 17, 93, 8, 56, 23, 77, 12, 65, 39, 84, 31, 5, 99, 21, 73, 60, 47, 88, 3,
    54, 29, 70, 15, 81, 36, 90, 27, 68, 11, 58, 25, 75, 19, 86, 33, 7, 95, 20,
    62, 45, 80, 38, 97, 13, 52, 28, 71, 16, 83, 34, 9, 92, 24, 66, 41, 78, 30,
    6, 98, 22, 74, 61, 48, 89, 4, 55, 26, 69, 14, 82, 35, 91, 32, 10, 96, 18,
    59, 40, 76, 63, 50, 87, 1, 53, 37, 94, 2, 57, 44, 79, 46, 85, 43, 72, 64,
    100, 49,
];
// Example: Small unordered array
const smallUnorderedArray = [7, 2, 9, 4, 1, 8, 3];

const array = [2, 1, 3];
console.log(quickSort(largeUnorderedArray));

// 4.5 linear
// 4.6 linear?
// 4.7 constant
// 4.8 cuadratic