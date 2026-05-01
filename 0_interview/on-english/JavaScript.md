- [Список типов данных](https://it-incubator.io/prosobesim/react-frontend/roadmap?s=E72159);
- [Строгое и нестрогое сравнение](https://it-incubator.io/prosobesim/react-frontend/roadmap?s=E72159&skill=js-es5%2Fcommon%2Fdefault%2Fstrict-vs-none-strict-comparison)
- [Условные операторы](https://it-incubator.io/prosobesim/react-frontend/roadmap?s=E72159&skill=js-es5%2Fcommon%2Fdefault%2Fconditional-operators);
- [Метод Array.prototype.at() для доступа к элементам с конца](https://it-incubator.io/prosobesim/react-frontend/roadmap?s=E72159&skill=js-es6%2Fcommon%2Fdefault%2Farray-at-method);
- [Цикл for-in](https://it-incubator.io/prosobesim/react-frontend/roadmap?s=E72159&skill=js-es5%2Fobjects%2Fcommon%2Ffor-in-cycles);
- [Цикл for-of](https://it-incubator.io/prosobesim/react-frontend/roadmap?s=E72159&skill=js-es6%2Fcommon%2Fdefault%2Ffor-of-cycles);
- [Условие if](https://it-incubator.io/prosobesim/react-frontend/roadmap?s=E72159&skill=js-es5%2Fcommon%2Fdefault%2Fif-condition);
- [Конструкция switch](https://it-incubator.io/prosobesim/react-frontend/roadmap?s=E72159&skill=js-es5%2Fcommon%2Fdefault%2Fswitch-construction);
- [Циклы while и for](https://it-incubator.io/prosobesim/react-frontend/roadmap?;s=E72159&skill=js-es5%2Fcommon%2Fdefault%2Floops-while-for);
- [Логические операторы](https://it-incubator.io/prosobesim/react-frontend/roadmap?s=E72159&skill=js-es5%2Fcommon%2Fdefault%2Flogical-operators);

---

---

### Data-types (типы данных)

- 3. В чём разница между == и ===?
- 94. Какие данные в JS неизменяемые, какие изменяемые?



- 120. Почему [] == false в JavaScript? Как работает сравнение?
- 125. Почему typeof null возвращает "object"?

- 244. Что такое приведение типов (type coercion)?



<details>
<summary>Перечислите типы данных в JavaScript? </summary>

В JavaScript существует 8 типов данных, их можно разделить на примитивные и ссылочные. К примитивным относятся: `string; number; bigInt; boolean; symbol (unical id); null и undefined`. А к ссылочному относится `object (объекты)`.

Функции, массивы также относится к объекту из-за прототипа и прототипного наследования

Если говорить про объекты то они передаются по ссылке, а примитивы по значению

<details>
<summary>Доп.вопрос: В чем разница между null и undefined?</summary>

В том, что `Undefined` - это когда переменная объявлена, но мы ей не присвоено значение, а `null` - когда мы присвоили значение специально, и как бы говорим, что у нас есть переменная и она пустая.

Кстати при нестрогом сравнение undefined и null дает true, а при строгом false, а также при сравнение null == 0 дает false

</details>

<details>
<summary>Доп.вопрос: Как мы можем определить к какому типу данных относится та или иная переменная?</summary>

А определить тип данных можно с помощью typeOf.

Typeof возвращает следующие значения - "undefined", "boolean", "number", "string", "bigint", "symbol", "function", "object"

```js
console.log(typeof 0); // * number
console.log(typeof true); // * boolean
console.log(typeof "Javascript"); // * string
console.log(typeof undefined); // * undefined
console.log(typeof Math); // * object, так как встроенный глобальный объект
console.log(typeof Symbol("JS")); // * symbol
console.log(typeof null); // * object
console.log(typeof function () {}); // * function
console.log(typeof NaN); // * number
console.log(typeof typeof 100); // * string
```

</details>

<details>
<summary>Доп.вопрос: Перечислите все ложные (falsy) значение? </summary>

Falsy - это следующие значение: "", 0, null, undefined, NaN, false. А все остальное уже true

</details>

<details>
<summary>Доп.вопрос: Что такое NaN?</summary>

NaN (not-a-number) - не является числом. Мы получаем его когда выполняем математическую операцию неправильно. Например, если мы infinity разделим на infinity, то оно нам даст NaN. Для того, чтобы проверить, что число не является числом использует функцию isNaN().
А его особенностью можно выделить то, что она не равна ничему даже самому себе как в строгом, так и в нестрогом сравнении.

</details>
