
function groupWords(words) {
  // 1. Создаем объект, в котором будем хранить группы слов ключ значение
  const mapOfWords = {};
// 2. Проходимся по всем словам
  for (const word of words) { 
    // 3. Сортируем буквы в слове
      const key = word.split('').sort().join('');
      // 4. Если в объекте нет свойства с таким ключом, то создаем его
      if (!mapOfWords[key]) {
        // 5. Создаем пустой массив для группы
          mapOfWords[key] = [];
      }
      // 6. Добавляем слово в группу
      mapOfWords[key].push(word);
  }
 // 7. Возвращаем массив групп
  return Object.values(mapOfWords);
}

const testWords = ['сон', 'нос', 'сорт', 'трос', 'торт', 'рост','трот'];
console.log(groupWords(testWords));
