function recursiveSum(arr) {
    let total = 0;
    if (arr.length === 1) {
        return (total += arr[0]);
    } else {
        total = arr.shift();
        return (total += recursiveSum(arr));
    }
}

const arr = [2, 4, 6, 1, 3];

console.log(recursiveSum(arr));
