// Записать правильный тип для MYType, чтоб переменные,
// которым это тип будет присвоем имели тип состоящий из ключей объекта obj

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const obj = {
  name: "Nik",
  age: 25,
};

type MYType = any;
// Вместо any нужный тип

//---------

/** Тут не должно быть ошибок типов */

const var1: MYType = "name";

const var2: MYType = "age";

//----------

/** Тут должны быть ошибки типов */

const var3: MYType = "test";

const var4: MYType = 25;
