// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.
// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

// Example 1:
const tokens = ['2', '1', '+', '3', '*'];
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

const operators = ['*', '+'];
const operands = [3, 1, 2];

// Example 2:
const tokens2 = ['4', '13', '5', '/', '+'];
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

const operators2 = ['+', '/'];
const operands2 = [5, 13, 4];

// Example 3:
//["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

const evalRPN = function (tokens) {
    let stack = [];

    for (const token of tokens) {
        if (!isNaN(token) && token !== '') {
            stack.push(Number(token));
        } else if (isOperator(token)) {
            const result = currentExpression(stack.pop(), stack.pop(), token);
            stack.push(result)
        }
    }

    return stack[0];

    // helpers
    function isOperator(x) {
        return x === '+' || x === '-' || x === '/' || x === '*';
    }

    function currentExpression(a, b, operator) {
        switch (operator) {
            case '+':
                return b + a;
            case '-':
                return b - a;
            case '/':
                return Math.trunc(b / a);
            case '*':
                return b * a;
        }
    }
};

console.log(evalRPN(tokens));
