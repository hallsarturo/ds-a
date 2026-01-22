// Pattern 6: Hash Set for Duplicates/Existence Checks
// Use when: You only care about existence, not frequency or values
// Key difference:

// Hash Map: Stores key-value pairs (e.g., {char: count})
// Hash Set: Only stores unique values (e.g., {1, 2, 3})

// Contains Duplicate (LeetCode 217)

// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

const nums = [1, 2, 3, ];
// Output: true

const containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

console.log(containsDuplicate(nums));
