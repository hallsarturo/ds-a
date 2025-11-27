// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

const nums = [3, 2, 2, 3];
const val = 0;
const removeElement = function (nums, val) {
    
        let k = 0;
        nums.forEach((e, index, array) => {
            if (e === val) {
                return (array[index] = undefined);
            } else {
                k += 1;
            }
        });

        return k;
    };

console.log(removeElement(nums, val));
