// 41. Напишите функцию, которая принимает строку и возвращает объект, где ключи - это буквы,
// а значения - количество их повторений в строке.


const checkStrObj = (str) => {
    const obj = {}

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i].toLowerCase()]) {
            obj[str[i].toLowerCase()] = obj[str[i].toLowerCase()] + 1
        } else {
            obj[str[i].toLowerCase()] = 1
        }
    }

    return obj

}


console.log(checkStrObj('asdasdSAASDsadasdqwesdazcx'));

