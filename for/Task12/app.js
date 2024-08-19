// 12. Найдите минимальное значение в массиве используя цикл


const array = [4, 7, 3, 9, 1, 6]

let min = array[0]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    element < min ? min = element : null
}