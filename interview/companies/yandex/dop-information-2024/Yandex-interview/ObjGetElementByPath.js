// Определение функции, которая получает элемент из объекта по строковому пути
function getElementByPath(obj, path) {
  const parts = path.split("."); // Разделяем строку пути на части по точке и создаем массив
  let result = obj; // Инициализируем переменную, в которой будет храниться результат

  // Проходим по каждой части пути
  for (const part of parts) {
    // Проверяем, существует ли текущая часть пути как свойство объекта
    if (result.hasOwnProperty(part)) {
      result = result[part]; // Если существует, переходим к следующему уровню вложенности объекта
    } else {
      return undefined; // Если свойства не существует, возвращаем undefined
    }
  }

  return result; // Возвращаем найденный элемент
}

// Объект с данными
const data = {
  person: {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      zip: "10001",
    },
  },
};

// Получение элементов из объекта по строковому пути
const name = getElementByPath(data, "person.name"); // Получаем значение "John"
const city = getElementByPath(data, "person.address.city"); // Получаем значение "New York"
const zip = getElementByPath(data, "person.address.zip"); // Получаем значение "10001"
const invalidPath = getElementByPath(data, "person.salary"); // Получаем undefined

// Выводим полученные значения в консоль
console.log(name); // "John"
console.log(city); // "New York"
console.log(zip); // "10001"
console.log(invalidPath); // undefined
