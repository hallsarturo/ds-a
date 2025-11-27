// 4.2 Write a recursive function to count the number of items in a
// list.

function count(list) {
    let total = 0;
    if (list.length === 0) {
        return total;
    } else {
        total++;
        list.shift();
        return total + count(list);
    }
}

const list = ['pepe', 20, 'sánchez', 50, 'Jasinto', true];
console.log(count(list));
