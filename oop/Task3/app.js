// 3. Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки.

class WordString {
    constructor(str) {
        this.str = str;
    }

    reverseString() {
        return this.str.split('').reverse().join('');
    }

    upperFirst() {
        return this.str.charAt(0).toUpperCase() + this.str.slice(1);
    }

    upperEvery() {
        return this.str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
}

const example = new WordString("hello world");
console.log(example.reverseString());
console.log(example.upperFirst());
console.log(example.upperEvery());   