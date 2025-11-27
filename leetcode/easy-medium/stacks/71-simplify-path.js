// You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.

// The rules of a Unix-style file system are as follows:

// A single period '.' represents the current directory.
// A double period '..' represents the previous/parent directory.
// Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
// Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. For example, '...' and '....' are valid directory or file names.
// The simplified canonical path should follow these rules:

// The path must start with a single slash '/'.
// Directories within the path must be separated by exactly one slash '/'.
// The path must not end with a slash '/', unless it is the root directory.
// The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.
// Return the simplified canonical path.

// Expected  "/c"

const simplifyPath = function (path) {
    const stack = [];
    let blocks = [];

    for (let i = 0; i < path.length; i++) {
        // initialize stack with /
        if (stack.length === 0) {
            stack.push(path[i]);
        }
        // If it is a second /, don't push it
        if (
            (stack[stack.length - 1] === '/' && path[i] !== '/') ||
            stack[stack.length - 1] !== '/'
        ) {
            // Fill empty blocks with either letters or dots
            while (i < path.length && path[i] !== '/') {
                blocks.push(path[i]);
                i++;
            }
            if (blocks[blocks.length - 1] !== '.') {
                stack.push(blocks.join(''));
                stack.push('/');
                blocks = [];
            } else if (blocks.length > 2) {
                stack.push(blocks.join(''));
                stack.push('/');
                blocks = [];
            } else if (blocks.length === 2) {
                if (stack.length > 1) {
                    stack.pop();
                    stack.pop();
                    blocks = [];
                } else {
                    blocks = [];
                }
            } else if (blocks.length === 1) {
                blocks = [];
            }
        }
    }

    if (stack.length > 0 && stack[stack.length - 1] === '/') {
        stack.pop();
    }

    if (stack.length === 0) return '/';

    return stack.join('');
};

console.log(simplifyPath('/a/../../b/../c//.//'));
