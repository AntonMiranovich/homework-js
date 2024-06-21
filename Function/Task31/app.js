// 31. Напишите функцию, которая принимает массив строк и возвращает строку, которая
// встречается чаще всего.


const checkLength = (arr) => {
    let result = {
        title: '',
        count: 0
    }

    for (let i = 0; i < arr.length; i++) {
        let tampalaruObj = {
            title: arr[i],
            count: 0
        }

        for (let a = 0; a < arr.length; a++) {
            if (arr[a] === tampalaruObj.title) {
                tampalaruObj.count +=1
            }
        }

        if (tampalaruObj.count > result.count) {
            result = tampalaruObj
        }
    }

    return result
}

console.log(checkLength(['anton', 'an', 'anton', 'an', 'an']));
