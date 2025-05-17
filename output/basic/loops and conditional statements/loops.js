// ? Цикл: for (let i = ...; i > number; i++) {}

for (let i = 0; i < 5; i++) {
  console.log(i)                          // * 0, 1, 2, 3, 4
}

for (let i = 10; i > 5; i--) {
  console.log(i)                          // * 10, 9, 8, 7, 6
}

// ! ========================== For in ==========================================

// ? For ... in => работает с объектами, он выводит ключи, но не значения. 
// ? Чтобы вызвать значения необходимо использовать квадратные скобки и вызвать ключи

const uniqueUser = {
  name: "Valera",
  age: 24,
  isAdmin: true,
}

for (const key in iterable) {
  console.log(key) // name, age, isAdmin
  console.log(uniqueUser[key]) // Valera, 24, true
}

// ! ========================== For of ==========================================

// ? for ... of => работает больше с массивом, он выводит уже внутренности
let iterable = [10, 20, 30]

for (const item in iterable) {
  console.log(item)                   // [10, 20, 30]
}

// ! =================== Сравнения For in и for of в массиве ====================
// ? Если мы сравним массив и проверим их, то выясниться, что {0: "☕", 1: "💻", 
// ? 2: "🍷", 3: "🍫"} for...in будет вызывать индексы, а for...of уже внутренности.

const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  // ["☕", "💻", "🍷", "🍫"]
  console.log(item)
}

// ! =========================== While...do while =============================
let i = 3
while (i) {
  // когда i будет равно 0, условие станет ложным, и цикл остановится
  alert(i)
  i--
}

let i1 = 0
do {
  alert(i1)
  i++
} while (i1 < 3)