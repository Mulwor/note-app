/**
 * ! 1. Опишите тип DataTuple так, чтобы значения соответствовали своему типу
 * ! и компилятор TypeScript не выдавал ошибок:
 * 
*/
type DataTuple = [number, string, boolean, ...string[]];

function tupleToObject(tuple: DataTuple) {
  const [id, label, active, ...rest] = tuple;
  return { id, label, active, rest };
}

tupleToObject(
  [42, 'Статья', true, 'Очень', 'длинный', 'длинный', 'длинный', 'длинный', 'текст', '!']
);



// ? ==========================================================================================

// ! 2. Как типизировать массив, чтобы он мог содержать только 2 значения, определённого типа
type tupleData = [number, string];
const tuple : tupleData  = [100, 'i am string']

tuple[0] = 'typescript'
const temp = tuple[2]
tuple.push('false') 

// ! 2.1 Почему даже если мы типизируем кортежом, этот код не выдаст ошибки
// ? Потому что первым элементам всегда должно быть число, а присваиваем ему строку


// ! 2.2 Как типизировать, чтобы было 2 обязательных параметра, а потом сколько угодно чисел
type tupleData2 = [boolean, string, ...number[]];
const tuple2: tupleData2 = [true, 'typescript', 1, 2, 3, 4, 5]

tuple2[7] = 6;
const temp_01 = tuple2[8]
temp_01.push('false') 

// ? ==========================================================================================

/**
 * ! 3. Реализуйте mapped-тип PrefixSuffix, что бы получить: "before_info_after" | "before_actions_after"
*/

type Keys = 'info' | 'actions';
type PrefixSuffix<T extends string, string, string> = any; // Ваш код
type Result = PrefixSuffix<Keys, 'before_', '_after'>;

// ? ==========================================================================================

// ! Написать тип isString
type IsString<T> = any;

type Result1 = IsString<string>; // true
type Result2 = IsString<number>; // false

// ? ==========================================================================================

// ! Написать тип UnwrapPromise так, что бы "Распаковать" значение внутри Promise

type UnwrapPromise<T> = any; // Ваш код
type U1 = UnwrapPromise<Promise<number>>;        // number 
type U2 = UnwrapPromise<string>;                 // string 
type U3 = UnwrapPromise<Promise<string | null>>; // string | null 
type U4 = UnwrapPromise<number>;                 // number 

// ? ==========================================================================================

// Типизировать функцию
interface User {
  age: number
  name: string
}

// Функция для создания и валидации полей объекта
function createAndValidate(name, age) {
  const newUser = {}

  if (name.length = 0) {
    newUser.name = name
  }

  if (age > 18) {
    newUser.age = age
  }

  return newUser
}

// ? ==========================================================================================
type MyPick<T, K extends keyof T> = {}

// ✅ Тесты:
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type Test1 = MyPick<Todo, 'title'>;
// Ожидаемо: { title: string }

type Test2 = MyPick<Todo, 'title' | 'completed'>;
// Ожидаемо: { title: string; completed: boolean }

// ❌ Это должно вызывать ошибку:
// type Test3 = MyPick<Todo, 'invalid'>; // Error: 'invalid' not in keyof Todo



// ? ==========================================================================================
type MyExclude<T< > = /* ваш код */;
type MyExtract = any;
type MyOmit = any;
type MyPick = any;

// ✅ Тесты:
type Test1 = MyExclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
type Test2 = MyExclude<string | number | boolean, boolean>; // string | number
type Test3 = MyExclude<1 | 2 | 3, 2 | 4>; // 1 | 3



// ? ==========================================================================================
// Как получить возвращаемый тип функции и тип второго параметра функции?
function log(data: string[], num: number): boolean {
    console.log(data, num)
    return false
}

// ? ==========================================================================================
// Как получить возвращаемый тип функции и тип второго параметра функции?
type ValueOf = /* ваш код */;

// ✅ Тесты:
interface Config {
    port: number;
    host: string;
    ssl: boolean;
}

type Test1 = ValueOf<Config>; // number | string | boolean

type Test2 = ValueOf<{ a: 1; b: 'x'; c: true }>; // 1 | 'x' | true

// ? =======================================================================================

type DeepPartial = any;

// ✅ Тесты:
interface User {
    name: string;
    settings: {
        theme: 'dark' | 'light';
        notifications: {
            email: boolean;
            push: boolean;
        };
    };
}

type Test1 = DeepPartial<User>;
/* Ожидаемо:
{
  name?: string;
  settings?: {
    theme?: 'dark' | 'light';
    notifications?: {
      email?: boolean;
      push?: boolean;
    };
  };
}
*/

// ✅ Работает с массивами:
type Test2 = DeepPartial<{ items: string[] }>;
// { items?: string[] }

// ? =====================================================================================
/**
 * Задача: 
 * Как описать объект `obj` так, что бы `values` были только <string | boolean>
 * 
 * А при обращении к любому `keys` объекта `obj` не терялся тип значения
 */

const obj = {
    hello: 'world',
    enable: true,
    whatAboutNumber: 0,
    // ... other keys: values
}

console.log('obj', obj.hello.toLocaleUpperCase())
console.log('obj', obj.enable)

// ? =====================================================================================

// Что такое keyof, typeof?
interface User {
    name: string;
    age: number;
}

type UserKey = keyof User

const key: UserKey = 'name'
const str1: string = 'hello'

type MyString = typeof str1

// Как получить ключи у объекта
const user: User = { age: 25, name: 'ivan' }

type userKey2 = keyof user

// ? =====================================================================================
// Типизировать getValue, чтобы можно было обращаться к любом объекту по его ключам
const obj = { a: 1, b: 2, c: 'a' }


function getValue(obj: object, key: stin):  {
    return obj[key]
}

const res1 = getValue(obj, 'a')