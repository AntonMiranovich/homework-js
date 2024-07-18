// 11. Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки

const str = 'Hello my name'

console.log(str.replaceAll(' ', '').length);
console.log(str.split(' ').slice(0, 1).join());
