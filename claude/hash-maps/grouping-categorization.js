// Pattern 3: Grouping / Categorization
// Use when: You need to group items by some property
// Question: How would you use a hash map to group words that are anagrams of each other?
// Example Problem: Group Anagrams (LeetCode #49)

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

const groupAnagrams = function (strs) {
    let map = new Map();

    strs.forEach((word) => {
        let sorted = word.split('').sort().join('');
        if (!map.has(sorted)) {
            map.set(sorted, [word]);
        } else {
            map.get(sorted).push(word);
        }
    });

    return Array.from(map.values());
};

console.log(groupAnagrams(strs));
