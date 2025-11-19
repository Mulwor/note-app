### Задачи по TypeScript

<details>
<summary>Необходимо протипизировать функцию, которая принимает два параметра: obj, key и возвращает значения по ключу объекта.</summary>

```js
const X = { a: 1, b: 2, с: 3, d: 4 }

function getProperty(obj, key) {
  return obj[key]
}

getProperty(X, "a");
getProperty(X, 'm')
```

### Решение

```js
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
} 

getProperty(X, "a");
getProperty(X, 'm');

// Объяснения
1. Есть параметры типа T, это тип объекта, которую мы будем передавать в эту функцию в данном случае это X;
2. Второй параметр K - здесь мы используем ограничения и оно говорит, что K у нас должен быть одним из ключей объекта Т. Если мы передаем 'a', то проверка сработает, так как ключ у нас есть, а если нет, то выдаст ошибку, а вот ключа 'm' у нас нет по этому и выведится такая ошибка
```
</details>

<details>
<summary>Написать реализацию существующего утилитарного типа - partial и pick</summary>

## Partial (все св-в делает необязательными)

```ts
type MyPartial<Type> = {
  [Key in keyof Type]? = Type[key];
}
interface User { id: number; name: string; email: string }
const user: MyPartial<User> = { name: "John" }

// Объяснения
Создаем новый тип, в котором необходимо перебрать все ключи исходного типа и каждому ключу применить определенные изменения. В данном случае мы применяем опциональность просто добавляем знак вопроса
```

## Pick

```ts
type MyPick<T, Keys extends keyof T> = {
  [k in Keys]: T[k];
};

// Объяснения
1. T - исходный тип, из которого будем выбирать свойства
2. Keys extends keyof T - ограничение, которое гарантирует, что мы можем выбирать только те ключи, которые действительно существуют в типе T
```
</details>

<details>
<summary>Необходимо ограничить user по объекту</summary>

Реализуйте и строго типизируйте универсальную функцию 'updateEntity', которая:
1. Принимает два аргумента:
- entity - объект сущности, который нужно обновить;
- updates - объект с обновлениями, содержащий часть свойств из `entity`
2. Возвращает новый объект, который объединяет `entity` и `updates`.

```js
interface User { id: number; name: string; email: string }
interface Post { id: number; title: string; content: string, published: boolean } 

const user: User = { id: 1, name: "Alice", email: "alice@example.com"},
const updateUser = updateEntity(user, {name: "Bob"}) // Корректно
// Ожидаемый результат: {id: 1, name: "Bob", email: "alice@example.com"}

const post: Post = { id: 1, title: "hello", content: 'world', published: true},
const updatePost = updateEntity(user, { published: true }) // Корректно
// Ожидаемый результат: { id: 1, title: "hello", content: 'world', published: true}

updateEntity(user, { age: 30 })     // Ошибка "age" не существует в типе User
```

### Решение

```js
// ... Типы User, Post

function updateEntity<T extends object>(entity: T, updates: Partial<T>):T {
  return {...entity, ...updates }
}

// Объяснения 
1. Создаем функцию updateEntity, внутри которого дженериком пишем параметр типа Т, и он ограничен будет только объектом. То есть Т будет объектом
2. updates: Partial<T> - все свойства делаем необязательными, то есть updates тоже объект, но у этого объекта должны быть свойства того объекта (сущности), которого мы обновляем, но мы же хотим обновить только одно свойства соответсвенно мы должны иметь возможность передавать не все свойства в интерфейс для этого мы используем утилитарный тип.

// Внизу находятся user, updateUser, post, updatePost
```
</details>

<details>
<summary>Есть 4 кода, необходимо разобрать его</summary>

#### 4. Есть 4 кода, необходимо разобрать его

```ts
// 1. Определите функционально утилитарного типа
type Some<T, U extends keyof T> = { [key in U]: T[key] };

// Объяснения
1. Кастомный Some позволяет создать новый тип, который содержит только выбранные свойства из исходного типа Т
2. U extends keyof T - множество ключей из параметра типа Т
3. [key in U]: T[key] - маппинг типа, создается новый тип, где значения совпадают с исходным типом, то есть из Т (исходного объекта) мы берем только те ключи, которые есть в нашем параметре типа U

interface User { id: number; name: string; email: string }
type UserPreview = Some<User, 'id' | 'name'>;
```

```ts
// 2. Что выведет в консоль следующий код?
enum NUMBERS { ONE, TWO, THREE };
console.log(NUMBERS.ONE);       // 0

// Объяснения
По умолчанию enum нумеруется с нуля => ONE (0), TWO (1), THREE (2) 
```

