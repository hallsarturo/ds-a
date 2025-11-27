// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const strs = ["cir","car"]

const longestCommonPrefix = function (strs) {
    let maxPrefix = [];

    // Break the words into a 2D matrix array. Iterate every element of each index for exact match, if match, push to maxPrefix. Stop when no exact match is found.

    // break words into 2d array
    const sorted = strs.sort((a, b) => a.length - b.length);
    const twoDArray = sorted.map((word) => word.split(''));

    let prev = [];
    for (let i = 0; i < sorted[0].length; i++) {
        twoDArray.forEach((word) => prev.push(word[i]));
        if (prev.every((e) => e === twoDArray[0][i])) {
            maxPrefix.push(twoDArray[0][i]);
        } else {
            break
        }
        prev.splice(0, prev.length);
    }

    if (maxPrefix.length === 0) {
        return '';
    } else {
        return maxPrefix.join('');
    }
};

console.log(longestCommonPrefix(strs));
