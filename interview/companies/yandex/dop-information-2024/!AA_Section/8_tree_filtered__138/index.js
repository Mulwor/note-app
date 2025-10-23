// Дана древовидная структура следующего формата:
//
//     const tree = {
//         type: 'nested',
//         children: [
//             { type: 'added', value: 42 },
//             {
//                 type: 'nested',
//                 children: [
//                     { type: 'added', value: 43 },
//                 ]
//             },
//             { type: 'added', value: 44 },
//             // ...
//         ]
//     };
//
// Необходимо написать функцию getNodes(tree, type), которая возвращает все узлы заданного типа.
//
//     Глубина вложенности дерева может быть любой.
//
//     const addedItems = getNodes(tree, 'added');
//
// [
//     { type: 'added', value: 42 },
//     { type: 'added', value: 43 },
//     { type: 'added', value: 44 },
//     // ...
// ]

// ===================================================================

const tree = {
    type: 'nested',
    children: [
        { type: 'added', value: 42 },
        {
            type: 'nested',
            children: [
                { type: 'added', value: 43 },
            ]
        },
        { type: 'added', value: 44 },
        // ...
    ]
};

const getNodes = (tree, type) => {
    const res = []; //
    const queue = [tree]; // Используем стек для итерации
    while (queue.length) {
        const node = queue.shift(); // ПОТОМ МЕНЯЕМ НА POP
        // const node = queue.pop(); // Забираем элемент с конца стека
        // Если тип узла совпадает с заданным, добавляем его в результат
        if (node.type === type) {
            res.push(node);}
        // Если есть дочерние узлы, добавляем их в стек (в обратном порядке)
        if (node.children) {
            // ПОТОМ МЕНЯЕМ НА ОБРАТНЫЙ ПОРЯДОК
            for (let i = 0 ; i < node.children.length; i++) {
            // for (let i = node.children.length - 1; i >= 0; i--) {
                queue.push(node.children[i]);}}}
    return res;
};



console.log(getNodes(tree, 'added'))
