import { Dictionary } from './dictionary.js';

const translations = new Dictionary();

translations.set('hello', 'olá');
translations.set('thank you', 'obrigado');
translations.set('book', 'livro');
translations.set('cat', 'gato');
translations.set('computer', 'computador');

function translateWord(word) {
    if (translations.hasKey(word)) {
        const translation = translations.get(word);
        console.log(`The translation of "${word}" is "${translation}"`);
    } else {
        console.log(`Sorry, no translation found for "${word}"`);
    }
}

translateWord('puta');
console.log('All translations: ', translations.values())
