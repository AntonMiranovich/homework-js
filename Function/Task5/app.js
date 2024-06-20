// 5. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все
// строки отсортированы по длине.


const filterArrayLength = (arr) => {
    const resultFilterArray = []

    for (let i = 0; i < arr.length; i++) {
        let temporaryStr = Array(200)

        for (let y = 0; y < arr.length; y++) {
            if (temporaryStr.length > arr[y].length && resultFilterArray.indexOf(arr[y]) == -1) {
                temporaryStr = arr[y]
            }
        }

        resultFilterArray.push(temporaryStr)
    }
    return resultFilterArray
}

console.log(filterArrayLength(['Antonnn', 'I am', 'Javascript', 'Hello']));


