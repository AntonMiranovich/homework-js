// 38. Напишите функцию, которая принимает строку и возвращает новую строку, где все гласные
// заменены на '*'.


const replaseStr = (str) => {
    const vowels = 'aeiouyAEIOUY'
    let result = ''

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            result += '*'
        } else {
            result += str[i]
        }
    }

    return result
}

console.log(replaseStr('dsadvreivhbcjsbactruer'));
