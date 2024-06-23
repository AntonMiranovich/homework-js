// 36. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все
// строки переведены в нижний регистр.


const lowerCase = (arr) => arr.map(el => el.toLowerCase())

console.log(lowerCase(['anTon', 'Hello', 'WorlD']));