// 1. Найти максимальное число из 2 введенных (2 способа)

const num1 = +prompt('enter num')
const num2 = +prompt('enter num2')

console.log(num1 > num2 ? num1 : num2);

console.log(Math.max(num1, num2));