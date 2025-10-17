// Необходимо реализовать функцию carry
function sum(a,b,c) {
  return a + b + c  
}

function curry(fn) {
  // TODO
}

carry(sum)(1, 2, 3);
curry(sum)(1, 2)(3);
curry(sum)(1)(2)(3);