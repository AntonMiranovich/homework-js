// 3. Пользователь вводит число от 1 до 7, соответствующее дню недели. Необходимо
// вывести день для введенного числа.
// 1 -> Понедельник




const num = +prompt('enter num')
const arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
console.log(num > 7 ? 'Введены некоректные данные' : arr[num - 1]);

// switch (num) {
//     case 1:
//         console.log('Понедельник');
//         break;

//     case 2:
//         console.log('Вторник');
//         break;

//     case 3:
//         console.log('Среда');
//         break;

//     case 4:
//         console.log('Четверг');
//         break;

//     case 5:
//         console.log('Пятница');
//         break;

//     case 6:
//         console.log('Суббота');
//         break;

//     case 7:
//         console.log('Воскресенье');
//         break;


//     default:
//         console.log('Введены некоректные данные');
//         break;
// }