```ts
// 3. Чему будет равен тип U?
type T = "a" | "b" | "c";
type U = Extract<T, "a" | "d">;

// Объяснения
Утилитарный тип extract работает как фильтр. Если значение совпало со вторым значение ("a") то он оставляет этот тип, а если нет, то он исключает его
```

```ts
// 4. Чему будет равен тип Answer?
type ObjectType = { a: string; b:boolean }
type Answer = ObjectType['a'];

// Объяснения
Извлекаю тип 'a' из ObjectType. У него свойства `a` равно string и поэтому Answer равен string
```
</details>

<details>
<summary>Преобразование типа</summary>

Дан код, необходимо написать свой тип так, чтобы каждое св-в внутри Status был в квадратных скобках, то есть так ["new"] | ["waiting_load"] | ['in_work'] | ['done']

```ts
type Status = "new" | "waiting_load" | 'in_work' | 'done' | 'cert_ready';
type StatusWithBrackets = Status;
const val: StatusWithBrackets = '[waiting_load]';
```

```ts
// 1. Первый способ решение задачи - через шаблонную строку, чтобы обернуть каждый элемент в квадратные скобки
type Status = "new" | "waiting_load" | 'in_work' | 'done' | 'cert_ready';
type StatusWithBrackets = `[${Status}]`;
const val: StatusWithBrackets = '[waiting_load]';


// 2. Маппинг типов - проходимости по каждому значению и по статусу и оборачиваем в квадратные скобки, то есть для каждого ключа K мы генерируем строку в виде K и квадратные скобки
type Status = "new" | "waiting_load" | 'in_work' | 'done' | 'cert_ready';
type StatusWithBrackets = {
  [K in Status]: `[${K}]`;
}[Status]
const val: StatusWithBrackets = '[waiting_load]';
```
</details>

<details>
<summary>Необходимо записать правильный тип для MYType, чтоб переменные, которым это тип будет присвоем имели тип состоящий из ключей объекта obj</summary>

```ts
const obj = { name: "Nik", age: 25 };
type MYType = any;          // Вместо any нужный тип

const var1: MYType = "name";            // Correct
const var2: MYType = "age";             // Correct
const var3: MYType = "test";            // Error
const var4: MYType = 25;                // Error
```

### Решение

```ts
type MYType = keyof typeof obj;

// Объяснения
1. typeof obj - получает тип объекта obj (в данном случае { name: string; age: number; })
2. keyof typeof obj - получает объединение всех ключей этого типа (в данном случае "name" | "age")
```
</details>

<details>
<summary>Как можно улучшить типизацию в TypeScript</summary>

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
</details>

<details>
<summary>Необходимо исправить типизацию</summary>

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
</details>

<details>
<summary>Напишите и типизируйте функцию, рассчитывающую стоимость с учетом скидки и рассрочки на заданное кол-в месяцев</summary>

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
</details>

<details>
<summary>Типизировать функцию, чтобы возвращаемое значение было противоположным входящему. У нас на вход приходит string или number, если приходит string вернуть number и наоборот</summary>

```ts
function test(a) {}
const result1 = test('123');        // result1 будет number
const result2 = test(456);          // result2 будет string
```

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
</details>

<details>
<summary>Необходимо описать общий тип valueOf (может быть и объектом и массивом), чтобы данные типы были верными </summary>

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

### Решение через infer:
```ts
type obj = { key1: string; key2: number };
type Arr = number[];
type ValueOfObj = ValueOf<Obj>;         // ? type ValueOfObj = string | number;
type ValueOfArr = ValueOf<Arr>          // ? type ValueOfArr = number

type ValueOf<T> = T extends Arr<infer U> ? U : T extends Obj ? T[keyof T]: never
```  
</details>

<details>
<summary>Необходимо протипизировать данную функцию</summary>

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
</details>

<details>
<summary>Что будет содержать Type1 и Type2</summary>

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
</details>

<details>
<summary>Необходимо получить тип функции и тип возвращаемого значения</summary>

```ts
function log(data: string[], num: number): boolean {
  console.log(data, num)
  return false;
}
```

### Решение

```ts
function log(data: string[], num: number): boolean {
  console.log(data, num)
  return false;
}

type LogReturn = ReturnType<typeof log>
type LogParams = Parameter<typeof log>[1]
```
</details>

<details>
<summary>Задача: как описать объект `obj` так, что бы `values` были только <string | boolean>. А при обращении к любому `keys` объекта `obj` не терялся тип значения</summary>

