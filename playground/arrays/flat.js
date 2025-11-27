// Flatten a deeply nested array to a single level.
const deepNested = [1, [2, [3, [4, [5, 6]]]], 7, [8, [9]]];

console.log(deepNested.flat(Infinity));

