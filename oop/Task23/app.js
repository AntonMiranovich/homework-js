// 8. Создайте родительский класс NumberArrayGenerator, который будет генерировать массив чисел
// от 1 до 8 с помощью метода generateArray(). Затем создайте дочерний класс EvenNumberFilter,
// который переопределяет метод generateArray() и оставляет в массиве только чётные числа.
// Входные: new EvenNumberFilter().generateArray() → Результат: [2, 4, 6, 8]

class NumberArrayGenerator {
    generateArray() {
        const array = []
        for (let i = 1; i <= 8; i++) {
            array.push(i)
        }
        return array
    }
}

class EvenNumberFilter extends NumberArrayGenerator {
    generateArray() {
        const arrayNumber = super.generateArray()
        return arrayNumber.filter(el => el % 2 == 0)
    }
}

const evenNumberFilter = new EvenNumberFilter()
console.log(evenNumberFilter.generateArray());


