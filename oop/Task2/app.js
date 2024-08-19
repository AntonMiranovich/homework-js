// 2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
// разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
// соответствующие функции. Добавить проверки на ввод

class Calculator {
    constructor(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Оба аргумента должны быть числами');
        }
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }
}


try {
    const calc = new Calculator(10, 5);

    console.log(`Сумма: ${calc.add()}`);
    console.log(`Разность: ${calc.subtract()}`);
    console.log(`Произведение: ${calc.multiply()}`);
    console.log(`Частное: ${calc.divide()}`);
} catch (error) {
    console.error(error.message);
}
