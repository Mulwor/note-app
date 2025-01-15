// TODO =>  Пример №1
var number  = 10; 
console.log(number);                         // ? 10
number = 22; 
console.log(number);                         // ? 22


// TODO => Пример №2
let specialLetFirst = 'Good morning!!';
specialLetFirst.name = 'John';
console.log(specialLetFirst.name);           // ? Undefined (нет такого значения)


// TODO => Пример №3
const firstExample = 5;
firstExample = 10;
console.log(firstExample);                   // ? Ошибка, так как const нельзя присовить новое значение


// TODO => Пример №4 => У варов - глобальная область видимости, блочная игнорируется
var weight = 10;
if (weight > 8) {
  var kilograms = `Вес ${weight} кг`;
  console.log(kilograms);                     // ? Вес: 10 кг.
}