// 20. Напишите функцию, которая принимает массив строк и возвращает массив тех строк,
// которые начинаются с буквы 'A'.



const startA = (arr) => arr.filter(el => el[0] == 'A' ? el : null)

console.log(startA(['Anton', 'Hello', 'World', 'Asd', 'acxasd']));