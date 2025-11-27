import { HashTable } from './hash-table.js';

const addressBook = new HashTable();

addressBook.put('Gandalf', 'gandalf@email.com');
addressBook.put('John', 'johnsnow@email.com');
addressBook.put('Tyrion', 'tyrion@email.com');

console.log(addressBook.hash('Gandalf'));
console.log(addressBook.hash('John'));
console.log(addressBook.hash('Tyrion'));

console.log(addressBook.get('Gandalf'));
