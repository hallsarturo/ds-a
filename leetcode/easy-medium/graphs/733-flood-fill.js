// You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill:

// Begin with the starting pixel and change its color to color.
// Perform the same process for each pixel that is directly adjacent (pixels that share a side with the original pixel, either horizontally or vertically) and shares the same color as the starting pixel.
// Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their color if it matches the original color of the starting pixel.
// The process stops when there are no more adjacent pixels of the original color to update.
// Return the modified image after performing the flood fill.

const floodFill = function (image, sr, sc, color) {
    const colorToChange = image[sr][sc];

    const fill = (r, c, newColor) => {
        // Boundary
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) {
            return;
        }

        // Check if current pixel matches original color
        if (image[r][c] !== colorToChange) {
            return;
        }

        // Paint
        image[r][c] = newColor;

        // traverse left
        fill(r, c - 1, newColor);
        // traverse right
        fill(r, c + 1, newColor);
        // traverse up
        fill(r - 1, c, newColor);
        // traverse down
        fill(r + 1, c, newColor);
    };

    if (colorToChange !== color) {
        fill(sr, sc, color);
    }

    return image;
};

console.log(
    floodFill(
        [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ],
        1,
        1,
        2
    )
);
//Output: [[2,2,2],[2,2,0],[2,0,1]]
console.log('\n');
console.log(
    floodFill(
        [
            [0, 0, 0],
            [0, 0, 0],
        ],
        0,
        0,
        0
    )
);
// Output: [[0,0,0],[0,0,0]]
