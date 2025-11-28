<details>
<summary>✅ Работа с браузером</summary>

<details>
<summary>Что так Babel?</summary>

Babel - преобразует современный код ЕС6 в более старую спецификацию, для того, чтобы увеличить поддержку браузеров. Просто старые браузеры не понимают современный язык ЕС6 и babel выступает в качестве переводчика. Также он может преобразовать JSX под которым внутри `React.createElement`
</details>

<details>
<summary> Что такое полифил (polyfill)? </summary>

Например у нас есть современный код написанный на ЕС6, однако он не работает в старых браузерах, так вот с помощью полифила мы можем преобразовать наши функции для старых браузеров. Вот пример: sessionStorage доступно во всех последних браузерах (IE8 и выше), но не в IE7 и ниже. Полифилл можно использовать для включения поддержки старых браузеров, которые не предоставляют файлы sessionStorage.

</details>

<details>
<summary>Какие этапы отрисовки есть у страницы браузера?</summary>

</details>

<details>
<summary>Что происходит когда в адрес браузера вбиваешь какой-либо текст и нажимаешь enter?</summary>

</details>

<details>
<summary>Какие инструменты откладки ты знаешь</summary>
- console.log();
- через инструмент разработчика Chrome() - когда мы пишем в коде debugger (некая точка останова) и проверяем в хроме передаются ли значение в дочерний компонент. Либо можем просто внутри браузера ставить эти точки остановы под цифрами. Есть также нетворк где можно узнать какие запросы литеть и правильно ли мы передали какой-либо запрос
- React Developer Tools и postman
</details>

</details>

<details>
<summary>✅ Вопросы связанные с тестированием</summary>

<details>
<summary>Какие ты знаешь виды тестов?</summary>

`Unit-test` - это когда мы проверяем какой-то кусочек кода отдельно от всего приложения. Например при сложении двух чисел или написать тест, которая проверяет на наличие пробелов, проверить на наличие какого-то айтема в списке.

Библиотеки: Jest, Vitest

`Integration-tests` - интеграционные тесты - проверить как несколько частей программы работают вместе. Например: 
- Форма логина - когда человек пишет имя, а потом пароль, а потом нажимает отправить. И приходит ответ вы вошли
- Пример магазин - человек добавляет в корзину товар, там счетчик увеличивается, потом сумма пересчитывается и обновляется страница

`E2E (End-to-End tests)` - проверяет как работает все приложение от начало до конца, как будто им пользуется настоящий человек. Прям каждый пункт мы описываем

Библиотека Cypress
</details>

<details>
<summary>Какие есть методы у vitest / jest?</summary>

`describe('')` - когда мы хотим тесты объединить в один общий блок. Ну и внутри написать `test('')` и что мы тестируем. Мы например можем скипнуть какой-то определенный тест через метод
`.skip`, с помощью метода `.todo` - мы можем выделить какой тест еще предстоит нам писать

Всякие beforeAll, afterAll - выполняются перед или после завершение всех тестово. Например когда у нас есть фейковый сервер, то мы один раз к нему можем обратится. 

Есть также методы всякие через expect() 
.toBe() - проверяет на строгое равенство,
.toBeTruthy, toBeFalse - проверяет является ли значение истинные или ложным
.toBeNull(), toBeUndefined() - проверка на undefined
.resolves.toBe() - проверка успешного промиса
</details>
</details>

<details>
<summary>✅ Вопросы по TS (TypeScript)</summary>

### Секция TypeScript

<details>
<summary>Что такое TypeScript и какие преимущество и недостатки у него?</summary>

</details>

<details>
<summary>Перечислите основные типы TypeScript?</summary>

В typescript есть 3 примитивных типа: string, number, boolean. Также мы эти примитивы можем обернуть в массив через квадратные скобки или Array<number> или объект через фигурные

- `Any` - работает по принципу, что его тип может быть любым, это все равно, что писать на чистом JavaScript.

- `unknown` похож на тип any, но он более безопасный, то есть мы не можем ему сразу присвоить новый тип нам нужно сделать некую проверку через typeOf, instanceof и уже внутри написать тип который мы хотим сделать. Результаты JSON.parse

