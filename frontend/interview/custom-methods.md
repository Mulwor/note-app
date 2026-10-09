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

<details>
<summary>Метод: Find</summary>

Метод find() возвращает значение первого найденного в массиве элемента, которое 
удовлетворяет условию переданному в callback функции. В противном случае
возвращается undefined.

```js
Array.prototype.myFind = function(callback) {
  for (let i = 0; i < this.length; i++) {
    // Делаем проверку существует ли элементы по индексу
    if (i in this) {      
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
  }
  
  return undefined;
};
```
</details>

<details>
<summary>Метод every</summary>

```js
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const conditional = callback(this[i], i, this)

    if (!conditional) {
      return false
    }
  }

  return true;
}

const numbers = [2, 4, 6, 8, 10];
const result_01 = numbers.myEvery(num => num % 2 === 0);
const result_02 = numbers.myEvery(num => num > 3);
console.log(`Результат 1_`, result_01, `Результат 2_`, result_02)  
```
</details>

<h3 align='center'>Создание промисов</h3>

<details>
<summary>promiseAll</summary>

Необходимо написать метод Promise.all, который встроен в js-коде и работает по умолчанию на нативном js

```js
function myPromiseAll(promises) {
  const results = [];
  // Состояние для отслеживание кол-в завершенных промисов,
  // чтобы потом сравнить с приходящими промисами
  let counter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = value;
          counter++;

          if (counter === promises.length) resolve(results)
        })
        .catch(reject)
    })
  })
}

const promise_01 = new Promise((resolve, reject) => setTimeout(() => resolve('One'), 0));
const promise_02 = new Promise((resolve, reject) => setTimeout(() => resolve('Two'), 1000));
const promise_03 = new Promise((resolve, reject) => setTimeout(() => resolve('Three'), 2000));

myPromiseAll([promise_01, promise_02, promise_03])
  .then((values) => console.log('Results:', values))      // [One, Two, Three]
  .catch((error) => console.log(error))
```
</details>

<details>
<summary>promiseAllSettled</summary>

```js
function myPromiseAllSettled(promises) {
  const results = [];
  let counter = 0;

  return new Promise((resolve) => {
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = { status: 'fulfilled', value }
        })
        .catch((reason) => {
          results[index] = { status: 'rejected', reason }
        })
        .finally(() => {
          counter++;
          if (counter === promises.length) resolve(results);
        })
    })
  })
}

const p1 = new Promise((resolve, reject) => setTimeout(() => resolve('One'), 0));
const p2 = new Promise((resolve, reject) => setTimeout(() => resolve('Two'), 1000));
const p3 = new Promise((resolve, reject) => setTimeout(() => reject('Delayed'), 2000));

myPromiseAllSettled([p1, p2, p3])
  .then(console.log);
```
</details>

<details>
<summary>Метод: PromiseRace</summary>

```js
function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(reject); 
    });
  });
}

const fastResolve = new Promise(r => setTimeout(() => r('Fast'), 100));
const slowResolve = new Promise(r => setTimeout(() => r('Slow'), 1000));

myPromiseRace([fastResolve, slowResolve])
  .then(console.log) // "Fast" (через 100ms)
  .catch(console.error);
```
</details>

<details>
<summary>Метод PromiseAny</summary>

```js
function myPromiseAny(promises) {
  const errors = [];
  let counter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then(resolve)
        .catch((reason) => {
          errors[index] = reason;
          counter++;
          
          if (counter === promises.length) reject(new AggregateError(errors, 'All promises were rejected'));
        });
    });
  });
}

// Тесты
const p1 = Promise.reject('Error 1');
const p2 = Promise.reject('Error 2');

myPromiseAny([p1, p2])
  .then(console.log)
  .catch(e => {
    console.log('Caught AggregateError:', e.name); // "AggregateError"
    console.log('Errors:', e.errors); // ["Error 1", "Error 2"]
  });
```
</details>