// Определение функции, которая создает вложенные объекты по строковому пути
function createObjectByPath(obj, path) {
  const parts = path.split('.'); // Разделяем строку пути на части по точке и создаем массив
  let currentObj = obj; // Инициализируем переменную, в которой будем создавать вложенные объекты

  // Проходим по каждой части пути
  for (const part of parts) {
    // Проверяем, существует ли текущая часть пути как свойство объекта
    if (!currentObj.hasOwnProperty(part)) {
      currentObj[part] = {}; // Если не существует, создаем новый вложенный объект
    }
    currentObj = currentObj[part]; // Переходим к следующему уровню вложенности объекта
  }

  return obj; // Возвращаем изначальный объект с добавленными вложенными объектами
}

// Исходный пустой объект
const emptyData = {};

// Создание вложенных объектов по строковому пути
const createdPath1 = createObjectByPath(emptyData, "person.name");
console.log(createdPath1); // { person: { name: {} } }

const createdPath2 = createObjectByPath(emptyData, "person.address.city");
console.log(createdPath2); // { person: { name: {}, address: { city: {} } } }

const createdPath3 = createObjectByPath(createdPath2, "person.address.zip");
console.log(createdPath3); // { person: { name: {}, address: { city: {}, zip: {} } } }
