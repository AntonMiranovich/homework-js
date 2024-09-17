// 6. На входе массив array. Посчитайте количество элементов массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 4
// Входные: [10, 20, 30] → Результат: 3
// Входные: [1, [2, [3,[4]]], 4] → Результат: 5

const test=(array)=> {
    if (array.length === 0) return 0;
    const checkArr = Array.isArray(array[0]) ? test(array[0]) : 1;
    return checkArr + test(array.slice(1));
  }
  
  console.log(test([1, 2, 3, 4])); 
  console.log(test([10, 20, 30])); 
  console.log(test([1, [2, [3,[4]]], 4])); 