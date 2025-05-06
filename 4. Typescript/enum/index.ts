const Color_01 = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue"
}

const Color_02 = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue"
} as const

Color_01.BLUE = 'ref'
Color_02.BLUE = 'ref'

enum ColorEnum {
  RED = "red",
  GREEN = "green",
  BLUE = "blue"
}

enum ColorEnum_02 {
  RED,
  GREEN,
  BLUE = 5,
  // (enum member) ColorEnum_02.YELLOW = 6
  YELLOW
}

// К enum можно обратиться также по значению (только если
// у нас числовой enum) => Red, 
console.log(ColorEnum_02[0])

function setColor(color: ColorEnum) {}

setColor(ColorEnum.BLUE)

// Заменяем полностью энамы обычным const объектами
// 1. type Color = "red" | "green" | "blue"
type Color_01 = typeof Color_02[keyof typeof Color_02]

// 2. type Color = "red" | "green" | "blue"
type ValueOf<T> = T[keyof T];
type Color_02 = ValueOf<typeof Color_02>

// ========================================================
// Разберем два примера - 
// ! 1. Где все нормально работает и можно создавать бесконечные
// ! типы

type UserForExample_01 = { username: string; age: number };
type UserForExample_02 = { username: string; age: number };

function prepareUser(user: {username: string; age: number }) {}

const userForExample_01: UserForExample_01 = { username: 'Oleg', age: 25 };
const userForExample_02: UserForExample_02 = { username: 'Vladimir', age: 24 };

// ! 2. И если у нас два одинаковых енами по разные названию, а 
// ! не внутренности, то выбросит ошибку

enum UserForExampleWithEnum_01 { RED = "red" };
enum UserForExampleWithEnum_02 { RED = "red" };

function prepareUser(user: {username: string; age: number }) {}

prepareUser(UserForExampleWithEnum_01.RED)