// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them
// is that adjacent houses have security systems connected and it will automatically contact the police
// if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

const rob = function (nums) {
    let max = [];
    max.push(nums[0]);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] + (max[i - 2] || 0) > max[i - 1]) {
            max[i] = (max[i - 2] || 0) + nums[i];
        } else {
            max[i] = max[i - 1];
        }
    }

    return max[max.length - 1];
};

console.log(rob([2, 1, 1, 2]));
