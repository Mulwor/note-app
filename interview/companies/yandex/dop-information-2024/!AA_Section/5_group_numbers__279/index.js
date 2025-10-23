/*
* Дан массив целых неотрицательных чисел, нужно сгруппировать друг с другом числа, которые можно получить путём
* перестановки цифр их составляющих. Нули при этом игнорируем, т. к. нет числа 011.
Решение должно быть максимально эффективным по памяти и времени.
* */

// function digitPermutation(arr) {
// const anagrams = {};
//
// for (let cur of arr) {
//     let acc = [];
//
//     for (let dig of cur.toString()) {
//         acc[dig] = (acc[dig] || 0) + 1;
//     }
//
//     let res = '';
//
//     for (let j = 1;j< acc.length; j++) {
//         res += j.toString().repeat(acc[j]);
//     }
//
//     if (!anagrams[res]) anagrams[res] = [];
//     anagrams[res].push(cur);
// }
//
// return Object.values(anagrams);
//
// }


// ===================================================================

// function digitPermutation(arr) {
//     const anagrams = {}; // Группы чисел по ключу
//
//     for (let cur of arr) { // Перебираем числа в массиве arr
//         const digitCount = new Array(10).fill(0); // Массив для подсчёта цифр
//
//         // Подсчёт цифр, пропускаем нули
//         for (let dig of cur.toString()) {
//             if (dig !== '0') digitCount[dig]++;
//         }
//
//         // Формируем ключ, пропускаем нули
//         const key = digitCount
//             .map((count, digit) => digit.toString().repeat(count))
//             .join('');
//
//         // Группировка по ключу
//         if (!anagrams[key]) anagrams[key] = []; // Если в объекте нет свойства с таким ключом, то создаём его
//         anagrams[key].push(cur); // Добавляем число в группу
//     }
//
//     return Object.values(anagrams); // Возвращаем группы чисел
// }
//



function digitPermutation(arr) {
    const anagrams = {};

    for (const num of arr) {
        // Преобразуем число в строку, разбиваем по '0' и объединяем обратно без нулей
        const noZeros = num
            .toString()
            .split('0')
            .join('');

        // Сортируем оставшиеся цифры
        const key = noZeros.split('').sort().join('');

        if (!anagrams[key]) {
            anagrams[key] = [];
        }
        anagrams[key].push(num);
    }

    return Object.values(anagrams);
}


console.clear();
console.log('start test');
console.log(digitPermutation([1230, 99, 23001, 123, 111, 300021, 101010, 9, 90000009]));
// [[99, 90000009], [111, 101010], [1230, 23001, 123, 300021], [9]]
console.log(digitPermutation([11, 22])); // [[11], [22]]
console.log(digitPermutation([111111111112, 122222222222])); // [[111111111112]]
console.log(digitPermutation([])); // []
console.log(digitPermutation([0,1,2])); // [[0], [1], [2]]
console.log('end test');
