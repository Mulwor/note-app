// ! 2678. Number of Senior Citizens

// ? You are given a 0-indexed array of strings details. Each element of details 
// ? provides information about a given passenger compressed into a string of 
// ? length 15. The system is such that:

// ? The first ten characters consist of the phone number of passengers.
// ? The next character denotes the gender of the person.
// ? The following two characters are used to indicate the age of the person.
// ? The last two characters determine the seat allotted to that person.
// ? Return the number of passengers who are strictly more than 60 years old.

// [
//    7868190130 - номер телефона
//    M - пол человека
//    75 - возраст человека
//    22 - место на борту
// ]


var countSeniors = function(details) {
  // O(1)
  let result = 0;

  // O(n)
  for (let i = 0; i < details.length; i++) {
    // O(1)
    if (details[i][11] + details[i][12] > 60) {
      result++
    }
  }

  return result
};


var countSeniors = function (details) {
  return details.filter((item) => {
    // Метод substring() возвращает подстроку строки между двумя индексами
    // [ 7868190130M(10) ===>  75 (11, 12) ===> 22(13 игнор) ]
    if (item.substring(11, 13) > 60) {
      return item;
    }
  }).length;
};