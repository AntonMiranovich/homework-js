// 13. Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx.

const str = 'xxxx-xx-xx'

console.log(str.split('-').reverse().join('.'));