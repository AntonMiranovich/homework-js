// 13. Напишите функцию, которая принимает строку и возвращает true, если строка является
// палиндромом, и false в противном случае.


const thisPalindrom = (str) => str === str.split('').reverse().join('') ? true : false

console.log(thisPalindrom('anna'));
