✅ Задача (Скомунизжу потом найду куда вставить)

### Задачи по TypeScript на собеседованиях

В данном разделе включены самые частотные задачи по TypeScript. Для того, чтобы улучшить свои знания и спокойно проходить собеседование можно прорешать два раздела задач: [typescript puzzles](https://bigfrontend.dev/typescript) и [type challenge](https://github.com/type-challenges/type-challenges);

#### 1. Необходимо протипизировать функцию. Дана функция, которая принимает два параметра: obj, key и возвращает значения по ключу объекта.

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

#### 2. Написать реализацию существующего утилитарного типа 

#### 2.1. Partial (все св-в делает необязательными).

```js
interface User { id: number; name: string; email: string }
type MyPartial<Type> = {/* Code here */}
const user: MyPartial<User> = { name: "John" }
```

#### Решение

```js
type MyPartial<Type> = {
  [Key in keyof Type]? = Type[key];
}
interface User { id: number; name: string; email: string }
const user: MyPartial<User> = { name: "John" }

// Объяснения
Создаем новый тип, в котором необходимо перебрать все ключи исходного типа и каждому ключу применить определенные изменения. В данном случае мы применяем опциональность просто добавляем знак вопроса
```

#### 2.2. Написать реализацию существующего утилитарного типа.

```js
type Obj = { key1: string; key2: string; key3: string };
// type Example = MyPick<Obj, "key1" | "key2">;
```

### Решение
```js
type MyPick<T, Keys extends keyof T> = {
  [k in Keys]: T[k];
};

// Объяснения
1. T - исходный тип, из которого будем выбирать свойства
2. Keys extends keyof T - ограничение, которое гарантирует, что мы можем выбирать только те ключи, которые действительно существуют в типе T
```

#### 3. Необходимо ограничить user по объекту

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

#### 5. Преобразование типа

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

#### 6. Необходимо записать правильный тип для MYType, чтоб переменные, которым это тип будет присвоем имели тип состоящий из ключей объекта obj

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