// 13. Пользователь вводит четырехзначное число. Напишите скрипт, который будет
// выявлять является ли каждое составляющее числа четным либо нечетным.
// Добавить проверку на ввод только чисел
// 1234 -> 1 – неч 2 – чет 3 – неч 4 – чет

const num = 1234
let res=''

for (let i = 0; i < String(num).length; i++) {
    res += `${String(num)[i]}-${+(String(num)[i]) % 2 == 0 ? 'чет ' : 'неч '}`

}

console.log(res);