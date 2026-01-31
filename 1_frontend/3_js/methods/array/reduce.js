// ? Метод reduce - метод массива, который применяет функцию к каждому элементу (слева направо) и 
// ? сворачивает (редуцирует) весь массив в одно итоговое значение.

// ? Синтаксис - array.reduce(callback(accumulator, currentValue, index, array), initialValue), где
// ? callback принимает следующие аргументы: 
// * accumulator - это "текущий результат", который передается между итерациями
// * currentValue - текущий обрабатываемый элемент массива
// * index - индекс текущего элемента (опционально)
// * array - исходный массив (опционально)
// * initialValue - начальное значение
const array = [0, 1, 2, 3, 4, 5];
const sumArray = (result) => {
  result.reduce(function(accumulator, currentValue, index, array) {
    console.log(`Аккумулятор: ${accumulator}`);
    console.log(`Текущий элемент: ${currentValue}`);
    console.log(`Индекс: ${index}`);
    console.log(`Исходный массив: [${array}]`);
    console.log(`Результат этой итерации: ${accumulator + currentValue}`);
    /*
      0 + 1 = 1   (аккумулятор = 0, currentValue = 1 → новый аккумулятор = 1)
      1 + 2 = 3   (аккумулятор = 1, currentValue = 2 → новый аккумулятор = 3)
      3 + 3 = 6   (аккумулятор = 3, currentValue = 3 → новый аккумулятор = 6)
      6 + 4 = 10  (аккумулятор = 6, currentValue = 4 → новый аккумулятор = 10)
      10 + 5 = 15 (аккумулятор = 10, currentValue = 5 → новый аккумулятор = 15)
    **/

    return accumulator + currentValue;
  })
}
// sumArray(array)

// ! =====================================================================================
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue, 0); 
const max = numbers.reduce((acc, curr) => Math.max(acc, curr));

// console.log('Результат сложенного числа:', result, 'Нахождения максимального числа', max)

// ! =====================================================================================
// ? Преобразование структуры данных из массива в объект - Мы берем каждый item из массива и
// ? записываем его в объект accumulator по ключу, равному индексу index.
const items = ['apple', 'banana', 'orange'];
const obj = items.reduce((accumulator, item, index) => {
  accumulator[index] = item;
  return accumulator;
}, {});
// console.log(obj)

// ? Можем сгруппировать по имени
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];
const groupedByAge = people.reduce((accumulator, person) => {
  accumulator[person.age].push(person);
  return accumulator;
}, {});
// console.log(groupedByAge)

// ! =====================================================================================
const words = ['Hello', ' ', 'World', '!'];
const sentence = words.reduce((acc, curr) => acc + curr, '');
// '' + 'Hello' = 'Hello'
// 'Hello' + ' ' = 'Hello '
// 'Hello ' + 'World' = 'Hello World'
// 'Hello World' + '!' = 'Hello World!'
console.log(sentence); // 'Hello World!'
