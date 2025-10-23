// Напищите функцию, которая будет возвращать комбинацию слов, для переданного массива массивов слов
// Комбинации должны быть перечислены в порядке из примера
// если комбинации закончились, то функция возвращает undefined . При решении нельзя пользоваться генераторами





// ===================================================================

function allSequences(words) {
    // Массив индексов, который отслеживает текущие позиции в каждом из массивов
    let indexes = words.map(() => 0);
    const combination = words.reduce((prev, curr) => prev * curr.length, 1); // Количество всех возможных комбинаций
    let current = 0;

    return function () {
        if (current === combination) return undefined; // Если комбинации закончились, возвращаем undefined

        // Формируем комбинацию, используя while
        let res = [];
        let currentIndex = 0; // Индекс в текущем массиве
        while (currentIndex < words.length) {
            res.push(words[currentIndex][indexes[currentIndex]]);
            currentIndex++;
        }

        // Переход к следующей комбинации:
        for (let i = words.length - 1; i >= 0; i--) {
            const maxIndex = words[i].length - 1; // Максимальный индекс в текущем массиве
            if (indexes[i] < maxIndex) { // Если мы не достигли максимального индекса
                indexes[i]++; // мы переходим к следующему индексу
                break;
            } else {
                indexes[i] = 0; // Иначе, сбрасываем индекс на 0
            }
        }

        current++; // Переходим к следующей комбинации
        return res.join(' '); // Возвращаем комбинацию как строку
    };
}

const nextSequence = allSequences([
  ['0','1'],['11',33],[44,55,66]
]);

console.log(nextSequence()); // "0 a ?"
console.log(nextSequence()); // "0 a !"
console.log(nextSequence()); // "0 a -"
console.log(nextSequence()); // "0 b ?"
console.log(nextSequence()); // "0 b !"
console.log(nextSequence()); // "0 b -"
console.log(nextSequence()); // "1 a ?"
console.log(nextSequence()); // "1 a !"
console.log(nextSequence()); // "1 a -"
console.log(nextSequence()); // "1 b ?"
console.log(nextSequence()); // "1 b !"
console.log(nextSequence()); // "1 b -"
console.log(nextSequence()); // "2 a ?"
console.log(nextSequence()); // "2 a !"
console.log(nextSequence()); // "2 a -"
console.log(nextSequence()); // "2 b ?"
console.log(nextSequence()); // "2 b !"
console.log(nextSequence()); // "2 b -"
console.log(nextSequence()); // undefined
console.log(nextSequence()); // undefined
console.log(nextSequence()); // undefined


// Тестирование с другими данными:
const nextSequence2 = allSequences([
    ['помидор', 'капуста', 'огурец'],
    ['11', '22', '33'],
]);

console.log(nextSequence2()); // "помидор коричневая"
console.log(nextSequence2()); // "помидор красная"
console.log(nextSequence2()); // "помидор зеленая"
console.log(nextSequence2()); // "капуста коричневая"
console.log(nextSequence2()); // "капуста красная"
console.log(nextSequence2()); // "капуста зеленая"
console.log(nextSequence2()); // "огурец коричневая"
console.log(nextSequence2()); // "огурец красная"
console.log(nextSequence2()); // "огурец зеленая"
console.log(nextSequence2()); // "морковь коричневая"
console.log(nextSequence2()); // "морковь красная"
console.log(nextSequence2()); // "морковь зеленая"
console.log(nextSequence2()); // undefined
