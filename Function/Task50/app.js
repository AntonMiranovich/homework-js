// 50. Напишите функцию, которая принимает массив чисел и возвращает объект, где ключи - это
// числа, а значения - их квадраты.

const objNum = (arr) => {
    const obj = {}

    arr.forEach(el => obj[el] = el ** 2)

    return obj
}

console.log(objNum([3, 5, 7, 9]));
