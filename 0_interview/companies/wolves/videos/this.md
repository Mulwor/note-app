<details>
<summary>Задача №1</summary>

```js
console.log(this)
```

Ответ: Если говорим про браузер, то в строгом режиме покажет undefined, а в нестрогом object window. А если в терминале, то объект global.
</details>

<details>
<summary>Задача №2</summary>

```js
function show() {
  console.log(this)
}
show();

const showArrow = () => {
  console.log(this);
}
showArrow();
```

Если говорить про браузер:
- В нестрогом режиме оба покажут Window
- В строгом режиме show будет undefined, а стрелочная функция покажется Window так как у него нет своего this и он будет брать из лексического окружение, в данном случае глобально
- Если говорить про терминал, то в будет объект, а в строгом режиме будет с show undefined, а у стрелочной функции пусть объект

</details>

<details>
<summary>Задача №3</summary>

```js
const obj = {
  name: 'Test',
  showName() {
    console.log(this.name)
  },
  showThis_01() {
    console.log(this);
  },
  inner: {
    showThis_02() {
        console.log(this);
    }
  }
};

obj.showName();             // 1                         
obj.showThis_01();          // 2
obj.inner.showThis_02();    // 3
```

В showName выведется "Test", так как он ссылается на имя
В showThis_01 => this будет ссылаться на весь объект
В obj.inner.showThis_02() выведется функцию showThis_02 {...} так как this ссылается на вложенный метод

</details>

<details>
<summary>Задача №4</summary>

```js
const obj = {
  a: 1,
  say() {
    return function() {
      console.log(this.a)
    }
  }
}
```

Контекст теряется когда мы возвращаем функцию и туда передается undefined. Исправить можно это с помощью стрелочной функции, который запоминает значение

</details>

<details>
<summary>Задача №5 - Что будет выведено</summary>

```js
let obj1 = {
  name: "User 1",
  getName() {
    console.log(`name is: ${this.name}`);
  },
};

let obj2 = {
  name: "User 2",
  getName() {
    console.log(`name is: ${this.name}`);
  },
};

let fn = obj1.getName.bind(obj2).bind(obj1);

fn();
```

Выведется name is User2 - сработает только первый bind и последующие будут игнорироватся

</details>

<details>
<summary>Задача №6 - Что будет выведено и как это исправить?</summary>

```js
let obj = {
  name: "David",
  getName() {
    console.log(`name is: ${this.name}`);
  },
};

let fn = obj.getName;

fn();
```

Вызывается обычная функция, у него нет привязки к this, так как это не метод и вернет пустую строку

Исправить можно:
1. Переписав на стрелочную функцию
2. Забайндить => obj.getName.bind(obj);
3. Вызывать напрямую без let fn


</details>

<details>
<summary>Задача №7 - Объясните, что происходит в данном коде и какой будет вывод в консоль при 
его выполнении.</summary>

```js
const object = {
  firstName: "Bill",
  lastName: "Ivanov",

  sayLastName: () => {
    console.log(this.lastName);
  },

  sayName() {
    console.log(this.firstName);
  },
};

object.sayName();                                       // 1.
object.sayLastName();                                   // 2. 

var b = object.sayName;
b();                                                    // 3. 

object.sayName.bind({ firstName: "Cash" })();           // 4.
object.sayLastName.bind({ firstName: "Arrow" })();      // 5.
object.sayName.bind({ firstName: "Name1" }).bind({ firstName: "Name2" })(); // 6
```

Ответ: 
1. Bill, так как this ссылается на Bill
2. Undefined, this берется из глобального лексического окружения по этому undefined
3. Undefined, функция вызывается без контекста
4. 'Cash', привязывает новый контекст
5. Undefined, стрелочная функция НЕ имеет своего this, bind не может изменить ее контекст, this берется из внешней области
6. Name1, так как сработает только первый bind последующие будут игнорироваться
</details>

<details>
<summary>Задача №8 - Что выведется в консоль</summary>

```js
'use strict'
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this)
  }
}

obj.b()
obj.c()
```

undefined window 
10 сам объект
</details>

<details>
<summary>Задача №9 - Что будет выведено</summary>

```js
function foo() {
  const x = 10;

  return {
    x: 20,
    // x: 30

    bar() {
      console.log(this.x);
    },

    baz: () => {
      console.log(this.x);
    },
  };
}

const obj1 = foo();
obj1.bar(); // 1 
obj1.baz(); // 2

const obj2 = foo.call({ x: 30 });
let y = obj2.bar;
let x = obj2.baz;

y(); // 3
x(); // 4 

obj2.bar(); // 5
obj2.baz(); // 6
```

Объяснения

1. 20
2. Undefined, так как this лексический и он будет ссылатся на window
3. Undefined, обычная функция
4. 30, стрелочная берет этот this
5. 20 - обычный метод берется число 20
6. 30 - из-за call стрелочная функция все еще 30
</details>

<details>
<summary>Задача № 10</summary>

```js
let baz = 0;

let foo = {
  bar1: function() {
    return this.baz;
  },
  bar2: () => this.baz,
  baz: 1
};

let fooCopy = {
  bar1: foo.bar1,
  bar2: foo.bar2,
  baz: 1,
}

let bazzz = foo.bar1;

console.log(fooCopy.bar1())
console.log(fooCopy.bar2())
console.log(bazzz)

```

1 undefined undefined

</details>

<details>
<summary>Задача № 11</summary>

```js
function Person(name) {
  this.name = name;
}

const juan = new Person("Juan");

Person.prototype = {
  getName: function () {
    return this.name;
  },
};

const pedro = new Person("Pedro");

console.log(pedro.getName());
console.log(juan.getName());
```

"Pedro"
Ошибка: juan.getName is not a function
</details>