// 47. Напишите функцию, которая принимает строку и возвращает новую строку, где все
// символы идут в обратном порядке.

const simbolReverse = (str) => {
    const simbol = '!@#$%^&*'
    const simbolIsArray = []
    for (let i = 0; i < str.length; i++) {
        if (simbol.includes(str[i])) {
            simbolIsArray.push(str[i])
        }
    }

    const reverseSimbol = simbolIsArray.reverse()
    let resultStr = ''

    for (let i = 0; i < str.length; i++) {
        if (simbol.includes(str[i])) {
            resultStr += reverseSimbol[0]
            reverseSimbol.shift()
        } else {
            resultStr += str[i]
        }
    }

    return resultStr
}

console.log(simbolReverse('anton@asd#fsxcs%sxadcz&'));