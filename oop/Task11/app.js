// 4. Создайте класс StringRepository, который имеет статичный массив words. Наследуйте от него класс
// FilteredWords, добавив метод getWordsByLength(length), который возвращает только те слова,
// длина которых равна заданному значению.

class StringRepository {
    arr = ["apple", "banana", "kiwi", "plum"]
}

class FilteredWords extends StringRepository {

    getWordsByLength(length) {
        return this.arr.filter(el => el.length === length);
    }
}

const filteredWords = new FilteredWords()
console.log(filteredWords.getWordsByLength(4));



