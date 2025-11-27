// Sort an array of strings by their length, then alphabetically.

const words = [
    'pear',
    'apple',
    'banana',
    'supercalifragilisticoespiralidoso',
    'kiwi',
    'as',
    'grape',
    'fig',
    'plum',
];

words.sort((a, b) => {
    if (a.length - b.length !== 0) {
        return a.length - b.length;
    } else {
        return a.localeCompare(b);
    }
});

console.log(words);
