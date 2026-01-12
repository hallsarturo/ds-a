// Array/String Manipulation

// - Question 1: Frequency Counter Pattern

// Write a function that returns the frequency of each character in a string
// Example:
// javascript// Input: "hello"
// // Output: {h: 1, e: 1, l: 2, o: 1}

const string = 'hello';

const frequencyCount = function (string) {
    const map = {};

    for (let i = 0; i < string.length; i++) {
        if (!Object.hasOwn(map, string[i])) {
            map[string[i]] = 1;
        } else {
            map[string[i]]++;
        }
    }
    return map;
};

console.log(frequencyCount(string));
