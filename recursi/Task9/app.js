// 9. Реализуйте поиск максимального числа статичного массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 4
// Входные: [10, 5, 8] → Результат: 10

let maxVal = -Infinity

function test(array, maxVal) {
    if (array.length === 0) return maxVal
    if (array[0] > maxVal) maxVal = array[0]
    return test(array.slice(1), maxVal)
}

console.log(test([1, 2, 3, 4], maxVal));
console.log(test([10, 5, 8], maxVal)); 