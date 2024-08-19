// 10. Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами


const str1 = 'stop'
const str2 = 'post'

console.log(str1.split('').sort().join('')==str2.split('').sort().join('')?true:false);
