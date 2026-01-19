// Two Sum / Complement Pattern
// Use when: You need to find pairs that sum to a target
// Classic Problem: Two Sum (LeetCode #1)

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Without hash map: O(n²) - nested loops checking every pair
// With hash map: O(n) - single pass

const nums = [2, 7, 11, 15];
const t = 9;
// Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)

const nums2 = [3, 2, 4];
const t2 = 6;
// Output: [1,2]

const nums3 = [3, 3];
const t3 = 6;
// Output: [0,1]

const twoSum = function (nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i); // Add current number AFTER checking
    }
};

console.log(twoSum(nums3, t3));
