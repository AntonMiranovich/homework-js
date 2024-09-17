// 10. На входе строка s. Проверьте, является ли строка палиндромом (читается одинаково в обе
//     стороны), используя рекурсию.
//     Входные: "madam" → Результат: True
//     Входные: "hello" → Результат: False
//     Входные: "racecar" → Результат: True


const palindrom = (s) => {
    if (s.length <= 1) return true
    if (s[0] !== s[s.length - 1]) return false
    return palindrom(s.slice(1, -1))
}

console.log(palindrom("madam"));
console.log(palindrom("hello"));
console.log(palindrom("racecar"));
