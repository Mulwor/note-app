[10 задач по TypeScript](https://www.youtube.com/watch?v=rLwVcc0-WBU)

---

1. Улучшить типизацию в TypeScript

```ts
interface User { name: string; age: number };
interface UserWithRole { name: string; age: number, role: string }

// role - 'admin' или 'user'
const admin: UserWithRole = { name: "Alice", age: 30, role: "admin" }
```

### Решение

```js
interface User { name: string; age: number };
interface UserWithRole extends User { 
  role: Role
}
type Role = "admin" | "user"

// Объяснения
1. Можно использовать extends (наследование), чтобы не дублировать использующий тип
2. И в роли можно указать, что она не просто строка, а 'admin' | 'user'. => пересечение типов. 
3. Ну и можно вынести в отдельный тип роль
```

В чем отличие типов от интерфейса

- В интерфейсах наследование есть, а в типах нет
- В типах мы можем записать в одну строчку (пересечение типов), а интерфейс больше для объектов
- Если мы напишем два интерфейса с одинаковыми именами, то они объедяняться в то время как типы выдаст ошибку

---

2. Необходимо исправить здесь типизацию

```ts
interface Todo { id: number; title: string; done: boolean}

const createNewTodo = (todo: Todo) => {
  const id = useId();

  return ({ ...todo, id})
}
```

### Решение

```ts
interface Todo { id: number; title: string; done: boolean}

const createNewTodo = (todo: Omit<Todo, 'id'>): Todo => {
  const id = useId();

  return ({ ...todo, id})
}


1. Нет возвращаемого типа
2. Можно использовать Omit, который удалит тип
```

Доп.вопрос - 

1. Будут ли какие-то отличия для типизации, если поля будут идти не в том порядке, вак у нас описано в типе? - Для ТС нет разницы
2. Для чего используется keyof и typeof -
keyof возвращает ключи нашаего типа
typeof показывает выражение, которое в скобках мы подставляем
3. Что такое дженерики - типизация входных параметров - обобщенный тип. У нас есть дженерик Т, и чтобы передать второй дженерик можно использовать K
4. Как мы можем в ТС сужить дженерик - extends 

--- 

3. Дана функция, которую необходимо протипизировать

Напишите и типизируйте функцию, рассчитывающую стоимость с учетом скидки и рассрочки на заданное кол-в месяцев:

```ts
const totalPrice = ( {price, discount, isInstallment, months } => {
    // Your code here
})

const price = totalPrice({ price: 10000, discount: 25, isInstallment: true, months: 12 })
console.log(price)   // 6250
```

### Решение

```ts
interface totalPriceParams {
    price: number, 
    discount: number, 
    isInstallment: boolean, 
    months?: number 
}

const totalPrice = (props: totalPriceParams) => {
    // Your code here
}

const price = totalPrice({ price: 10000, discount: 25, isInstallment: true, months: 12 })
console.log(price)   // 6250
```

---

4. Типизировать функцию, чтобы возвращаемое значение было противоположным входящему. У нас на вход приходит string или number, если приходит string вернуть number и наоборот

```ts
function test(a) {

}
const result1 = test('123');        // result1 будет number
const result2 = test(456);          // result2 будет string
```

Доп.вопрос - что такое условные типы

перегрузка - одной функцией в TS можно сколько угодно задать типов и потом оно одному из них должно удовлетворять

перегрузка - когда под одним именем типа пишешь несколько сигнатур (типы входных параметров и возвращаемое значение и затем) последствие TS может подогнять любой из типов под код. Перегрузка должна называть как и наша функция

### Решение

```ts
type findStrOrNum = string | number
// Простое решение
function test(a: findStrOrNum) : findStrOrNum extends string ? number : string {}
// Через дженерик
function test2<T extends string | number>(a: T): T extends string ? number : string
// Через перегрузку
test3 = {
  (a: number): string
  (a: string): number
}
const test4 = function (a) {
    return 1;
} as test3;

const result1 = test('123');        // result1 будет number
const result2 = test(456);          // result2 будет string

// Объяснения
1. Напишем общий тип findStrOrNum;
2. Если он экстендится от строки то возвращаем number, а если нет то строку
```

---

Доп.вопрос - отличие extends от implements? - Extends - наследование, а Implements используется для реализации. То есть мы можем реализовать класс с помощью какого-то интерфейса

В интерфейсе мы можем задать только структуру, что хотим реализовать, а в классе пишем саму реализацию. У нас класс может только наследоваться один, а для интерфейсов у нас есть множественное наследование 

#5. Нужно описать общий тип valueOf (может быть и объектом и массивом), чтобы данные типы были верными

```ts
type obj = { key1: string; key2: number };
type Arr = number[];
type ValueOfObj = ValueOf<Obj>;         // ? type ValueOfObj = string | number;
type ValueOfArr = ValueOf<Arr>          // ? type ValueOfArr = number
```

### Решение

```ts
type obj = { key1: string; key2: number };
type Arr = number[];
type ValueOfObj = ValueOf<Obj>;         // ? type ValueOfObj = string | number;
type ValueOfArr = ValueOf<Arr>          // ? type ValueOfArr = number

type ValueOf<T> = T extends Arr ? number : T extends Obj ? T[keyof T]: never
```  

Доп.вопрос - что такое infer  

Оператор infer используется в контексте типовых параметров для "вывода" типа данных из другого типа. Это позволяет явно указывать тип данных, когда TypeScript не может самостоятельно его определить

```ts
type obj = { key1: string; key2: number };
type Arr = number[];
type ValueOfObj = ValueOf<Obj>;         // ? type ValueOfObj = string | number;
type ValueOfArr = ValueOf<Arr>          // ? type ValueOfArr = number

type ValueOf<T> = T extends Arr<infer U> ? U : T extends Obj ? T[keyof T]: never
```  

--- 

Доп.вопрос - Какие утилитарные типы используется для функций? - Parameters, return type, awaited (условный промис)

6. Необходимо протипизировать данную функцию
```ts
interface User { age: number, name: string };

function createAndValidate(name, age) {
  const newUser = {};

  if (name.length = 0) {
    newUser.name = name
  }
  
  if (age > 18) {
    newUser.age = age
  }

  return newUser
}
```

### Решение

```ts
interface User { age: number, name: string };

function createAndValidate(name: string, age: number) {
  const newUser: Partial<User> = {};

  if (name.length === 0) {
    newUser.name = name
  }
  
  if (age > 18) {
    newUser.age = age
  }

  return newUser
}
```

7. Что будет содержать Type1 и Type2

Что такое extract (берет то, что соответствует условию) и exclude (берет не то, что соответствует условию). Похож на pick и omit, только здесь идет работа с ключами уже

```ts
interface User { name: string; age: number; hobbies: string[] };

type Type1 = Extract<'age' | 'some' | 'hobbies', keyof User>
type Type2 = Exclude<'a' | 'b' | User, string>
```

### Решение

```ts
interface User { name: string; age: number; hobbies: string[] };

type Type1 = Extract<'age' | 'some' | 'hobbies', keyof User>    // age, hobbies
type Type2 = Exclude<'a' | 'b' | User, string>                  // User


// Extract берет то что соответствует условию - в начале у нас есть тип из объединения строк 'age' | 'some' | 'hobbies', keyof тоже возвращает ключи - name, age, hobbies и возвращает age и hobbies, так как они одинаковые
// В начале в Exclude у нас будет тип, из которого мы будем исключать - 'a' | 'b' | User, и исключаем мы все типы string и остается только User
```

8. Нам нужно получить тип функции и тип возвращаемого значения