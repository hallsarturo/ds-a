// Question 3: In-place Modification
// Remove all instances of a value from an array without using extra space
// Requirements:

// Modify the original array in-place
// Don't create a new array
// Return the new length

// Output: length = 2, and arr = [2, 2, _, _]
// (the underscores can be anything, we don't care about elements beyond the returned length)

const arr = [3, 2, 2, 3];
const val = 3;

function inPlaceModify(arr, val) {
    let index = arr.indexOf(val);
    while (index > -1) {
        arr.splice(index, 1);
        index = arr.indexOf(val);
    }
}

inPlaceModify(arr, val);
console.log(arr);
