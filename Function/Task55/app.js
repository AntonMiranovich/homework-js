// 55. Напишите функцию, которая принимает число n и возвращает двумерный массив,
// представляющий треугольник чисел Флойд до n строк. Например, для n = 5 результат
// должен быть:
// [
//  [1],
//  [2, 3],
//  [4, 5, 6],
//  [7, 8, 9, 10],
//  [11, 12, 13, 14, 15]
// ]

const isArr = n => {
	let num = 1;
	const arr = [];
	for (let i = 1; i <= n; i++) {
			const innerArr= [];
			for (let j = 1; j <= i; j++) {
				innerArr.push(num);
					num++;
			}
			arr.push(innerArr);
	}
	return arr;
}
console.log(isArr(5))