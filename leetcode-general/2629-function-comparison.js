// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

// ---

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65

const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

const compose = function (functions) {
    if (functions.lenght === 0) {
        return x => x;
    }

    return function (x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};

const fn = compose(functions);
console.log(fn(4));

