// Pattern 5: Prefix Sum + Hash Map
// Use when: You need to find subarrays that sum to a target (or find subarray sums efficiently)
// Example Problem: Subarray Sum Equals K (LeetCode 560)

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

const nums = [1, 1, 1];
const k = 2;
// Output: 2

const nums2 = [1];
const k2 = 1;
// Output: 2

const nums3 = [-1, -1, 1];
const k3 = 0;
// Output: 1

const nums4 = [1, -1, 0];
const k4 = 0;
// Output: 3

const subarraySum = function (nums, k) {
    const map = new Map();
    map.set(0, 1);

    let count = 0;
    let prefixSum = 0;

    for (let num of nums) {
        prefixSum += num;
        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
};

console.log(subarraySum(nums3, k3));
