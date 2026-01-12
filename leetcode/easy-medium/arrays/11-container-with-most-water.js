// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const height2 = [3, 2];
const height3 = [1, 0, 0, 0, 0, 0, 0, 2, 2];

const maxArea = function (height) {
    if (height.length === 2) {
        return 1 * height[0] < [height[1]] ? height[0] : height[1];
    }

    let maxArea = null;
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    let distance = rightIndex - leftIndex;

    while (distance > 1) {
        let currentArea = null;
        distance = rightIndex - leftIndex;

        if (height[leftIndex] < height[rightIndex]) {
            // case left index value is less
            currentArea = height[leftIndex] * distance;
            if (maxArea < currentArea) maxArea = currentArea;
            leftIndex++;
        } else if (height[leftIndex] > height[rightIndex]) {
            // case right index value is less
            currentArea = height[rightIndex] * distance;
            if (maxArea < currentArea) maxArea = currentArea;
            rightIndex--;
        } else {
            // both indexes values are equal
            currentArea = height[leftIndex] * distance;
            if (maxArea < currentArea) maxArea = currentArea;
            leftIndex++;
            rightIndex--;
        }
    }
    return maxArea;
};

console.log(maxArea(height3));
