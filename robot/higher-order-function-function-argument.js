function addTimming(fn) {
    return function (...args) {
        console.log('started computing');
        const result = fn(...args);
        console.log('finished computing');
        return result;
    };
}

function sumTime(current) {
    return current + 2;
}

const timedSumTime = addTimming(sumTime);
const result = timedSumTime(5);
console.log(result);
