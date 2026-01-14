// Window with Two Pointers
// Find the longest substring without repeating characters

const string = 'abcabcbb';
// Output: 3 (substring "abc")

// Input: "bbbbb"
// Output: 1 (substring "b")

// Input: "pwwkew"
// Output: 3 (substring "wke")

function noRepeat(s) {
    let left = 0;
    let right = 1;

    const set = new Set();
    set.add(s[left]);
    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add();
        }
    }
}

console.log(noRepeat(string));
