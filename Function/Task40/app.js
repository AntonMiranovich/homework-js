// 40. Напишите функцию, которая принимает число и возвращает массив всех делителей этого
// числа.


const dividersOfTheNumber = (num) => {
    const arrayDividers = []

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) arrayDividers.push(i)
    }

    return arrayDividers
}

console.log(dividersOfTheNumber(20));