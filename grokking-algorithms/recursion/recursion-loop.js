function countDown(i) {
    console.log(i);
    if (i <= 1) {
        return; // Base case
    } else {
        countDown(i - 1); // Recursive case
    }
}

//countDown(3);

// Call Stack with Recursion

function fact(x) {
    if (x === 1) {
        return 1;
    } else {
        return x * fact(x - 1);
    }
}

console.log(fact(3))