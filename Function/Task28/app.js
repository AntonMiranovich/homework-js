// 28. Напишите функцию, которая принимает строку и возвращает новую строку, где все буквы
// переведены в противоположный регистр.


const strCase = (str) => {
    let strResult = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            strResult += str[i].toUpperCase()
        } else {
            strResult += str[i].toLowerCase()
        }
    }

    return strResult
}

console.log(strCase('AvxcfASWQzxcxzcASFDWEQ'));