// 35. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все
// строки переведены в верхний регистр

const upperCase = (arr) => arr.map(el => el.toUpperCase())

console.log(upperCase(['anTon', 'Hello', 'WorlD']));