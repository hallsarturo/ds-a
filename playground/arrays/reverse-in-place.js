// My solution to reverse an array without .reverse() and in place

const array = [1, 2, 3, 4];

const reverseArray = function (array) {
    let b = array.length - 1;

    for (let i = 0; i < b; i++) {
        let buffer = array[i];
        array[i] = array[b];
        array[b] = buffer;
        b -= 1;
    }
};

console.log(array);
reverseArray(array);
console.log(array);
