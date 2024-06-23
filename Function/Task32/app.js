// 32. Напишите функцию, которая принимает массив чисел и возвращает индекс первого
// отрицательного числа.


const minimalIndex = (arr) => {
    let minIndex = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return minIndex = i
        }
    }

    return minIndex
}

console.log(minimalIndex([3, 5, -4, 4, 2, 54, -1]));