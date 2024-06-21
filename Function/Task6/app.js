// 6. Напишите функцию, которая принимает массив чисел и возвращает среднее значение всех
// элементов.

const averageValue = (arr) => {
    const result = arr.reduce((el, sum) => sum += el / arr.length, 0)
    return result
}

console.log(averageValue([1, 2, 3, 4, 5]));