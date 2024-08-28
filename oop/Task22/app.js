// 7. Создайте родительский класс NumberGenerator, который будет генерировать и возвращать
// случайное число с помощью метода generateNumber(). Затем создайте дочерний класс
// SquareRootCalculator, который переопределяет метод generateNumber() и находит квадратный
// корень этого числа без использования встроенной функции Math.sqrt().
// Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 16)→
// Результат: 4
// Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 25) →
// Результат: 5


class NumberGenerator {
    generateNumber() {
        return Math.floor(Math.random() * 100);
    }
}

class SquareRootCalculator extends NumberGenerator {
    generateNumber() {
        const randomNumber = super.generateNumber()

        let start = 0;
        let end = randomNumber;
        let mid=(start + end) / 2;

        for (; end - start > 0.000001;) {
            mid = (start + end) / 2;
            if (mid * mid < randomNumber) {
                start = mid;
            } else {
                end = mid;
            }
        }

        return mid;
    }
}


const squareRootCalculator = new SquareRootCalculator();
console.log(squareRootCalculator.generateNumber());