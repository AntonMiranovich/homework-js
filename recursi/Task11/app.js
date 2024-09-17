// 11. На входе целое число n. Найдите сумму цифр числа с использованием рекурсии.
// Входные: 123 → Результат: 6
// Входные: 456 → Результат: 15
// Входные: 987 → Результат: 24

// const sumNumber = (n) => {
//     if (n.length === 0) return 0
//     return +String(n)[0]+ +sumNumber(String(n).slice(1))
// }
const sumNumber = (n) => {
    if (n === 0) return 0;
    return (n % 10) + sumNumber(Math.floor(n / 10));
}

console.log(sumNumber(123));
console.log(sumNumber(456));
console.log(sumNumber(987));

