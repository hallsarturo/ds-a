// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const s = '()';
const t = '()[]{}';
const w = '(]';
const x = '([])';
const z = '([)]';

const isValid = function (s) {
    const stack = [];
    const open = ['(', '[', '{'];
    const close = [')', ']', '}'];

    for (let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            stack.push(s[i]);
        } else if (close.includes(s[i])) {
            const last = stack.pop();
            if (open.indexOf(last) !== close.indexOf(s[i])) return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid('[([]])'));
