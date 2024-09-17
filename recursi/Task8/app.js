// 8. Вычислите сумму массива чисел статичного массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 10
// Входные: [10, 20, 30] → Результат: 60

const sumArray = (array) => {
    if (array.length === 0) return 0;
    return array[0] + sumArray(array.slice(1));
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([10, 20, 30]));