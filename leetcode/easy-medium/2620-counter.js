// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

let n = 10;
const createCounter = function(n) {
    return function() {
        const array = [];
        if (array.length === 0) {
            array.push(n);
            return array[0];
        } else {
            array[0]
        }
    };
};
