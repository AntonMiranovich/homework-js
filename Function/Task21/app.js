// 21. Напишите функцию, которая принимает два числа и возвращает наибольшее общее
// делимое этих чисел.

const res = (a, b) => {
    let res = 0
    for (let i = 2; i < a; i++) {
        if (a % i == 0 && b % i == 0) {
            if (i > res) {
                res = i
            }
        }
    }

    return res
}

console.log(res(10, 15));