// 15. Напишите функцию, которая принимает массив строк и возвращает новую строку,
// состоящую из элементов массива, соединенных через запятую.

const oneStr = (arr) => {
    let result = ''
    arr.forEach(el => result += `${el} , `)
    return result.slice(0, -2)
}

console.log(oneStr(['Anton', 'Hello', 'Test']));