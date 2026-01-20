// Pattern 4: Sliding Window + Hash Map
// Use when: You need to find substrings with specific character constraints
// Example Preoblem: Longest Substring Without Repeating Characters (LeetCode #3)

// Input: s = "abcabcbb"
// Output: 3 (substring "abc")

// Input: s = "bbbbb"
// Output: 1 (substring "b")

// Input: s = "pwwkew"
// Output: 3 (substring "wke")

// Another variation: Longest Substring with At Most K Distinct Characters

// Input: s = "eceba", k = 2
// Output: 3 (substring "ece" has 2 distinct characters)

// Input: s = "aa", k = 1
// Output: 2 (substring "aa")

// Question for you:
// How would you modify the "longest substring without repeating" approach to solve "at most K distinct characters"?

// Given a string s, find the length of the longest substring without duplicate characters.

const s = 'eceba';
const k = 2;
// Output: 3 (substring "ece" has 2 distinct characters)

// Input: s = "aa", k = 1
// Output: 2 (substring "aa")

const lengthOfLongestSubstring = function (s, k) {
    let left = 0;
    let maxLength = 0;
    const map = new Map();

    for (let right = 0; right < s.length; right++) {
        map.set(s[right], (map.get(s[right]) || 0) + 1);

        while (map.size > k) {
            map.set(s[left], map.get(s[left]) - 1);
            if (map.get(s[left]) === 0) {
                map.delete(s[left]);
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring(s, k));
