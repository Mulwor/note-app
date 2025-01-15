// TODO => Пример №1 => Замыкание
let secondExample = 1;
function secondFunction() {
  console.log(secondExample);
}
secondFunction();                           // * 1


// TODO => Пример №2 => Всплытие function и его назначение
function thirdFunction() {
  console.log(thirdExample);
}
let thirdExample = 1;
thirdFunction();                            // * 1
  

// TODO => Пример №3 
let fourthExample = 'Alex';
function fourthFunction() {
  console.log(`Hello ${fourthExample}`);
}
fourthExample = 'Hanna';
fourthFunction();                           // * "Hello Hanna"


// TODO => Пример №4 с объектом const
const fivethExample = {
  name: 'Вася',
};
fivethExample.name = 'Петя';
console.log(fivethExample);                 // * "Петя"


// TODO => Пример №5 => Необъявленная переменная и глобальная область видимости
var sixthValue = 1;
function sixthFuntion() {
  sixthValue = 2;                           // * Сначала присваивается значение 1, а затем 2
}
sixthFuntion();
console.log(sixthValue);                    // * 2

