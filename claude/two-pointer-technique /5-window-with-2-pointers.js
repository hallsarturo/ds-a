// Window with Two Pointers
// Find the longest substring without repeating characters

const string = 'abcbcdebb';
// Output: 3 (substring "abc")

const string2 = 'bbbbb';
// Output: 1 (substring "b")

const string3 = 'pwwkew';
// Output: 3 (substring "wke")

function noRepeat(s) {
    let left = 0;
    let maxLength = 0;
    const set = new Set();

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(noRepeat(string3));
