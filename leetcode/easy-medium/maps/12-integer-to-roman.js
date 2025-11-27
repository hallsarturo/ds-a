// Seven different symbols represent Roman numerals with the following values:

// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

// If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
// If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
// Given an integer, convert it to a Roman numeral.

const intToRoman = function (num) {
    const table = [];
    table[1] = 'I';
    table[5] = 'V';
    table[10] = 'X';
    table[50] = 'L';
    table[100] = 'C';
    table[500] = 'D';
    table[1000] = 'M';

    const values = [1000, 500, 100, 50, 10, 5, 1];
    const stack = [];

    // If does not start with 4 or 9
    function maximalValue(num) {
        let i = 0;
        let index;
        while (num / values[i] < 1) {
            i++;
        }
        index = values[i];
        stack.push(table[index]);
        num -= values[i];
        return num;
    }

    // If starts with 4 or 9
    function substractiveForm(num) {
        // hardcoded substractive forms:

        if (num <= 4) {
            stack.push(table[1]);
            stack.push(table[5]);
            num -= 4;
            return num;
        } else if (num === 9) {
            stack.push(table[1]);
            stack.push(table[10]);
            num -= 9;
            return num;
        } else if (num >= 40 && num <= 89) {
            stack.push(table[10]);
            stack.push(table[50]);
            num -= 40;
            return num;
        } else if (num >= 90 && num <= 399) {
            stack.push(table[10]);
            stack.push(table[100]);
            num -= 90;
            return num;
        } else if (num >= 400 && num <= 899) {
            stack.push(table[100]);
            stack.push(table[500]);
            num -= 400;
            return num;
        } else if (num >= 900 && num <= 1000) {
            stack.push(table[100]);
            stack.push(table[1000]);
            num -= 900;
            return num;
        }

        // num -= values[i - 1] - values[i];
    }

    // Main flow
    while (num > 0) {
        const firstDigit = Number(String(num)[0]);
        if (firstDigit !== 4 && firstDigit !== 9) {
            num = maximalValue(num);
        } else {
            num = substractiveForm(num);
        }
    }
    const result = stack.join('');
    return result;
};

console.log(intToRoman(58));
