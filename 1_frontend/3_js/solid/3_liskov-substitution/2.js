// ! 1. НАРУШЕНИЕ LSP (классический плохой пример)
class Bird {
  fly() { console.log('Лечу!') }
}

// * Утка летает - всё ок
class Duck extends Bird {}

// * Пингвин не летает! Нарушение LSP.
class Penguin extends Bird {
  fly() { throw new Error('Пингвины не летают!') }
}

// * Эта функция ожидает, что любая птица умеет летать
function makeBirdFly(bird) {
  bird.fly();
}

// ? Работает
const duck = new Duck();
makeBirdFly(duck);

// ? Выбросит ошибку! Подстановка невозможна.
const penguin = new Penguin();
makeBirdFly(penguin); 

// ! ==================================================================
// ! 2. СОБЛЮДЕНИЕ LSP (хороший пример)
class Bird {
  move() { console.log('Передвигаюсь') }
}

// * Дочерние классы РАСШИРЯЮТ, а не изменяют поведение
class FlyingBird extends Bird {
  fly() { console.log('Лечу!') }
}

class SwimmingBird extends Bird {
  swim() { console.log('Плаваю!') }
}

// * Утка может и летать, и крякать 
class Duck extends FlyingBird {
  quack() { console.log('Кря-кря!') }
}

// * Пингвин плавает и имеет своё уникальное поведение
class Penguin extends SwimmingBird {
  slide() { console.log('Скольжу на животе!') }
}

// * Функции работают только с летающими птицами
function makeFlyingBirdFly(bird) {
  bird.fly(); 
}

// * Работает только с плавающими птицами
function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck); // "Лечу!" - ОК
// makeFlyingBirdFly(penguin); // Ошибка! У пингвина нет метода fly - и это правильно

makeSwimmingBirdSwim(penguin); // "Плаваю!" - ОК

// Оба могут использовать метод move() из базового класса
duck.move(); // "Передвигаюсь"
penguin.move(); // "Передвигаюсь"