// 7. Вычислить факториал числа используя рекурсию
// Входные: 4 → Результат: 24
// Входные: 5 → Результат: 120
// Входные: 3 → Результат: 6

const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(3));