// ? Метод find() массива используется для поиска первого элемента,
// ? который удовлетворяет заданному условию.
// * Синтаксис - arr.find(callback(element, index, array)), thisArg)

const numbers = [5, 12, 8, 130, 44];
numbers.find(num => num > 10);    // 12 (первый элемент > 10)

// ! =============================================================

const users = [
  {id: 1, name: 'Анна'},
  {id: 2, name: 'Иван'},
  {id: 3, name: 'Мария'}
];

users.find(user => user.id === 2);  // {id: 2, name: 'Иван'}

// ! =============================================================
// ? Метод findIndex() возвращает индекс первого элемента, удовлетворяющего условию.
// ? Синтаксис такой же

const arr1 = ["John", "Aristocrat", "Tommy", "Finn"];
const foundIndex = arr1.findIndex(el => el == "Aristocrat")              // 1 
console.log(foundIndex)

// ! =============================================================
function isWantedGuest(element, index, array) {
  const guestName = 'Лиза'
  return element === guestName
}

const partyGuests = [ 'Даня', 'Саша', 'Юля', 'Лиза', 'Егор']
const meetingGuests = [ 'Даня', 'Егор', 'Арсений' ]
  
console.log(partyGuests.findIndex(isWantedGuest))           // 3 (так как partyGuests[3] -> 'Лиза')
console.log(meetingGuests.findIndex(isWantedGuest))         // -1 (совпадений нет)