```ts
const obj = {
  hello: 'world',
  enable: true,
  whatAboutNumber: 0,
  // ...other keys values
}

console.log('obj', obj.hello.toLocaleUpperCase())
console.log('obj', obj.enable)
```

### Решение

```ts
const obj: Record<string, string | boolean> = {
  hello: 'world',
  enable: true,
  // whatAboutNumber: 0,
  // ...other keys values
}

console.log('obj', obj.hello.toLocaleUpperCase())
console.log('obj', obj.enable)
```
</details>

<details>
<summary>Напишите и типизируйте функцию, выполняющую запрос за данными по переданному URL. Выведите их в консоль в формате: "ID: id", Email: email".</summary>


```ts
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
/** 
 * Id: 1, Email: Eliseo...
 * Id: 2, Email: Eliseo_2...
*/

const getData = ( url ) => {
  // Your code here
}

// 10.1. Необходимо получить тип возвращаемого значение функции (не Promise, а массив комментов)

getData(COMMENTS_URL).then((data) => {
  // Your code here
})
```

### Решение

```ts
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface Comment {
  post: number;
  id: number;
  name: string;
  email: string;
  body: string
}

const getData = async ( url: string ): Promise<Comment[]> => {
  const response = await fetch(url);
  const data = await response.json();

  return data
}

// Если мы хотим получит тип возвращаемого значение функции (не Promise, а массив комментов), то можем использовать
type res = Awaited<ReturnType<typeof getData>>
```
</details>


<details>
<summary>Написать типизацию подходящего для двух объектов, не потерять типизацию "за" ключами в endpoints, то есть key: string и Record<string> не подходят.</summary>

Принять, что сами ключи endpoint нам известны на этапе типизации каждого объекта: "getVtemplates" и "postVtemplates" для vtemplateObject, getReports и putReports для reportObject

Подсказка - у нас должен быть общий тип

```ts
// --- 1 --- Задает структуру объектов, не знает про конкретные объекты, и их методы
```


```ts
// --- 2 --- Не может менять базовый тип, но знает про структуру объекта который типизирует
```

```js
const templateObject = {
  entity: 'template',
  endpoints: {
    getTemplates: {
      method: "GET",
      url: "template"
    }
    postTemplates: {
      method: "POST",
      url: "template"
    }
  }
}

const reportObject = {
  entity: 'report',
  endpoints: {
    getReports: {
      method: "GET",
      url: "report"
    }
    postReports: {
      method: "POST",
      url: "report"
    }
  }
}
```

### Решение

```ts
// --- 1 --- 
interface Endpoint {
  method: string;
  url: string;
}

interface ApiObject<T extends string> {
  entity: string,
  endpoints: Record<T, Endpoint>
}

const templateObject: ApiObject<'getTemplates' | 'postTemplates'> = {
  entity: 'template',
  endpoints: {
    getTemplates: {
      method: "GET",
      url: "template"
    }
    postTemplates: {
      method: "POST",
      url: "template"
    }
  }
}

const reportObject: ApiObject<'getReports' | 'postReports'> = {
  entity: 'report',
  endpoints: {
    getReports: {
      method: "GET",
      url: "report"
    }
    postReports: {
      method: "POST",
      url: "report"
    }
  }
}
```
</details>

<details>
<summary>Мы должны проверять, если мы передали isTeamMember, то обязательно должен быть передан и yearsOfExperience</summary>

isTeamMembers и yearsOfExperience должны идти парами, если нет isTeamMembers, то и не должно быть yearsOfExperience, то есть должно вывестись ошибка

```ts
interface AvatarProps {
  imgSrc: string;
  isTeamMembers?: boolean;
  yearsOfExperience?: number;
}

const avatarProps1: AvatarProps = { imgSrc: '...' }
// @ts-expect-error
const avatarProp2: AvatarProps = { imgSrc: '....'; isTeamMembers?: true; }

const avatarProp3: AvatarProps = {
  imgSrc: '-----';
  isTeamMembers?: true;
  yearsOfExperience?: 3;
}
```

### Решение

```ts
type AvatarProps = {
  imgSrc: string;
} & (
  | { isTeamMember?: never; yearOfExperience?: never}
  | { isTeamMember: true; yearOfExperience: true}
)

// Объяснения imageSource будет постоянным и мы этот интерфейс через пересечение & выбираем с чем объединить либо с вариантом isTeamMember и тогда не yearsOfExperience либо с тем и с тем
```
</details>