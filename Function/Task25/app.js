// 25. Напишите функцию, которая принимает число и возвращает массив всех чисел от 1 до
// этого числа.


const numberToACertainNumber = (num) => {
    const res = []
    for (let i = 0; i < num - 1; i++) {
        res.push(i + 1)
    }
    return res
}

console.log(numberToACertainNumber(10));