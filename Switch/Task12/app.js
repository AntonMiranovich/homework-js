// 12. Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6

const num = 43242199

const arr = Array.from(String(num))

let sum = 0

let proiz = 1

for (let i = 0; i < arr.length; i++) {
    sum = sum + +arr[i]
    proiz = proiz * +arr[i]
}

console.log(`${num} -> Сумма цифр = ${sum} Произведение цифр = ${proiz}`);
