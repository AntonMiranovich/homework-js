// 5. Создайте родительский класс Number, который будет хранить число. Затем создайте дочерний
// класс PalindromeChecker, который будет проверять, является ли это число палиндромом.
// Входные: new PalindromeChecker(-121) → Результат: false
// Входные: new PalindromeChecker(10) → Результат: false
// Входные: new PalindromeChecker(12321) → Результат: true

class Number {
    constructor(num) {
        this.num = num
    }
}

class PalindromeChecker extends Number {
    palindrome() {
        return String(this.num) == String(this.num).split('').reverse().join('') ? true : false
    }
}

const palindromeChecker = new PalindromeChecker(121)
console.log(palindromeChecker.palindrome());