- `void` - это тип, который предназначен только для того, чтобы показывать, что функция не возвращает никакое значение, то есть нет return

- `never` использует тогда когда мы доходим до случая, который не может никогда произойти как в switch...case или reducer: default. Я его использую для доп.проверки компилятором, что какая-то ситуация реально не может произойти

- Чем отличаются друг от друга такие типы как: :never, :void

```
never - гарантия того что функция не вернет вообще ничего
void - когда функция ничего не возвращает
```

</details>

<details>
<summary> Чем отличается type/interface?</summary>

- Синтаксис

- Если у нас есть тип и интерфейс, то интерфейс может наследоваться от типа, а тип через extends не может наследоваться.

- Если мы хотим взять какой-то примитивный тип у type, то внутри interface мы можем обратится к типу объявленный через type

- Если у нас есть два типа, то мы можем объединить через | (палочку), у интерфейса такой функции нету.

- Типы с одинаковыми именами мы не можем писать, так как будет ругаться, а вот интерфейс можно и тем самым мы можем их расширять

</details>

<details>
<summary>Чем отличается union-(I) и intersection-(&) типы</summary>

union типы применяются когда значения может быть одного из нескольких типов
intersection когда необходимо объединить свойства нескольких типов в один
</details>

<details>
<summary> Что такое type-guard?</summary>

TypeGuard - это runtime проверка, которая передается компилятору typescript и информирует о том, что дальше будут определенные типы (или мы попробуем сузить типы до определенных). К type-guard можно отнести - `typeof; instanceOf; in (проверяет есть определенное св-в в объекте); if...else; строгое сравнения`

</details>

<details>
<summary> Что такое generic?</summary>

Generic нужны нам тогда, когда мы не знаем четкий тип, которые передаются к нам в параметры. C помощью generic мы говорим ТС определи сам тип `переданного нам аргумента`.

Где можно использовать generic? - Типы, интерфейс, классы, функции

Также есть ограничение, например он (generic) определяет string и не разделяет, что это может быть даже в массиве string, в этом случае нам нужно extends.

</details>

<details> 
<summary> Перечислите utility types </summary>

Utility `[juː'tɪlətɪ]` types - это встроенные типы, которые помогают, как-то манипулировать типами

1. `Partial` - делает все поля (типы) необязательным
2. `Required` - делает все поля (типы) обязательными


0. Record - создает тип, который представляют объекты с заданными ключами и значениями. Она позволяет определить тип объекта, где все ключи имеют один и тот же тип значения.

1. Pick - нужен когда у нас есть тип, и мы хотим создать новый тип со свойствами другого типа

2. Omit - создает тип, исключая набор свойств из другого типа

3. Extract - создает тип, выбирая набор свойств из другого типа с union type (объединением стилей)

4. Exclude - создает тип, исключая набор свойств из другого типа с union type (объединением стилей)

5. NonNullable - создает тип, исключая набор свойств из другого типа null и undefined с union type (объединением стиля)

8. Readonly - создает тип, свойства которых нельзя изменить

9. Parameters - работает с функциями, он достает аргумент и добавляет в кортеж(tuple) похожий на массив, где хранят разные типы значений

10. ReturnType - достает возвращаемое значение.

11. Awaited - позволяет получить тип, который будет возвращен после ожидания(awaiting) promise.

</details>

<details>
<summary>Что такое type assertion</summary>
...
</details>

<details>
<summary>Зачем нужны condition and mapped types</summary>
...
</details>


<details>
<summary>В чем разница между enum и const enum?</summary>

...
</details>

<details>
<summary>Дополнительные архивные вопросы, которые будут добавлены в последующем</summary>

В чем отличие типов от интерфейса

- В интерфейсах наследование есть, а в типах нет
- В типах мы можем записать в одну строчку (пересечение типов), а интерфейс больше для объектов
- Если мы напишем два интерфейса с одинаковыми именами, то они объедяняться в то время как типы выдаст ошибку

---

Доп.вопрос - 

