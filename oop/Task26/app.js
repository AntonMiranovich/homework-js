// 11. *Создайте класс PascalsTriangle, который будет принимать количество строк
// numRows и содержать метод generateTriangle(), возвращающий первые
// numRows строк треугольника Паскаля.
// Входные: new PascalsTriangle(5).generateTriangle() → Результат: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1],
// [1, 4, 6, 4, 1]]
// Входные: new PascalsTriangle(1).generateTriangle() → Результат: [[1]]


class PascalsTriangle {
    constructor(numRows) {
        this.numRows = numRows
    }

    generateTriangle() {
        const resultArray = []
        const num = this.numRows

        for (let i = 0; i < num; i++) {
            let temporaryArray = []

            for (let j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    temporaryArray.push(1)
                } else {
                    temporaryArray.push(resultArray[resultArray.length - 1][j - 1] + resultArray[resultArray.length - 1][j])
                }
            }


            resultArray.push(temporaryArray)
        }


        return resultArray
    }
}

const pascalsTriangle = new PascalsTriangle(20)
console.log(pascalsTriangle.generateTriangle());
