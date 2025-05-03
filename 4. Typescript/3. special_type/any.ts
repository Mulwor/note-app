// ? Any отключает полностью любую проверку типов. Когда пишем any можем 
// ? использовать все что угодно от любых примитивов до объектов

let value: any;
value = 5;
value = [];
value = {};

function logData(data) {
  console.log(data)
}
