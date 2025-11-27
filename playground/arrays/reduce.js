// Count the number of occurrences of each word in an array of strings.

const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'kiwi'];

const result = words.reduce((acc, current) => {
    if (acc[current] === undefined) {
        acc[current] = 1;
    } else {
        acc[current] += 1;
    }
    return acc;
}, {});

console.log(result);

/////////////////////

// Mutate an array of numbers in place, doubling each value.
const numbers = [2, 5, 8, 3, 7, 1];

// using index assignment with forEach
numbers.forEach((e, i, arr) => {
    arr[i] = e * 2;
});

/////////////////////

