// 3. Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
// то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы

const str = 'Anton dASDDQWasdwqeSADWQEqsdad asdwASDQWEqe'

console.log(!isNaN(str) ? 'ошибка ввода' : `длинна строки ${str.length}. строка без пробелов в одном регистре -${str.trim().toLowerCase()}`);