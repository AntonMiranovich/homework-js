// 34. Напишите функцию, которая принимает массив строк и возвращает массив тех строк,
// которые содержат подстроку 'abc'.

const checkStr = (arr) => arr.filter(el => el.includes('abc'))

console.log(checkStr(['abcasd', 'abcwqeqweqwe', 'qweqwe', 'ytrytry7']));