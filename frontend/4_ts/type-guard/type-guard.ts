// Тайп гард принимает два типа с которыми мы работаем и возвращает значение которое мы
// хотим проверить

interface CarForTypeGuard {
  maxSpeed: number;
  width: number;
}

interface PersonForTypeGuard {
  age: number;
  name: string;
}

function isCar(value: Car | Person): value is Car {
  // Скорость и ширина у нас обязательно присутствуют внутри объекта
  return 'maxSpeed' in value && 'width' in value;
}

function isPerson(value: Car | Person): value is Person {
  return 'age' in value && 'name' in value;
}

interface BMWForTypeGuard extends CarForTypeGuard {
  type: "BMW";
}

interface AudiForTypeGuard extends CarForTypeGuard {
  type: "Audi";
}

function isBMW(value: BMWForTypeGuard | AudiForTypeGuard): value is BMWForTypeGuard {
  return value.type === 'BMW';
}

function isAudio(value: BMWForTypeGuard | AudiForTypeGuard): value is AudiForTypeGuard {
  return value.type === 'Audi';
}

function typeGuard(data: Car | Person) {
  if (isCar(data)) {
    data
  } else {
    data
  }
}