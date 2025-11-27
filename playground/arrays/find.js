// Find the first string in an array that starts and ends with the same letter.

const words = ['apple', 'banana', 'level', 'orange', 'radar', 'kiwi'];

const result = words.find((e) => {
    const first = e[0];
    const last = e[e.length - 1];
    return first === last;
});

console.log(result);