// Pattern 1: Frequency Counter
// Use when: You need to count occurrences of elements
// Example Problem: Find the first non-repeating character in a string

const s = 'leetcode';
// Output: "l"

const t = 'loveleetcode';
// Output: "v"

const firstOriginal = function (s) {
    let obj = {};

    for (const char of s) {
        obj[char] = (obj[char] || 0) + 1;
    }

    for (const char of s) {
        if (obj[char] === 1) return char;
    }

    return 'no original character';
};

console.log(firstOriginal(t));
