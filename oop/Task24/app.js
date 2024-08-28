// 9. Создайте родительский класс RandomNumberArrayGenerator, который будет генерировать массив
// случайных чисел с помощью метода generateArray(). Затем создайте дочерний класс MultipleFilter,
// который переопределяет метод generateArray() и оставляет в массиве только те числа, которые
// кратны 3 или 7.
// Входные: new MultipleFilter().generateArray() → Результат: [21, 14, 9] (может быть другим, так как числа
// случайные)
// Входные: new RandomNumberArrayGenerator().generateArray() → Результат: [13, 21, 8, 9, 14, 27] (может быть
// другим, так как числа случайные)


class RandomNumberArrayGenerator {
    generateArray() {
        const array = []
        for (let i = 0; i < 10; i++) {
            array.push(Math.floor(Math.random() * 100))
        }
        return array
    }
}


class MultipleFilter extends RandomNumberArrayGenerator {
    generateArray() {
        const randomArray = super.generateArray()
        return randomArray.filter(el => el % 3 == 0 || el % 7 == 0)
    }
}

const multipleFilter = new MultipleFilter()
console.log(multipleFilter.generateArray());
