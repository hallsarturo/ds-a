// Check if every string in an array contains at least one vowel.

const words = ['apple', 'isky', 'orange', 'irhythm', 'idea'];

console.log(
    words.every((e) => {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        return vowels.some((vowel) => e.includes(vowel));
    })
);
