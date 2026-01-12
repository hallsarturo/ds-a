// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// let nums = [1, 2, 3, 4, 5, 6, 7];
// let nums = [-1, -100, 3, 99];

const rotate = function (nums, k) {
    const a = k % nums.length;
    let right = nums.slice(-a);
    let left = nums.slice(0, -a);
    nums.splice(0, nums.length, ...right, ...left);

    return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 10));
