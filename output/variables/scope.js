// ! ===========================================================================================
function f1() {
  return a;
}
f1();                         // ? Бросит ошибку: ReferenceError
const a = 1;
f1();                         // ? 1


// ! ===========================================================================================
let b = 'Alex';

const f2 = () => {
  return () => {
    return () => {
      return () => {
        console.log(b);
      };
    };
  };
};

f2()()()();                    // ?


// ! ===========================================================================================
function f3() {
  const name = 'Alex';

  return () => {
    console.log(name);
  };
}

let name = 'Hanna';
const copyF3 = f3();
copyF3();                                 // ?


// ! ===========================================================================================
function f4() {
  let num1 = 1;
  let num2 = 2;

  return function() {
    return num1 + num2;
  };
}
let copyF4 = f4();
console.log(copyF4());
console.log(f4()());


// ! ===========================================================================================
function f5() {
  let num1 = 1;

  return function() {
    return num1 + numF5;
  };
}
let numF5 = 2;
let copyF5 = f5();
console.log(copyF5());

// ! ===========================================================================================
var result = (function () {
  var name = "Barry";
  return name;
})();

result;                                         // * "Barry" 


// ! ===========================================================================================
let c = 10;
(function f6() {
  if (c === 10) {
    let c = 11;
    console.log(c);
  }
  console.log(c);
})();


// ! ===========================================================================================
function f7() {
  let num = 1;

  return function () {
    console.log(num);
    num++;
  };
}

let copyF7 = f7();
copyF7();
copyF7();

let copyF7_2 = f7();
copyF7_2();
copyF7_2();


// ! ===========================================================================================
// * Он не работает, так как все время вызывает одну и ту же функцию по нескольку раз
function f8() {
  let num = 0;

  return function () {
    console.log(num);
    num++;
  };
};

f8()();
f8()();
f8()();


// ! ===========================================================================================
function f9() {
  let num = 0;

  return function () {
    console.log(num);
    num++;
  };
}
let copyF9 = f9;
copyF9()();
copyF9()();
copyF9()();


// ! ===========================================================================================
var d = 5;
function f10() {
  if (d) {
    console.log(d);
    var d = 10;
  }
}
f10();


// ! ===========================================================================================
function f11() {
  let counter = 0;

  return function () {
    return function () {
      console.log(counter);
      counter++;
    };
  };
}
  
let copyF11 = f11();

let hardCopyF11 = copyF11();
let valueCopyF11 = copyF11();

hardCopyF11();
valueCopyF11();
hardCopyF11();
valueCopyF11();
  

// ! ===========================================================================================
let e = 1;

function f12() {
  return function () {
    console.log(e);
    e++;
  };
}

let copyF12 = f12();
copyF12();
copyF12();
let valueCopyF12 = f12();
valueCopyF12();
valueCopyF12();


// ! ===========================================================================================
// ? Возвращает значение count по значению, а не по ссылке.
function f13() {
  let count = 0;
  const increment = () => count++;
  const decrement = () => count--;
 
  return { count, increment, decrement }
}

const result = f13();
result.increment();
result.increment();
console.log(result.count);