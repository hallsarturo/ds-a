

//  Best Time to Buy and Sell Stock II

// Solution
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can sell and buy the stock multiple times on the same day, ensuring you never hold than one share of the stock.

// Find and return the maximum profit you can achieve.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

// Constraints:

// 1 <= prices.length <= 3 * 104
// 0 <= prices[i] <= 104

// const prices = [7, 1, 5, 3, 6, 4];
// const prices = [1, 2, 3, 4, 5];
// const prices = [7, 6, 4, 3, 1];
// const prices = [6, 1, 3, 2, 4, 7];
const prices = [2, 1, 2, 0, 1];

function maxProfit(prices) {
    // Array is descendant
    let isDescendant = true;
    for (let i = 0; i < prices.length - 1; i++) {
        let j = i + 1;

        if (prices[j] > prices[i]) {
            isDescendant = false;
            break;
        }
    }
    if (isDescendant) {
        console.log('array is descendant');
        return 0;
    } else {
        // Array is ascendent
        let isAscendant = true;
        let currentProfit;
        for (let i = 0; i < prices.length - 1; i++) {
            let j = i + 1;

            if (prices[j] < prices[i]) {
                isAscendant = false;
                break;
            }
        }

        // Mixed Array
        if (!isAscendant) {
            console.log('Array is Mixed');
            let myStock = null;
            let currentProfit = 0;

            for (let i = 0; i < prices.length; i++) {
                let j = i + 1;

                // If today's value is higher than my stock, Sell
                if (myStock !== null && myStock < prices[i]) {
                    currentProfit += prices[i] - myStock;
                    myStock = null;
                }

                // if today's is cheaper than tomorrrows BUY
                if (prices[i] < prices[j]) {
                    myStock = prices[i];
                }
            }
            return currentProfit;
        } else {
            // Ascendant array
            console.log('Array is Ascendant');
            return (currentProfit = prices[prices.length - 1] - prices[0]);
        }
    }
}

console.log(maxProfit(prices));
