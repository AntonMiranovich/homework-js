// 6. Реализуйте класс, который находит полное число метров по заданному числу сантиметров.
// Добавьтепроверкуна вводтолькочисел.
// Входные: 345 →Результат: 3 метров
// Входные: 100 → Результат: 1 метр
// Входные: 99 →Результат: 0 метров
// Входные: 750 →Результат: 7 метров
// Входные: 10 →Результат: 0 метров
// Входные: hi → Результат: Вы ввелине число!

class TheNumberOfMeters {
    constructor(cm1, cm2, cm3) {
        const _cm1 = cm1
        const _cm2 = cm2
        const _cm3 = cm3
        this.numOfMetr(_cm1)
        this.numOfMetr(_cm2)
        this.numOfMetr(_cm3)
    }


    numOfMetr(cm) {
        if (isNaN(cm)) throw new Error('Вы ввелине число!')

        console.log(`${Math.floor(cm / 100)} метр(ов)`);
    }

}


try {
    new TheNumberOfMeters(100, 345, 'hi')
} catch (error) {
    console.error(error.message);
}


// class TheNumberOfMeters {
//     numOfMetr(cm) {
//         if (isNaN(cm)) throw new Error('Вы ввелине число!')

//         return `${Math.floor(cm / 100)} метр(ов)`
//     }

// }


// try {
//     const theNumberOfMeters = new TheNumberOfMeters()
//     console.log(theNumberOfMeters.numOfMetr(345));
//     console.log(theNumberOfMeters.numOfMetr(100));
//     console.log(theNumberOfMeters.numOfMetr(99));
//     console.log(theNumberOfMeters.numOfMetr('hi'));
// } catch (error) {
//     console.error(error.message);
// }