// Question 3: Partition Pattern
// Move all zeros to the end while maintaining relative order of non-zero elements

// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// Input: [0, 0, 1]
// Output: [1, 0, 0]

// Requirement: Modify the array in-place.

const arr = [0, 1, 0, 3, 12];
const arr2 = [0, 0, 1]

function partition(arr) {
    let writePointer = 0;


    while (readPointer < arr.length) {
        if (arr[readPointer] === 0) {
            readPointer++;
            if (arr[readPointer] !== 0) {
                arr[writePointer] = arr[readPointer];
                arr[readPointer] = 0;
                readPointer++;
                writePointer++;
            }
        } else {
            arr[writePointer] = arr[readPointer];
            arr[readPointer] = 0;
            writePointer++;
            readPointer++;
        }
    }

    return arr;
}

console.log(partition(arr2));
