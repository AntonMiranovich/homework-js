// 16. На вход программе подается строка, состоящая из имени и фамилии человека,
// разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false

const str = 'Chris alan'

console.log(str.split(' ')[0][0] == str.split(' ')[0][0].toUpperCase()&&str.split(' ')[1][0] == str.split(' ')[1][0].toUpperCase());