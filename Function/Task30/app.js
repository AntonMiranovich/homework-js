// 30. Напишите функцию, которая принимает массив чисел и возвращает минимальное
// значение.

const smalNum = (arr) =>  arr.reduce((el, num) => el > num ? num : el, arr[0])

console.log(smalNum([7, 44, 7, 4, 8, 4, 6]));