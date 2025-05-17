// ? Неявное преобразование типов
console.log("5" + 2);                               // * "52"
console.log(5 + "2");                               // * "52"
console.log("10" - 2);                              // * 8
console.log(6 - "1");                               // * 5                          
console.log("6" * 3);                               // * 18
console.log("8" / 2);                               // * 4
console.log(5 == "5");                              // * true (строка преобразуется в число)
console.log(true == 1);                             // * true (булевое значение преобразуется в число)
console.log(false == 0);                            // * true
console.log(!!"Hello");                             // * true (непустая строка — это true)
console.log(!!0);                                   // * false (0 — это false)
console.log(!![]);                                  // * true (пустой массив считается true)
console.log(!!null);                                // * false (null — это false)
console.log("5" > 2);                               // * true (строка преобразуется в число)
console.log(null < 1);                              // * true (null преобразуется в 0)
console.log("10" < "2");                            // * false (сравнение строк по Unicode)
console.log(null + 1);                              // * 1 (null преобразуется в 0)
console.log(undefined + 1);                         // * NaN (undefined не преобразуется в число)


// ? Явное преобразование типов
console.log(Boolean(''))                            // * false
console.log(Boolean('Hello'))                       // * true
console.log(Boolean(' '))                           // * true
console.log(Boolean('0'))                           // * true
console.log(Boolean(0))                             // * false
console.log(Boolean(1))                             // * true
console.log(Boolean(null))                          // * false
console.log(Boolean(undefined))                     // * false
console.log(Boolean(false))                         // * false
console.log(Boolean([]))                            // * true
console.log(Boolean({}))                            // * true
console.log(Boolean(Symbol()))                      // * true
console.log(Boolean(function(){}))                  // * true

console.log(Number(" 123 "))                        // * 123
console.log(Number("123z"))                         // * NaN
console.log(Number(true))                           // * 1
console.log(Number(false))                          // * 0
console.log(Number("\n"))                           // * 0

console.log(String(123))                            // * '123'
console.log(String(-12.3))                          // * '-12.3'
console.log(String(null))                           // * 'null'
console.log(String(undefined))                      // * 'undefined'