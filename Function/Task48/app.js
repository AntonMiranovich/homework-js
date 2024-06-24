// 48. Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий все простые числа

const checkArr = (arr) => {
    const res = []

    for (let i = 0; i < arr.length; i++) {
        let tempalaryArr = []

        for (let a = 2; a <= arr[i]; a++) {
            if (arr[i] % a == 0) tempalaryArr.push(arr[i])
        }

        if (tempalaryArr.length == 1) {
            res.push(arr[i])
            tempalaryArr = []
        }
    }
    return res
}

console.log(checkArr([3, 5, 6, 7, 8, 9, 11, 14]));