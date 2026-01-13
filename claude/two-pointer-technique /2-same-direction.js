// Question 2: Same Direction (Fast & Slow)
// Remove duplicates from a sorted array in-place
// Return the new length, and the first k elements should be the unique ones.

// Output: length = 3, arr = [1, 2, 3, _, _]

const arr = [1, 1, 2, 2, 3];

function removeDuplicates(arr) {
    let writePointer = 0;
    let readPointer = 1;

    while (readPointer < arr.length) {
        if (arr[writePointer] === arr[readPointer]) {
            readPointer++;
        } else {
            writePointer++;
            arr[writePointer] = arr[readPointer];
            readPointer++;
        }
    }
    writePointer++;
    arr.length = writePointer;

    return arr.length;
}

console.log(removeDuplicates(arr));
