// 13. Вы вводите значение с клавиатуры. Если значение равно 0, то вывести ‘Ноль’, если
// < 0, то вывести ‘Отрицательное’, если > 0, то вывести ‘Положительное’

const num = +prompt('enter number')

console.log(num == 0 ? `Ноль` : num < 0 ? 'Отрицательное' : 'Положительное');