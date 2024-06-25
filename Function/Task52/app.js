// 52. Напишите функцию, которая принимает строку и возвращает объект, где ключи - это
// уникальные слова из строки, а значения - количество их повторений. Строка может
// содержать знаки препинания, которые нужно игнорировать.

const countWords = (str) => {
    const cleanedStr = str
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .toLowerCase()

    const wordsArr = cleanedStr.split(' ')

    const wordCounts = {}

    for (const word of wordsArr) {
        if (word) {
            wordCounts[word] = (wordCounts[word] || 0) + 1
        }
    }

    return wordCounts
}

console.log(countWords('Hello Anton Anton Hello world'))