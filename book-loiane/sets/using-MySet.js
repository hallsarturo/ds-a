import { MySet } from './mySet-class.js';

const article = {
    title: 'The importance of data structures in programming',
    content: '...',
    tags: new MySet(),
};

article.tags.add('programming');
article.tags.add('data structures');
article.tags.add('algorithms');
article.tags.add('programming');

console.log(article.tags.values());

//