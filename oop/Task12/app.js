// 5. Создайте класс NumberGenerator с методом generateNumbers(size), который возвращает массив
// чисел от 1 до size. Наследуйте от него класс EvenNumbers, добавив метод getEvenNumbers(size),
// который вызывает generateNumbers(size) и фильтрует только четные числа.
// Входные: EvenNumbers(6).getEvenNumbers() → Результат: [2, 4, 6]
// Входные: EvenNumbers(10).getEvenNumbers() → Результат: [2, 4, 6, 8, 10]
// Входные: EvenNumbers(3).getEvenNumbers() → Результат: [2]



class NumberGenerator {
    generateNumbers(size) {
        const arrNum = []
        for (let i = 1; i < size; i++) {
            arrNum.push(i)
        }

        return arrNum
    }
}

class EvenNumbers extends NumberGenerator {
    getEvenNumbers(size) {
        this.generateNumbers(size).filter(el => el % 2 == 0)
    }
}

const evenNumbers = new EvenNumbers()
console.log(evenNumbers.getEvenNumbers(10));
