// 7. Напишите функцию, которая принимает массив строк и возвращает массив только тех
// строк, которые содержат больше пяти символов.

const filterArray = (arr) => arr.filter((el) => el.length > 5)

console.log(filterArray(['antonn', 'asd', 'asdsadasdasd', 'dasda']));