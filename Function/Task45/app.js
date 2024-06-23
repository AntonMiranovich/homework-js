// 45. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где все
// элементы, кратные 3, заменены на 'Fizz', а кратные 5 - на 'Buzz'. Элементы, кратные и 3 и 5,
// заменяются на 'FizzBuzz'.

const fizzBuzz = (arr) => {
    const result = []

    arr.forEach(el => {
        if (el % 3 == 0 && el % 5 == 0) {
            result.push('FizzBuzz')
        } else if (el % 3 == 0) {
            result.push('Fizz')
        } else if (el % 5 == 0) {
            result.push('Buzz')
        }
    })

    return result
}


console.log(fizzBuzz([1, 2, 5, 3, 15, 30]));