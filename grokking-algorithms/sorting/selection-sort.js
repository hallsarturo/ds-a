// Sort an array from smallest ==> largest
function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

function selectionSort(arr) {
    const newArr = [];
    const copiedArr = arr.slice();

    while (copiedArr.length > 0) {
        let smallest = findSmallest(copiedArr);
        newArr.push(copiedArr.splice(smallest, 1)[0]);
    }
    return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
