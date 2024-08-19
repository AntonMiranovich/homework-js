// 4. Реализуйте класс MathСalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод

class MathCalculation {
    constructor(n) {
        if (typeof n !== 'number' || n <= 0) {
            throw new Error("Параметр должен быть положительным числом");
        }

        this.n = n;
        this.array = this.generateArray();
    }

    generateArray() {
        const arr = [];
        for (let i = 0; i < this.n; i++) {
            arr.push(Math.floor(Math.random() * 100) + 1);
        }
        return arr;
    }

    countEvenNumbers() {
        let count = 0;
        for (let num = 0; num < this.array.length; num++) {
            num % 2 == 0 ? count++ : null
        }
        return count;
    }

    display() {
        console.log("Сгенерированный массив:", this.array);
        console.log("Количество четных чисел:", this.countEvenNumbers());
    }
}


try {
    const mathCalc = new MathCalculation(8);
    mathCalc.display();
} catch (error) {
    console.error(error.message);
}
