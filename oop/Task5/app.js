// 5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем замены букв
//     исходного слова или фразы). Создать функцию для вывода ряда true, если слова являются

class Anagram {

    isAnagram(sting1, sting2) {
        const normalizedSting1 = sting1.replace(' ', '').toLowerCase();
        const normalizedSting2 = sting2.replace(' ', '').toLowerCase();

        return normalizedSting2.split('').sort().join('') === normalizedSting1.split('').sort().join('');
    }
}

const anagram = new Anagram();

console.log(anagram.isAnagram('listen', 'silent')); 
console.log(anagram.isAnagram('hello', 'world'));  