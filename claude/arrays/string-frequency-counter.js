// Array/String Manipulation

// - Question 1: Frequency Counter Pattern

// Write a function that returns the frequency of each character in a string
// Example:
// javascript// Input: "hello"
// // Output: {h: 1, e: 1, l: 2, o: 1}

const string = 'hello';

const frequencyCount = function (string) {
    const map = {};

    for (let char of string) {
        map[char] = (map[char] || 0) + 1;
    }

    return map;
};

console.log(frequencyCount(string));
