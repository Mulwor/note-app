// Задача №1 - Что будет в консоли
let a = 1;
const b = ++a
const c = a++

console.log(a)      // 3 
console.log(b)      // 2
console.log(c)      // 2

// 3, 2, 2

// ! ========================================

// Задача №2 - Eventloop

async function f() {
    // синхронный код, сразу выводится
    console.log(1);
    // когда создаем промис через конструктор она создается синхронно
    const promise = new Promise((resolve) => {
        // синхронный код, сразу выводится
        console.log(2);
        // уходит в макрозадачу
        setTimeout(() => {
            console.log(3);
            resolve('готово!')
            console.log(4)
        })
    })
    // синхронный код, сразу выводится
    console.log(5);

    const result = await promise;
    console.log(6)
    console.log(result)
    return 'Result'
}
f();
console.log(7);

// Функция хоть и возвращает resolve но мы его не выводим

// 1, 2, 5, 7, 3, 4, 6, готово!

// ! ========================================

// Задача №3 - Eventloop

function checkOrder() {
    console.log('1');

    async function asyncFn() {
        console.log('2');
        await Promise.resolve(null);
        console.log('3')
    }

    asyncFn();

    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log('4')
        }, 0);
        console.log('5')
    }).then(() => {
        console.log('6')
    })

    console.log('7')
}
console.log('8');
checkOrder();
console.log('9')

// 8 1 2 5 7 9 3 4 6

// ! ========================================

function makeGroup() {
    let people = [];

    let i = 0;
    while (i < 10) {
        let man = function() {
            alert(i)
            // console.log(i)
        }
        people.push(man);
        i++
    }
    return people;
}
let group = makeGroup();
group[0]()
group[5]()


// ! ========================================
console.log('1')
setTimeout(() => console.log('2'), 0)

async function asyncFunc() {
    console.log('3')

    await new Promise((resolve) => {
        console.log('4');
        setTimeout(() => {
            console.log('5');
            resolve()
        }, 0)
    })
    console.log('6')

    Promise.resolve()
      .then(() => console.log('7'))
      .then(() => console.log('8'))
}

asyncFunc();
console.log('9')

//  1, 3, 4, 9, 2, 5, 6, 7, 8

// ! ========================================

console.log(1)

setTimeout(() => {
    console.log(2)
})

Promise.resolve().then(() => {
    console.log(3)
})

console.log(4);

setTimeout(() => {
    console.log(5)
}, 0)

console.log(6);

const fool = () => {
    console.log('foo1');
    return Promise.resolve().then(fool)
}

fool();

// 1 4 6 fool 3 fool fool fool

// ! ===============================================

var a = 2;
function foo() {
    a += 1;
    console.log(a)
    var a = 1;
}
foo()

// ! ===============================================

var x = 1;
var y = 2;

function example1() {
    if (x) {
        console.log(x)
        x = 3
    }

    if (y) {
        console.log(y)
        var y = 4;
    }

    console.log(y)
}

example1();
console.log(x);
console.log(y)

// 1, undefined, 3, 2

// ! ===============================================
Promise.resolve('a')
    .then(x => x + 'b')
    .catch(x => x + 'c')
    .catch(x => x + 'd')
    .then(x => x + 'e')
    .then(console.log)

// ! ===============================================
var a = {
    name: 'a',
    foo: function() {
        console.log(this.name);
    }
}
a.foo();

var bar = a.foo;
var();

var b = {
    name: 'b'
}
b.foo = a.foo;
b.foo();

var c = {
    name: 'c'
}
bar.caa(c, 1, 2)
a.for.apply(b, [1, 2])
a.foo.bind(b).call(c)
a.foo.bind(b).bind(c)

// ! ===============================================

var i = 11;
var array = [];

while (i--) {
    array.push(function() {
        return i + 1
    });
};

console.log(array[0]())
console.log(array[1]())

// ! ================================================
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i)
    })
}

for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i)
    })
}

// ! ===============================================
function a() { console.log(this) }
function b() { a() }
const c = { a, b }
c.a();
c.b()