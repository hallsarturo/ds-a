// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

const nums = [0, 1, 0, 3, 12];
// Output: [1,3,12,0,0]
// Example 2:

const nums2 = [0, 1];
// Output: [0]

const nums3 = [1];
// Output: [1]

const nums4 = [1, 0];

const moveZeroes = function (nums) {
    let writePointer = 0;
    let readPointer = 0;

    while (readPointer < nums.length) {
        if (nums[readPointer] === 0) {
            readPointer++;
        } else {
            [nums[writePointer], nums[readPointer]] = [
                nums[readPointer],
                nums[writePointer],
            ];
            writePointer++;
            readPointer++;
        }
    }
    return nums;
};

console.log(moveZeroes(nums4));