1. Будут ли какие-то отличия для типизации, если поля будут идти не в том порядке, вак у нас описано в типе? - Для ТС нет разницы
2. Для чего используется keyof и typeof -
keyof возвращает ключи нашаего типа
typeof показывает выражение, которое в скобках мы подставляем
3. Что такое дженерики - типизация входных параметров - обобщенный тип. У нас есть дженерик Т, и чтобы передать второй дженерик можно использовать K
4. Как мы можем в ТС сужить дженерик - extends 

---

что такое условные типы и перегрузка

перегрузка - одной функцией в TS можно сколько угодно задать типов и потом оно одному из них должно удовлетворять

перегрузка - когда под одним именем типа пишешь несколько сигнатур (типы входных параметров и возвращаемое значение и затем) последствие TS может подогнять любой из типов под код. Перегрузка должна называть как и наша функция

--- 

отличие extends от implements? - Extends - наследование, а Implements используется для реализации. То есть мы можем реализовать класс с помощью какого-то интерфейса

В интерфейсе мы можем задать только структуру, что хотим реализовать, а в классе пишем саму реализацию. У нас класс может только наследоваться один, а для интерфейсов у нас есть множественное наследование 

#5. Нужно описать общий тип valueOf (может быть и объектом и массивом), чтобы данные типы были верными

---

Доп.вопрос - что такое infer  

Оператор infer используется в контексте типовых параметров для "вывода" типа данных из другого типа. Это позволяет явно указывать тип данных, когда TypeScript не может самостоятельно его определить

---

Доп.вопрос - Какие утилитарные типы используется для функций? - Parameters, return type, awaited (условный промис)

---

Что такое extract (берет то, что соответствует условию) и exclude (берет не то, что соответствует условию). Похож на pick и omit, только здесь идет работа с ключами уже

---

Что такое record (для описания типов) - подходит для описания пар ключ значения. Первым передаем тип для ключ, а вторым для нашего значения
</details>
</details>

<details>
<summary>Задачи по TypeScript</summary>

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
</details>

<details>
<summary>✅ HTTP</summary>

<details>
<summary>Что такое HTTP? Как работает (этот протокол передачи) он?</summary>

HTTP (HyperText Transfer Protocol) - это протокол для передачи гипертекстовых документов по типу:
html. Создан он был для связи между веб-сервером и веб-браузером. <br/>

