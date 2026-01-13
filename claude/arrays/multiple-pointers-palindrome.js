// Array/String Manipulation - Question 4: Multiple Pointers (Palindrome)
// Check if a string is a palindrome (ignore non-alphanumeric characters)
// A palindrome reads the same forwards and backwards.

const a = 'A man, a plan, a canal: Panama';
// Output: true

const b = 'race a car';
// Output: false

const c = "Was it a car or a cat I saw?"
// Output: true

// Requirements

// Ignore spaces, punctuation, and capitalization
// Only consider alphanumeric characters (letters and numbers)

function isPalindrome(string) {
    let cleaned = '';
    for (let char of string) {
        if (isAlphanumeric(char)) {
            cleaned += char.toLowerCase();
        }
    }

    function isAlphanumeric(char) {
        if (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        ) {
            return true;
        } else {
            return false;
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
}

console.log(isPalindrome(c));
