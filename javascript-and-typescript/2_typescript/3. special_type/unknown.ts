// ? Unknown - безопасный аналог any, когда мы не знаем какой тип нам ожидается 
// ? на вход. Сделать его неизвестным и засчет соответствующих проверок
// ? безопасно его обработать. П.С. если мы действительно не знаем с 
// ? каким типом нам предстоит работать, то необходимо использовать 
// ? unknown

function logDataWithUnknown(data: unknown) {
  let value: string;

  if (typeof data === 'string') {
    value = data;
  }

  if (Array.isArray(data)) {
    data
  }
}

// ================================================

let valueUnknownWithSuperType: unknown;

valueUnknownWithSuperType = 42;
valueUnknownWithSuperType = 'hello'
valueUnknownWithSuperType = true;
valueUnknownWithSuperType = { name: "Oleg" }

let valueUnknownWithSubType: unknown;
let strForUnknown: string = valueUnknownWithSubType;