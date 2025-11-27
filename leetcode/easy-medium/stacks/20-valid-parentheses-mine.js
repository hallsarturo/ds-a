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
    const items = s.split('');
    let parenthesisToClose = 0;
    let bracketToClose = 0;
    let curlyToClose = 0;

    for (let i = items.length - 1; i >= 0; i--) {
        switch (items[i]) {
            case ')':
                parenthesisToClose++;
                break;
            case ']':
                bracketToClose++;
                break;
            case '}':
                curlyToClose++;
                break;
            case '(':
                if (
                    parenthesisToClose === 0 ||
                    items[i + 1] === ']' ||
                    items[i + 1] === '}'
                ) {
                    return false;
                } else {
                    parenthesisToClose--;
                }
                break;
            case '[':
                if (
                    bracketToClose === 0 ||
                    items[i + 1] === ')' ||
                    items[i + 1] === '}'
                ) {
                    return false;
                } else {
                    bracketToClose--;
                }
                break;
            case '{':
                if (
                    curlyToClose === 0 ||
                    items[i + 1] === ')' ||
                    items[i + 1] === ']'
                ) {
                    return false;
                } else {
                    curlyToClose--;
                }
                break;
        }
    }
    if (
        parenthesisToClose !== 0 ||
        bracketToClose !== 0 ||
        curlyToClose !== 0
    ) {
        return false;
    } else {
        return true;
    }
};

console.log(isValid("([)]"));
