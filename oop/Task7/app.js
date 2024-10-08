// 7. Пользователь вводит три числа: a, b и c. Напишите класс, которая определяет, является ли тройка
//  чиселсторонамитреугольника. Для этого следует проверитьследующиеусловия:
//  1.
//  Сумма двух сторон должна быть больше третьей стороны.(a+b>c,a+c>b,b+c>a)
//  2. Еслиэтотак,тодалееопределить,какойтиптреугольникаможнопостроить:
//  • Есливсетристороныравны,выведите  Равностороннийтреугольник.
//  • Еслидвестороныравны,выведите    Равнобедренныйтреугольник.
//  • Есливсетристороныразные,выведите   Разностороннийтреугольник.
//  3. Если треугольник не существует (условие не выполняется), выведите Треугольник не
//  существует.
//  Добавьтепроверкуна вводтолькочисел.
//  Входные: 5, 5, 5 → Результат: Равносторонний треугольник
//  Входные: 3, 4, 5 → Результат: Разносторонний треугольник
//  Входные: 6, 6, 10 → Результат: Равнобедренный треугольник
//  Входные: 1, 2, 3 → Результат: Треугольник не существует
//  Входные: 10, 15, 25 → Результат: Треугольник не существует
//  Входные: 7, 7, 14 → Результат: Треугольник не существует

class СheckingTheTriangle {
    checkTriangle(a, b, c) {
        if (a + b > c && a + c > b && b + c > a) {
            if (a === b && b == c) {
                return `Триугольник со сторонами ${a} ${b} ${c} --- Равносторонний треугольник`
            } else if (a === b || b === c || a === c) {
                return `Триугольник со сторонами ${a} ${b} ${c} --- Равнобедренный треугольник`
            } else {
                return `Триугольник со сторонами ${a} ${b} ${c} --- Разносторонний треугольник`
            }
        } else {
            return `Триугольника со сторонами ${a} ${b} ${c} --- Не существует`
        }
    }
}

const checkingTheTriangle = new СheckingTheTriangle()
console.log(checkingTheTriangle.checkTriangle(5, 5, 5));
console.log(checkingTheTriangle.checkTriangle(3, 4, 5));
console.log(checkingTheTriangle.checkTriangle(6, 6, 10));
console.log(checkingTheTriangle.checkTriangle(10, 15, 25));

