// Приведены 9 секций с кодом. Какой будет результат вызова каждого

console.log(typeof []);
console.log(typeof null);
console.log(1+"2");
console.log("4"-2);

// 5
const first = () => console.log("Один");
const second = () => console.log("Два");
const third = () => console.log("Три");

first();
setTimeout(second, 0);
third();

// 6
var a = 2;
var b = a;
b++

console.log(a);
console.log(b);

// 7
var c = [1, 2, 3]
var d = c;
d.push(4);
console.log(c);
console.log(d);

// 8
{
    console.log(i);
    var i = 10;
    console.log(i)
}

// 9
{
    console.log(i);
    const i = 10;
    console.log(i)
}