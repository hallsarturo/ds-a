// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them
// is that adjacent houses have security systems connected and it will automatically contact the police
// if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

const rob = function (nums) {
    if (nums.length === 1) return nums[0];

    const dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(
            nums[i] + dp[i - 2], // Rob this house
            dp[i - 1] // Skip this house
        );
    }

    return dp[nums.length - 1];
};

console.log(rob([2, 1, 1, 2]));
