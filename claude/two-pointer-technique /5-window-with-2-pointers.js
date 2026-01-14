// Window with Two Pointers
// Find the longest substring without repeating characters

const string = 'abcabcdebb';
// Output: 3 (substring "abc")

const string2 = 'bbbbb';
// Output: 1 (substring "b")

const string3 = 'pwwkew';
// Output: 3 (substring "wke")

function noRepeat(s) {
    let left = 0;
    let right = 1;

    let maxSet = 0;

    const set = new Set();
    set.add(s[left]);
    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            right++;
        } else {
            left = right;
            if (maxSet < set.size) maxSet = set.size;
            set.clear();
            set.add(s[left]);
            right++;
        }
    }
    return maxSet;
}

console.log(noRepeat(string3));
