// 49. Напишите функцию, которая принимает строку и возвращает новую строку, где каждое
// слово начинается с заглавной буквы.

const upperStr = (str) => {
    const arrStr = str.split(' ')

    const result = []

    arrStr.forEach(el => result.push(`${el[0].toUpperCase()}${el.slice(1)} `))

    return result.join('')
}

console.log(upperStr('hello my name anton'));