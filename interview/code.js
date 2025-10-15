console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve(console.log(5)).then(() => console.log(6));

setTimeout(() => console.log(7));

console.log(8);

// 1, 5, 8, 3, 6, 2, 7, 4