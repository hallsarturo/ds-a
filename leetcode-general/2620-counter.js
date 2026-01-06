// Given an integer n, return a counter function.
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

const createCounter = function (n) {
    let count = n;
    let hasBeenCalled = false;
    return function () {
        if (hasBeenCalled) {
            count++;
        }
        hasBeenCalled = true;
        return count;
    };
};

const counter = createCounter(5);
counter();
counter();
counter();
