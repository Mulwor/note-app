const objForTypeOf = {
  name: "Oleg",
  age: 25,
}

type PersonForTypeOf = typeof objForTypeOf

// ! ==================================================

const color = 'red';
type RedColor = typeof color;
const green: RedColor = 'green'

// ! ==================================================
function getDataForTypeOf(user: PersonForTypeOf): number {
  return 5
}

// type getData = (user: PersonForTypeOf) => number
type getData = typeof getDataForTypeOf

// ? Если нам нужно вернуть тип аргумента или тип возвращаемого значения
// ? Мы можем сделать это через возвращаемую функцию
// * type GetDataReturnValue = number
type GetDataReturnValue = ReturnType<typeof getDataForTypeOf>
// ? аргументы функции
// * type GetDataParams = [user: {
// *  name: string;
// *  age: number;
// * }]
type GetDataParams = Parameters<typeof getDataForTypeOf>
// keyof - позволяет доставать ключи
type PersonKey = keyof PersonForTypeOf;

// ! ==========================================================
// Есть функция, которая из объекта по ключу достает данные

function getByKey<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

getByKey(obj, 'age')