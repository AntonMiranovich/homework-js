// 29. Напишите функцию, которая принимает массив чисел и возвращает максимальное
// значение.

const filterNum = (arr) => {
    let result = 0

    for (let i = 0; i < arr.length; i++) arr[i] > result ? result = arr[i] : null

    return result
}

console.log(filterNum([1, 2, 3, 4, 5, 6, 7, 11, 2, 15]));