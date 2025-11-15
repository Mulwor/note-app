// Todo: Promise

// ! Promise - один из способов работы с ассинхронным кодом.
// ! Промис создается в виде специального объекта через new. Внутри него
// ! есть resolve (если удачно выполнилось) и reject (если неудачно выполниться).
// ! У промиса есть методы: then (успешно), catch (поймать ошибку), метод сработает в любом случае
// ! Cтоит отметить, что если добавить throw new Error(), то он сразу вернет ошибку, однако если до
// ! него были then с успешными то сначала они пройдут а затем вернет ошибку и дальше не пойдет


// Todo: №1
let firstExample = new Promise(function (resolve, reject) {
  setTimeout(() => resolve((a = 99), 300))
})
firstExample.then((value) => console.log(value)) 


// * Выполнится только первый, второй будет игнорироваться
let checkTwoResolve = new Promise(function (resolve) {
  resolve(1)
  setTimeout(() => resolve(2), 1000)
})
checkTwoResolve.then(console.log)

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms))
}
delay(1500).then(() => console.log("через 1,5 секунды"))

let firstExampleWithIncomingData = (number) = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(num * num), 2000)
})
firstExampleWithIncomingData(5).then((response) => console.log(response))
  



// Todo: №2
let firstExampleWithError = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("error in promise")), 1500)
})
firstExampleWithError.catch((error) => console.log(error))


let secondExampleWithError = new Promise(function (resolve, reject) {
  throw newError("Проверить что выведится")
})
secondExampleWithError.then((value) => console.log(value)) 



// Todo: №3
let thirdExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    true ? resolve("promise completed"): reject()
  }, 1000)
})
thirdExample.then((data) => console.log(data))
thirdExample.catch(() => console.log(error))
thirdExample.finally(() => console.log("Finally"))



// Todo: №4 => Пример с фетч, которы помогает осуществлять запросы к серверу, а также имеют упрощенный интерфейс и построен на промисах
function fourthExample() {
  return new Promise((resolve) => resolve("some date"))
}
fourthExample()
  .then((result) => `${result} and one`)
  .then((result) => `${result} and two`)
  .then((result) => new Error(`${result} has error`))
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => {})



// Todo: №5 
let fivethExample = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let isError = true
    (!isError) ? resolve([1, 2, 3, 4, 5]) : reject("error in promise")
  }, 3000)
})
setTimeout(() => console.log(d), 1000)


let fivethExample_2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let isError = false
    (!isError) ? resolve([1, 2, 3, 4, 5]) : reject("error in promise")
  }, 1000)
})
fivethExample_2.then((result) => console.log(result))



// Todo: №6 
let checkMethodAllAndRace = [
  new Promise((resolve) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2500)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(4), 3500)),
  new Promise((resolve) => setTimeout(() => resolve(5), 4000)),
]


// * Promise.all - дожидается окончания выполнения всех промисов 
// * и возвращает массив значение: [1, 2, 3, 4, 5]
Promise.all(checkMethodAllAndRace).then((res) => console.log(res)) 

// * Promise.race - дожидается выполнения первого промиса и возвращает результат.
// * Не важно успешный или отклоненный
Promise.race(checkMethodAllAndRace).then((res) => console.log(res))



// Todo: №7 (All, race)
let checkMethod = [
  new Promise((resolve) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2500)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(4), 3500)),
  new Promise((resolve) => setTimeout(() => resolve(5), 4000)),
]


// * Promise.all - дожидается окончания выполнения всех промисов 
// * и возвращает массив значение: [1, 2, 3, 4, 5]
Promise.all(checkMethodAllAndRace).then((res) => console.log(res)) 

// * Promise.race - дожидается выполнения первого промиса и возвращает результат.
// * Не важно успешный или отклоненный
Promise.race(checkMethodAllAndRace).then((res) => console.log(res))


let checkMethod2 = [
  new Promise((resolve, reject) => reject('Error')),
  new Promise((resolve) => setTimeout(() => resolve(2), 2500)),
]
Promise.all(checkMethod2).then((res) => console.log(res)) 
Promise.race(checkMethod2).then((res) => console.log(res))


// Todo: №8 (allSettled any)

let checkMethod3 = [
  new Promise((resolve, reject) => reject('Error')),
  new Promise((resolve) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2500)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(4), 3500)),
  new Promise((resolve) => setTimeout(() => resolve(5), 4000)),
]
Promise.any(checkMethod3).then((response) => console.log(response))
Promise.allSettled(checkMethod3).then((response) => console.log(response))

// ToDo №1
console.log(1)
setTimeout(() => console.log(2))
Promise.resolve().then(() => console.log(3))
Promise.resolve().then(() => setTimeout(() => console.log(4)))
Promise.resolve().then(() => console.log(5))
setTimeout(() => console.log(6))
console.log(7)
// * [1, 7, 3, 5, 2, 6, 4]



// ToDo №2
(function () {
  console.log("this is the start")
  setTimeout(function cb() {
    console.log("this is a msg from call back")
  })
  console.log("this is just a message")
  setTimeout(function cb1() {
    console.log("this is a msg from call back1")
  }, 0)
  console.log("this is the end")
})()



// ToDo №2
console.log(1)
setTimeout(() => console.log(2))
Promise.reject(3).catch(console.log)
// * Функция, переданная в конструкцию new Promise, называется исполнитель (executor). Когда Promise создаётся, она запускается автоматически.
new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4))
Promise.resolve(5).then(console.log)
console.log(6)
setTimeout(() => console.log(7), 0)
// * [1, 6, 3, 5, 2, 4, 7]
 


// ToDo №3 (Приоритетность в секундах у сеттаймаута)
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay)
  })
setTimeout(() => console.log("in setTimeout1"), 1000)
myPromise(1000).then((res) => console.log("in Promise 1"))

setTimeout(() => console.log("in setTimeout2"), 100)
myPromise(2000).then((res) => console.log("in Promise 2"))

setTimeout(() => console.log("in setTimeout3"), 2000)
myPromise(1000).then((res) => console.log("in Promise 3"))

setTimeout(() => console.log("in setTimeout4"), 1000)
myPromise(5000).then((res) => console.log("in Promise "))
// * [in setTimeout2, in Promise 1, in Promise 3, in setTimeout1, in setTimeout4, in Promise 2, in setTimeout3, in Promise"]


// Check
console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve(console.log(5)).then(() => console.log(6));
setTimeout(() => console.log(7));
console.log(8);
