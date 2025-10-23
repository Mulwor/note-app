// Дана вложеная структура файлов и папок.
const data = {
    name: 'folder',
    children: [
        { name: 'file1.txt' },
        { name: 'file2.txt' },
        {
            name: 'images',
            children: [
                { name: 'image.png' },
                {
                    name: 'vacation',
                    children: [
                        { name: 'crocodile.png' },
                        { name: 'penguin.png' }
                    ]
                }
            ]
        },
        { name: 'shopping-list.pdf' }
    ]
};

// Нужно вывести в консоль файлы и папки с отступами, чтобы показать вложенность.
// Решение должно учитывать любую вложенность элементов (т.е. не должно содержать рекурсивные вызовы).

console.clear();
printDirectoryStructureIterative(data);

// ===================================================================

function printDirectoryStructureIterative(data) {
    const stack = [{ node: data, depth: 0 }]; // Стек для хранения узлов
    while (stack.length > 0) { // Пока стек не пуст
        const { node, depth } = stack.pop(); // Извлекаем узел из стека методом pop, который удаляет последний элемент
        // Создаем отступ с помощью цикла
        let prefix = '';
        for (let i = 0; i < depth; i++) {
            prefix += '  '; // Добавляем два пробела для каждого уровня вложенности
        }

        console.log(prefix + node.name);

        // Добавляем детей в стек в обратном порядке
        if (node.children) { // Если узел имеет детей
            // for (let i = 0 ; i < node.children.length; i++) { // ПОТОМ ПОМЕНЯТЬ ПОРЯДОК НА ОБРАТНЫЙ
                for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ node: node.children[i], depth: depth + 1 }); // Добавляем детей в стек
            }
        }
    }
}

