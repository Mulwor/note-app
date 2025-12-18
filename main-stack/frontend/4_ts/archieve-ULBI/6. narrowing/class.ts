// ! ===================================================================
// ? Способ сузить тип с помощью классов
class Bmv {}
class Audi {}

const bmw = new Bmv();
const audi = new Audi();

function narrowing_04(arg: Bmv | Audi) {
  if (arg instanceof Bmv) {
    // (parameter) arg: Bmv
    arg
  } else {
    arg
  }
}
