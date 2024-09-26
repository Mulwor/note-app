// ! Например: у нас есть автомобиль (класс) и у всех автомобилей есть общие черты 
// ! (свойства) - руль, педали, колеса и т. д. И автомобилю можно отдавать команды 
// ! (методы).

class Car {
  // ? Пустые св-в для цвета и кол-во топлива для автомобиля
  color;
  fuel;

  // ? Метод класса - функция внутри класса
  show() {
    return '+++';
  }

  user(name, surn) {
    return name + ' ' + surn;
  }
}

// ? Инициализация класса - создаем его копию
let myCar = new Car();
let anotherCar = new Car();
console.log(myCar === anotherCar);         // ? false

// ? Записываем свойства в объект, а тот перенаправит на класс
myCar.color = 'red'; 
myCar.fuel = 50;
myCar1.color = 'black';

console.log(myCar);                        // ? Car {color: 'red', fuel: 50}
console.log(anotherCar);                   // ? Car {color: 'black', fuel: undefined}
console.log(myCar.color);                  // ? red
console.log(myCar.show());                 // ? +++
console.log(myCar.user('John', 'Smith'));  // ? John Smith

// ? Объекты классов можно хранить в массиве и выполнять с ними 
// ? различные операции, как с элементами массива. Например
// ? let users = [ new User3('john'), new User3('eric') ];