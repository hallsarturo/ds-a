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

function removeElement(arr, val) {
    let writeIndex = 0; // Where to place next good element

    for (let readIndex = 0; readIndex < arr.length; readIndex++) {
        if (arr[readIndex] !== val) {
            arr[writeIndex] = arr[readIndex]; // Copy good element forward
            writeIndex++;
        }
        // If it equals val, we skip it (don't increment writeIndex)
    }

    return writeIndex; // New length
}

console.log(removeElement(arr, val));
