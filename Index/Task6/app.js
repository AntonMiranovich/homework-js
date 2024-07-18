// 6. На вход программе подается строка текста. Напишите программу, которая
// проверяет, что строка заканчивается подстрокой .com или .ru. Если заканчивается,
// то вывести true, в противном случае false

const str = 'asdwqe.com'

const arr = str.split('.')
console.log(arr[arr.length - 1] == 'com' || arr[arr.length - 1] == 'ru' ? true : false);

