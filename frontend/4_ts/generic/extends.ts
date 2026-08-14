// ! ================ Пример №0 (Функция принимает объект с name) ======================
function greet<T extends { name: string }>(entity: T): void {
  console.log(`Привет, ${entity.name}!`);
}

greet({ name: "Аня" });                         // Привет, Аня!
greet({ name: "Боб", age: 30 });                // Привет, Боб!

// greet({ age: 25 }); // ❌ Ошибка: нет поля name


// ! =============================== Пример №1 ===================================
// ?  Пример: функция, которая работает только с объектами, у которых есть поле length
function logLength<T extends { length: number }>(item: T): void {
  console.log("Длина:", item.length);
}

logLength("Привет");           // * Длина: 6 (строка имеет length)
logLength([1, 2, 3]);          // * Длина: 3 (массив имеет length)
logLength({ length: 10 });     // * Длина: 10 (у объекта есть поле length)

// * logLength(123);           // ❌ Ошибка: number не имеет length

// ? T extends { length: number } — мы говорим, что T должен обязательно иметь 
// ? свойство length, иначе TypeScript выдаст ошибку.

// ! ================================== Пример 2 ====================================
function isAdult<T extends { age: number }>(person: T): boolean {
  return person.age >= 18;
}

const user = { name: "Alice", age: 25 };
const dog = { breed: "Labrador", age: 5 };

console.log(isAdult(user)); // true
console.log(isAdult(dog));  // false

// isAdult({ name: "NoAge" }); // ❌ Ошибка: нет поля age

// ! =========== Пример 3 (Типобезопасное копирование поля между объектами) ======
function copyField<T extends object, K extends keyof T>(
  source: T,
  target: T,
  key: K
): void {
  target[key] = source[key];
}

const person1 = { name: "Alice", age: 25 };
const person2 = { name: "Bob", age: 30 };

copyField(person1, person2, "age");
console.log(person2); // { name: 'Bob', age: 25 }
