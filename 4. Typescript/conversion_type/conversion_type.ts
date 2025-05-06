interface Person {
  age: number;
  userName: string;
  password: string;
}

// const conversationType_01: Person
const conversationType_01 = {
  age: 25,
  userName: "Oleg"
  // Плохой метод так как password не отображает как обязательное поле
  // можем что-то пропустить
} as Person


// const conversationType_02: { age: number; userName: string; }
const conversationType_02 = {
  age: 25,
  userName: "Oleg"
} satisfies Person

// ! ================================================================================
function JSONParse<T>(data: string): T {
  return JSON.parse(data) as T
};

const parsedJson: Person = JSONParse('{age: 25}')    // const parsedJson: any

async function allowAs() {
  const data = await fetch('')
  const parseData = await data.json;
}

// ! ================================================================================
const PersonKeys = {
  age: 'age',
  userName: 'userName',
  password: 'password'
} as const;

const obj = {
  age: "25",
  userName: "Oleg",
  password: '123'
}

// const PersonKeys: {
//   readonly age: "age";
//   readonly userName: "userName";
//   readonly password: "password";
// }

// keyof - позволяет извлечь ключи из объекта
function keys<T extends object>(data: T): Array<keyof T> {
  // Результат этой функции мы явно преобразовываем в то,
  // что ожидаем
  return Object.keys(data) as Array<keyof T>; 
}

const k = keys(obj);