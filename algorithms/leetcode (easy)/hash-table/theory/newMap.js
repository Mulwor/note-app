// ? Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что
// ? Map позволяет использовать ключи любого типа. У него есть следующие методы:

// ! 1. Создает коллекцию
const map = new Map(); 

// ! 2. map.set(key, value) – записывает по ключу key значение value.
map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

// ! 3. map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.get(1);              // * "num1"
map.get("1");            // * "str1"

// ! 4. map.size – возвращает текущее количество элементов.
map.size;                // * 3

// ! 5. map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.has('job');          // * false
map.has(1)               // * true

// ! 6. map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
map.delete('job');

// ! 7. map.clear() – очищает коллекцию от всех элементов.
map.clear();

// * ========================================================================================

// ? Перебор map 

// ! 1. map.keys() – перебор по ключам

let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук",    50]
]);

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);                                        // * огурец, помидор, лук
}

// ! 2. map.values() - перебор по значениям
for (let amount of recipeMap.values()) {
  console.log(amount);                                           // * 500, 350, 50
}

// ! 3. map.entries() - перебор по элементам в формате ключ, значения
for (let entry of recipeMap) {                               // ===> recipeMap.entries()
  console.log(entry);                                              // ===> огурец,500 (и так далее) 
}

// * Можно сделать из коллекции обычный объект

let mapToObject = new Map();
mapToObject.set('banana', 1);
mapToObject.set('orange', 2);
mapToObject.set('meat', 4);

let obj = Object.fromEntries(map.entries());

// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2