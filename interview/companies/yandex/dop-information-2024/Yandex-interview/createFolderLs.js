/*
Дана вложенная структура файлов и папок.
Нужно вывести в консоль файлы и папки с отступами, чтобы показать вложенность.
Решение должно учитывать любую вложенность элементов (т.е. не должно содержать рекурсивные вызовы).
Пример вывода:

folder
  file1.txt
  file2.txt
  images
    image.png
    vacation
      crocodile.png
      penguin.png
  shopping-list.pdf
*/

let tree = {
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
          children: [{ name: 'crocodile.png' }, { name: 'penguin.png' }],
        },
      ],
    },
    { name: 'shopping-list.pdf' },
  ],
};

function createFolder(obj) {
  const res = [];

  function dfs(t, n) {
    res.push([t.name, n]);
    if (t.children) {
      t.children.forEach((el) => {
        dfs(el, n + ' ');
      });
    }
  }
  dfs(obj, ' ');
  for (let i = 0; i < res.length; i++) {
    console.log(res[i][1] + res[i][0]);
  }
}

createFolder(tree);
