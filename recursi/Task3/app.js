// 3. На входе число n. Вычислите сумму натуральных чисел от 1 до n используя рекурсию
// Входные: 5 → Результат: 15
// Входные: 3 → Результат: 6
// Входные: 10 → Результат: 55

const sumNumber = (n) => {
    if (n <= 1) return n;
    return n + sumNumber(n - 1);
}

console.log(sumNumber(5));
console.log(sumNumber(3));
console.log(sumNumber(10));