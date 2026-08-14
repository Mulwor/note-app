// Ассоциативный массив - это объект, абстрактный тип данных, который позволяет хранить
// пары вида (ключ и значения), поддерживающий операции добавления пары, а также поиска 
// и удаления пары по ключу:  Insert (ключ, значение) => Find (ключ) => Remove (ключ)


// Можно записать двумя способами
let userOne = {
    name: "Alik",                       // "name": "Alik"
    age: 25,                            // "age": 25
    address: {                          // "address": {
        city: {                         //  "city": {
            title: "StatAmerica"        //    "title": "StatAmerica"
        }                               //   }
    }                                   // }
}
console.log(userOne.address)                         // {title: "StatAmerica"}
console.log(userOne.address.city.title)              // "StatAmerica"
console.log(userOne["address"]["city"]["title"])     // "StatAmerica"



let usersObj = {
    '0': "Alexey",
    "1": "Natasha",
    "2" : "ValeraЭ",
    "3" : "Katya"
}
usersObj[0]          //"Alexey"


let userFour = {
    '0': "Nadya",
    "1": "Natasha",
    "2" : "ValeraЭ",
    "3" : "Katya"
}
Object.keys(userFour)       // ["0", "1", "2", "3"]
Object.values(userFour)     // ["Nadya", "Natasha", "Valera", "Katya"]

