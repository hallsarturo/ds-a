// You are given an integer array coins representing coins of different denominations
// and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount.
//  If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

const coins = [1, 2, 5];
const amount = 11;
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

const coins2 = [2];
const amount2 = 3;
// Output: -1
// Example 3:

const coins3 = [1];
const amount3 = 0;
// Output: 0

const coins4 = [1];
const amount4 = 2;
// Output: 2

const coins5 = [1, 2147483647];
const amount5 = 2;

const coinChange = function (coins, amount) {
    // sort coin array
    coins.sort((a, b) => b - a);

    let minChange = Infinity;
    let idx = 0;

    function recurse(arr, idx) {
        let coin = arr[idx];

        if (amount === 0) return amount;
        if (coin > amount && idx++ < arr.length) {
            return recurse(arr, idx);
        }

        // substract the coint to the amount
        amount -= coin;
        minChange++;

        if (amount - coin >= 0) return recurse(arr, idx);
        if (idx++ < arr.length) {
            return recurse(arr, idx);
        } else {
            return amount;
        }
    }

    for (let i = 0; i < coins.length; i++) {
        const iteration = recurse(coins, i) < amount;
        if (iteration < amount) amount = iteration;
    }

    if (amount === 0) return minChange;
    return -1;
};

console.log(coinChange(coins, amount));
console.log(coinChange(coins2, amount2));
console.log(coinChange(coins3, amount3));
console.log(coinChange(coins4, amount4));
console.log(coinChange(coins5, amount5));
