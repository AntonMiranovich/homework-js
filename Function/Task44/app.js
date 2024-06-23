// 44. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все
// строки начинаются с заглавной буквы

const upperStr = (arr) => arr.map(el => `${el[0].toUpperCase()}${el.slice(1)}`)

console.log(upperStr(['anton', 'hello', 'world']));