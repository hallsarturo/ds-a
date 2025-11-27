// O(1) Constant time, constant space complexity
const oddOrEven = (array) => (array.length % 2 === 0 ? 'even' : 'odd');

// O(n) Linear time complexity
function calculateAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

// O(n^2) Cuadratic time complexity
function hasCommonElements(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return true;
            }
        }
    }
    return false;
}

// O(n) Linear
function getOddNumbers(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            result.push(array[i]);
        }
    }
    return result;
}


