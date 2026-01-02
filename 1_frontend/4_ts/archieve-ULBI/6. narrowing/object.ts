// Способ сузить типы с помощью объектов
interface User {
  username: string;
  age: number;
}

interface Person {
  lastName: string;
  firstName: string;
  age: number
}

function narrowing_03(arg: User | Person) {
  if ('username' in arg) {
    // (parameter) arg: User
    arg
  }

  if ('firstName' in arg) {
    // (parameter) arg: Person
    arg
  }

  arg
}


// ! ===================================================================
// Способ сузить типы с помощью объектов через discernment unions

interface BaseCar {
  maxSpeed: number;
  weight: number;
}

interface Bmw extends BaseCar {
  type: 'bmw';
  bmwField: string;
}

interface Audi extends BaseCar {
  type: 'audi';
  audiField: string;
}

interface Toyota extends BaseCar {
  type: 'toyota';
  toyotoField: string
}

type Car = Audi | Bmw | Toyota;

function narrowing_05(arg: Car) {
  switch(arg.type) {
    case 'audi':
      arg.audiField
      break;
    case 'bmw':
      arg.bmwField
      break;
    case 'toyota':
      arg.toyotoField
      break;
  }

  arg
}