// Пример структуры папок
const folders = [
  {
      name: 'root',
      subfolders: [
          {
              name: 'folder1',
              subfolders: [
                  {
                      name: 'subfolder1',
                      subfolders: []
                  },
                  {
                      name: 'subfolder2',
                      subfolders: []
                  }
              ]
          },
          {
              name: 'folder2',
              subfolders: [
                  {
                      name: 'subfolder3',
                      subfolders: []
                  }
              ]
          }
      ]
  }
];

// Рекурсивная функция для вывода всех папок и путей
function printFolders(folders, path = '') {
  for (const folder of folders) {
      const folderPath = path + '/' + folder.name; // Составляем путь до текущей папки
      console.log(folderPath); // Выводим путь
      printFolders(folder.subfolders, folderPath); // Рекурсивно вызываем для подпапок
  }
}

// Вызываем функцию с начальным пути root
printFolders(folders);
