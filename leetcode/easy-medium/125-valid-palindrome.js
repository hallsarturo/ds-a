// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

const string = 'A man, a plan, a canal: Panama';

const isPalindrome = function (s) {
    let cleaned = '';

    for (let char = 0; char < s.length; char++) {
        if (
            (s[char] >= 'a' && s[char] <= 'z') ||
            (s[char] >= 'A' && s[char] <= 'Z') ||
            (s[char] >= '0' && s[char] <= '9')
        ) {
            cleaned += s[char].toLowerCase();
        }
    }
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome(string));
