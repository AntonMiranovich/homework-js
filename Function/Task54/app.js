// 54. Напишите функцию, которая принимает строку и возвращает новую строку, где
// повторяющиеся символы заменены на один символ. Например, для строки "aaabbbcc"
// результат должен быть "abc".

const isStr = str => {
	const array = str.split('')
	let el = ''
	let newStr = []
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== el) {
			newStr.push(array[i])
			el = array[i]
		}
	}
	return newStr.join('')
}
console.log(isStr('aaabbbcc'))