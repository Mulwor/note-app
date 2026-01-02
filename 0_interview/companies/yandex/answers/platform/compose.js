// ? Необходимо написать функцию compose

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

console.log(compose(square, times2(2) === square(times(2))))
console.log(compose(square, times2, num)(3, 4) === square(times(sum(3, 4))))