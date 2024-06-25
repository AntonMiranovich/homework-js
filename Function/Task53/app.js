// 53. Реализуйте функцию, которая принимает строку в формате JSON и возвращает объект, соответствующий этой строке. Не используйте встроенные методы JSON.parse.

const customJSONParse = str => {
    const strReplace = str.replaceAll(/\s|\{|\}/g, '').split(',')

    const arrArr = strReplace.map(el => el.split(':'))

    const result = {}

    arrArr.forEach(el => result[el[0].replaceAll(/\'|\"/g, '')] = el[1].replaceAll(/\'|\"/g, ''))

    return result
}

console.log(customJSONParse('{"age": 30, "city": "New York" , "name":"Anton"}'));
