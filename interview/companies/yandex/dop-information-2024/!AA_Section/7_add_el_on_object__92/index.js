//Входные данные: массив объектов, каждый из которых имеет поля val и type.
// Необходимо написать функцию для добавления нового элемента в заданную позицию, причём:
// 	1.	Исходный порядок элементов должен сохраняться во всех вкладках.
// 	2.	Если позиция отрицательная, новый элемент должен быть добавлен перед всеми элементами.
// 	3.	Если позиция больше количества элементов заданного типа, то новый элемент должен быть добавлен в конец.


// function addItem(items, item, position) {
//     let itemCount = 0;
//
//     for (let i = 0 ; i < items.length; i++) {
//         if (itemCount>= position) {
//             items.splice(i, 0, item);
//             return
//         }
//         itemCount += items[i].type === item.type ? 1 : 0
//     }
//     items.push(item)
// }


// ===================================================================

// Нам нужно определить куда вставлять элемент.
// Если позиция больше количества элементов заданного типа,
// то новый элемент должен быть добавлен в конец.
// Если позиция отрицательная, новый элемент должен быть добавлен перед всеми элементами.
function addItem(items, item, position) {
    let elementPosition = 0;
    for (let i = 0; i < items.length; i++) {
        // Если позиция для вставки достигнута
        if (elementPosition >= position) {
            // Сдвигаем элементы вправо вручную
            for (let j = items.length; j > i; j--) {
                items[j] = items[j - 1];}
            // Вставляем новый элемент
            items[i] = item;
            return;}
        // Увеличиваем счётчик, если тип совпадает
        if (items[i].type === item.type) {
            elementPosition++;}}
    // Если не вставили, добавляем элемент в конец
    items[items.length] = item;}

// Функция для тестирования
function testAddItem(items, item, position, expected) {
    addItem(items, item, position);
    console.log(
        JSON.stringify(items) === JSON.stringify(expected)
            ? `✔ Успех: ${JSON.stringify(item)}`
            : `✘ Ошибка: Ожидалось ${JSON.stringify(expected)}, получено ${JSON.stringify(items)}`
    );
}

// Примеры тестов

// Тест 1: Вставка в середину типа
testAddItem(
    [
        {val: 2, type: 'b'},
        {val: 1, type: 'a'},
        {val: 3, type: 'a'},
    ],
    {val: 4, type: 'a'},
    1,
    [
        {val: 2, type: 'b'},
        {val: 1, type: 'a'},
        {val: 4, type: 'a'},
        {val: 3, type: 'a'},
    ]
);

// Тест 2: Вставка в начало (отрицательная позиция)
testAddItem(
    [
        {val: 1, type: 'a'},
        {val: 2, type: 'b'},
        {val: 3, type: 'a'},
    ],
    {val: 5, type: 'b'},
    -1,
    [
        {val: 5, type: 'b'},
        {val: 1, type: 'a'},
        {val: 2, type: 'b'},
        {val: 3, type: 'a'},
    ]
);

// Тест 3: Вставка в конец типа (позиция больше числа элементов)
testAddItem(
    [
        {val: 1, type: 'a'},
        {val: 2, type: 'b'},
        {val: 3, type: 'a'},
    ],
    {val: 6, type: 'a'},
    10,
    [
        {val: 1, type: 'a'},
        {val: 2, type: 'b'},
        {val: 3, type: 'a'},
        {val: 6, type: 'a'},
    ]
);

// Тест 4: Вставка в начало типа (позиция 0)
testAddItem(
    [
        {val: 1, type: 'a'},
        {val: 2, type: 'b'},
        {val: 3, type: 'a'},
    ],
    {val: 7, type: 'a'},
    0,
    [
        {val: 7, type: 'a'},
        {val: 1, type: 'a'},
        {val: 2, type: 'b'},
        {val: 3, type: 'a'},
    ]
);
