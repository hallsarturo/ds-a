// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const nums = [1, 3, 4, 2];
const target = 6;

const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                const arr = [];
                arr.push(nums.indexOf(nums[i]), nums.lastIndexOf(nums[j]));
                return arr;
            }
        }
    }
};

console.log(twoSum(nums, target));
