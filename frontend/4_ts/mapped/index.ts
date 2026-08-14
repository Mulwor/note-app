interface User {
  name: string;
  age: number;
  friends: Array<string>
}

// Делаем все поля readonly
type ReadonlyType<T> = {
  // Добавили дженерик
  // T[Key] - Вытащили ключи из этого дженерика
  // [Key in keyof T] - потом по этому ключу получили значения через [...]
  readonly [Key in keyof T]: T[Key]
}

type ReadonlyTypeWithOptional <T> = {
  readonly [Key in keyof T]?: T[Key]
}

type ReadonlyTypeWithOptionalAndNull <T> = {
  readonly [Key in keyof T]?: T[Key] | null
}

type NewUser_01 = ReadonlyType<User>
type NewUser_02 = ReadonlyTypeWithOptional<User>
type NewUser_03 = ReadonlyTypeWithOptionalAndNull<User>

// А если у нас есть обязательные поля, то если мы хотим сделать
// опциональными, то
type EditType <T> = {
  readonly [Key in keyof T]?: T[Key]
}

type NewUser_04 = EditType<User>

// Иной пример 
type ArrayAnalog<T> = {
  [K in number]: T
}

const array: ArrayAnalog<string> = ['123', '123', 3];

// ! =================================================================

// Тип, который исключает поле type
interface User {
  name: string;
  age: number;
  type: string;
  friends: Array<string>
}

interface Car { name: string; type: string }
interface RandomObj { name: string; type: string; }

type WithoutType<T> = {
  [K in keyof T as Exclude <K, 'type'>]: T[K]
}