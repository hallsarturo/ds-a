// 4.3 Write a recursive function to find the maximum number in a
// list.

function maxNumber(list, max) {
    if (list.length === 0) {
        return max;
    } else {
        let current = list.shift();
        if (current > max) {
            max = current;
        }
        return (max = maxNumber(list, max));
    }
}

const list = [17, 42, 3, 99, 8, 23, 56];
console.log(maxNumber(list, 0));
