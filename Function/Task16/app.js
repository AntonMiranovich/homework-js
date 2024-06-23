//16. Напишите функцию, которая принимает число и возвращает сумму его цифр.

const sumNum = (num) => {
    let result = 0
    const numArr = String(num).split('')
    for (let i = 0; i < numArr.length; i++) {
        result += +numArr[i]
    }

    return result
}

console.log(sumNum(1992));