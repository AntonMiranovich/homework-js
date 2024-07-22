// 19. На вход программе подается строка текста, состоящая из слов, разделенных
// ровно одним пробелом. Напишите программу, которая подсчитывает количество
// слов в ней

const str = 'Hello my name Anton'

console.log(str.split(' ').length);
console.log(str.length - (str.replaceAll(' ', '').length) + 1);