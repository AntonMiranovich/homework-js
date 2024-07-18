// 8. Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)


const a = 'май'

switch (a) {
    case 'ноябрь':
    case 'декабрь':
    case 'январь':
        console.log('Зима');
        break;

    case 'февраль':
    case 'март':
    case 'апрель':
        console.log('Весна');
        break;

    case 'май':
    case 'июнь':
    case 'июль':
        console.log('Лето');
        break;

    case 'август':
    case 'сентябрь':
    case 'октябрь':
        console.log('Осень');
        break;

    default:
        break;
}