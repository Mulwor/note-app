// Задача №1

console.log(this);

// Если говорим про браузер, то в строгом режиме покажет undefined,
// а в нестрогом object window. А если в консолье, то объект global

// ==============================================================

// Задача №2
function show() {
  console.log(this)
}
show();

const showArrow = () => {
  console.log(this);
}
showArrow();

// В первом случае this будет браться от туда от куда она определена
// - это глобальная область видимости - undefined
// Определяется в момент вызова, динамически

// А во втором случае в момент инициализации


// ==============================================================

// Задача №3.
const person = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
  greetArrow: () => {
    console.log(this.name)
  }
}

// ==============================================================

// ? Задача №4
const hi = person.greet();
const greetA

// ==============================================================

var o = {
  f: function() {
    return this;
  }
}

console.log(o.f())

// Запись происходит через function declaration, у 
// него есть this и он будет ссылаться на объект

// ==============================================================

const personSet = {
  name: "Lily",
  greet_01: function () {
    setTimeout(() => {
        console.log(`Hello, ${this.name}`)
    }, 1000)
  },
  greet_02: function () {
    setTimeout(function () {
        console.log(`Hello, ${this.name}`)
    }, 1000)
  }
}

personSet.greet_01();  
personSet.greet_02();          

// ==============================================================

var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  console.log(foo);
}
bar();

// ==============================================================

function replaceSubstring(str, search, replace) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + search.length) === search) {
        result += replace;
        i += search.length - 1;
    } else {
        result += str[i]
    }
  }
  return result
}
console.log(replaceSubstring("Hello world", "world", "there"))
console.log(replaceSubstring("abc abc abc", "abc", "123"));

// ==============================================================

// ? Реализуйте функцию myMap точно копирующую map метод

Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]))
  }

  return result;
}

const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.myMap(x => x + 2);
console.log(mappedArr) // [2, 4, 6, 8, 10]