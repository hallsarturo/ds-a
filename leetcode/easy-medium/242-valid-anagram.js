// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
const s = 'anagram';
const t = 'nagaram';
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isAnagram = function (s, t) {
    let sArr = s.split('').sort();
    let tArr = t.split('').sort();

    if (sArr.length !== tArr.length) return false;

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== tArr[i]) return false;
    }
    return true;
};

console.log(isAnagram(s, t));
