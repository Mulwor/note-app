<h3 align='center'>Создание кастомных методов</h3>

#### Методы массив

<details>
<summary>map</summary>

```js
Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]))
  }

  return result;
}

const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.myMap(x => x + 2);
console.log(mappedArr)
```
</details>

<details>
<summary>reduce</summary>

```js
const items = [1, 2, 3, 4, 5]

Array.prototype.myReduce = function(callback, initialValue) {
  // 1. Проходимо по массиву и на каждой иттерации должны обновлять наш аккум
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    // Складываем результат вызова нашей коллбек функции
    // принимает в себя аккумулятор
    // элемент массив
    // сам индекс
    // массив на котором была вызвана это функция
    accumulator = callback(accumulator, this[i], i, this)
  }

  return accumulator
}
const result = items.myReduce((acc, curr, i, array) => {
  return acc = acc + curr
}, 0);
console.log(result)
```
</details>

<details>
<summary>filter </summary>

```js
Array.prototype.myFilter = function (callback) {
  let result = []

  for (let i = 0; i < this.length; i++) {
    // Проверяем, возвращает ли callback true для текущего элемента
    if (callback(this[i], i, this)) {
      result.push(this[i])
    }
    result.push(newItems)
  }

  return result;
}

const items = [2, 4, 6, 8, 10, 11]
const result = items.myFilter((value) => value > 10 );
console.log(result)
```
</details>

<details>
<summary>some</summary>

Нужно написать полифилл для Array.prototype.some

Параметры
1. callback - функция проверки каждого элемента, принимает 3 аргумента:
- element - текущий обрабатываемый элемент массива
- index (необязательный) - индекс текущего обрабатываемого элемента массива
- array (необязательный) - массив, по которому осуществляется проход

2. thisArg (необязательный) - значение, используемое в качестве this при выполнении функции callback.

Возвращаемое значение
true, если функция проверки возвращает truthy значение хотя бы одного элемента массива иначе false

```js
Array.prototype.some = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    // this[i] - это 1 2 3 'hello',
    // i - это индекс 0 1 2 3
    // this - 4 раза создастся массив
    const result = callback(this[i], i, this)

    if (result) return true
  }

  return false
}

console.log([1, 2, 3, 'hello'].some(arg => typeof arg === 'string')) // true
```
</details>