HTTP - это протокол без сохранения состояния, то есть сервер не сохраняет никаких данных (состояние между двумя парами "запрос-ответ", а также он следует классической: клиент-серверной модели. Это когда клиент (компьютер, телефон, ноутбук - удаленная система) отправляют запросы и получают ответ от сервера (поставщик услуг). Однако стоит упомянуть что между ними существует посредник, которого называют прокси (облегчает доступ, перехватывает запросы и возвращает его)

</details>

<details>
<summary>Расскажи про разные версии протокола? - HTTP3, HTTP2, HTTP1</summary>

</details>

<details>
<summary>Разница между http/https?</summary>

Https - это расширение протокола http для поддержки шифрования в целях повышениях безопасности. Он обеспечивает защиту от атак, основанных на прослушивание сетевого соединения.

Https использует SSL (Secure Sockets Layer) и TLS (Transport Layer Security) для шифрования соединения между клиентом и сервером. Оно позволяет безопасно обмениваться (конфиденциальными) данными с сервером.

Однако стоит упомянуть, что SSL и TLS - один и тот же сертификат, однако SSL более поздняя версия А вот TLS на сегодняшний момент поддерживаются всеми современными браузерами. Он защищает данные через интернет. Предотвращает взлом. Переписки

У http порт 80 и он не защищен, а у https по умолчанию используется 443 порт-тсп

</details>

<details>
<summary>Из чего состоит (структура) http-запроса?</summary>

Http-запрос делится на 2 составляющие основное и дополнительное. К основному относится:

- http-method: get (_получить данные_), post (_отправить данные_), put (_обновляет данные_), delete (_удалить их_) и т.д. Метод помогает определить какой тип операции хочет выполнить пользователь;
- Запрос содержит путь к ресурсу;
- В запросе указывается http-протокол;

<img src="./assets/http.png" alt="Здесь находится модуль http-запроса">

К дополнительному относится:

- Различные заголовки, которые отправляют доп.информацию на сервер
- В запросе может быть тело, которая содержит информацию. Например, если используется запрос: put (_предназначенные для обновления данных_), то в теле запроса могут быть указаны ключи и значение, которые должны быть обновлены

Еще стоит отметить, что http-request равен http-request

</details>

<details>
<summary>Какие методы может иметь HTTP-запрос?</summary>
Основных методов: 9, разделим на основные и дополнительные. К основным относятся:

- `GET` - запрос на получения данных. Данные метод только может получать данные
- `POST` - используется для отправки данных. Например: когда мы регистрируемся где-то, то отправляет запрос с post; когда создаем формочку отправляем запрос
- `PUT` - когда мы хотим обновить (изменить) текущий ресурс.
- `DELETE` - когда мы хотим удалить указанные данные.

К дополнительным относится:

- `HEAD` - запрашивает заголовки, похож на get с отличием то что сервер не посылает ничего в информациюонной части ответа. Он запрашивает только информацию заголовка о файле или ресурса
- `CONNECT` - устанавливает связь с ресурсом,организовывает своеобразный “туннель”. Клиент отправляет запрос прокси-сервер, который устанавливает зашифрованное соединение с сервером, устанавливая канал, по которому клиент и сервер могут безопасно обмениться сообщениями
- `TRACE` - позволяет следить за тем, что происходит с сообщением в промежуточных узлах. Он применяется для диагностики. Он позволяет видеть клиенту, что происходит в каждом звене цепочки между компьютером клиента и конечным получателем. Ответы сервера на метод TRACE не кэшируются.
- `PATCH` - используется для частичного изменения ресурса.
- `OPTIONS` - позволяет получить сведения о деталях соединения с ресурсом. Благодаря данному методу можно узнать какие другие методы допустимы при обращении к ресурсу (передается в ответе в хэдере Allow).

</details>

<details>
<summary>Разница между PUT- и POST-запросами?</summary>

1. Post необходим для отправки каких-то данных. Например сообщения. А put для изменения каких-то данных. То есть человек отправил какое-то сообщение через post. Увидел в нем ошибку, решил изменить букву через put, тот в свою очередь удаляет старую запись и добавляет новую при этом он будет доступен через тот же url.
2. Post в случае успеха возвращает 201 и location на новый ресурс, а put может вернуть 201 (если ресурс не найден) так и 204 (no content, если ресурс обновлялся). В любом случае успешно обновили сообщения
3. Метод PUT должен быть `идемпотентным`, то есть несколько одинаковых PUT на один endpoint не меняют состояния API. POST не обязан быть идемпотентным
4. Метод POST подразумевает, что Вы передаёте данные в теле запроса. Метод PUT подразумевает, что Вы передаёте всё, что нужно в URL. Тела запроса нет.

Дополнительная информация:

Если многократное повторение одних и тех же запросов возвращает одинаковые результаты, то метод считается **идемпотентным**. К нему также относятся следующие методы: `GET, HEAD, OPTIONS, PUT, TRACE`

</details>

<details>
<summary> Разница между GET- и POST-запросами?</summary>

1. `GET` в основном используется для получения информации, а `POST` для отправки данных
2. У `GET-запроса` нет тела (как правило, но в теории никто не запрещает отправить с телом).
3. `Get` - кешируется, а `Post` - нет

</details>

<details>
<summary>Можем ли мы закешировать POST? Что такое кешировать и перечислите кешируемые и не кишируемые методы
</summary>

Кешируемые ответы - это HTTP-ответы, которые могут быть закешированы, то есть сохранены для дальнейшего восстановления и использования позже, тем самым снижая число запросов к серверу.

Post можно закешировать, если указан признак "свежести" данных и установлен заголовок Content-Location (en-US). Заголовок Content-Location указывает альтернативное место для возвращаемых данных.

<img src="./assets/http-1.PNG" alt="content-location">

Стоит отметить, что FireFox не поддерживает это

К кешируемый методам относится: `GET/HEAD`; `POST/PATCH`, но признаком "свежести" данных и установлен заголовок Content-Location (en-US). К некишируемым относится: `PUT/DELETE`

</details>

<details>
<summary>Что такое HTTP cookie? Для чего они используются?</summary>

Куки – это небольшие строки данных, которые хранятся непосредственно в браузере. Когда сервер отправляет браузеру фрагмент каких-либо данных, то браузер может сохранить их у себя. Куки обычно устанавливаются веб-сервером с помощью set-cookie, а затем браузер будет добавлять с помощью заголовка cookie. Одно куки вмещает до 4kb данных, разрешается более 20 куки на сайт (зависит от браузера).

<img src="./assets/http-2.PNG" alt="Cookie"/>

Куки могут использовать для:

- управления сеансом - логины, корзины для вирт.покупок;
- монеторинга - отслеживания поведения пользователей;
- персонализация - пользовательские предпочтения.

Стоит отметить, что с каждым новым запросом к одному и тому же серверу, для них можно создать срок действия, после которого они будут перезапрошены или не будут отправляться, а также можно указать ограничение на путь или домен.

</details>

<details>
<summary>Что такое веб-хранилище (web storage)?</summary>

Инструмент для хранения данных в виде пары: ключ-значение в браузере. Существует два вида хранения информации: sessionStorage и localStorage. Основное отличие их:

- localStorage (локальное хранилище) - предназначена для хранения данных текущего пользователя не ограниченная кол-во времени
- sessionStorage (сессионное хранилище) - служит для хранения данных пока в браузере не закроем вкладку, а затем данные будут потеряны

Объекты хранилища localStorage и sessionStorage предоставляют одинаковые методы и свойства:

- setItem(key, value) – сохранить пару ключ/значение.
- getItem(key) – получить данные по ключу key.
- removeItem(key) – удалить данные с ключом key.
- clear() – удалить всё.
- key(index) – получить ключ на заданной позиции.
- length – количество элементов в хранилище.
</details>

<details>
<summary>Разница между cookie, sessionStorage и localStorage?</summary>

Local Storage (локальное хранилище)

- Хранит данные долго.
- Очищается только с помощью JavaScript или очистки кэша браузера.
- Хранит данные объёмом до 5 МБ, это самый большой объём из трёх вариантов хранилища.
- Не поддерживается старыми браузерами, например, IE 7 и ниже.
- Работает по правилу ограничения домена (same origin policy). То есть сохранённые данные доступны только для одного источника.

Session Storage (сессионное хранилище)

- Хранит данные, пока не закроется браузер, и затем данные становятся недоступными.
- Используется контекст браузера верхнего уровня, поэтому каждая вкладка браузера хранит уникальные данные.
- Объём данных больше чем в Cookie.
- Не поддерживается старыми браузерами, например, IE 7 и ниже.

Cookie

- Хранит данные, которые можно передавать на сервер через заголовки.
- Локальное и сессионное хранилище доступны только на клиентской стороне.
- Срок хранения устанавливается при создании cookie.
- Объём данных не превышает 4 Кбайт.
- Cookie могут быть защищёнными, в этом случае их содержимое нельзя получить на стороне клиента. Это важно для аутентификации при хранении пользовательских токенов

<img src = "./assets/http-3.PNG" alt="lS">

</details>

<details>
<summary>Что такое CORS? </summary>

Он дает доступ к выбранным ресурсам с сервера на источнике (домене), отличном от того, что сайт использует в данный момент.

На что ругается CORS? - Только на аякс запросы - джаваскриптовые запросы, а точнее XML-

</details>

<details>
<summary>Что такое WebSocket? В чем принцип его работы?</summary>

Вебсокет - это протокол для реал-тайм взаимодействия когда клиент и сервер (двухстороняя связь) за счет постоянного соединения непрерывно обменяются какими-то данным

<details>
<summary>Когда нужны вебсокеты</summary>

Например в чатах мы юзаем их, графики в которых необходимо быстро показывать измениния, биржи когда ценники всегда скачут

</details>

</details>

<details>
<summary>Разница между протоколами TCP и UDP?</summary>

Различая заключается в том, что у TCP мы получили целостный документ, но скорость передачи страдает, а UDP он уже быстрее получает данные

</details>
</details>