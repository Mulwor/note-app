// ? Сложение, что касает строки преобразует в строки значения
console.log(1 + '2')                            // * '12'
console.log(1 + '2' + 3)                        // * '123'
console.log('' + 1 + 0)                         // * '10'
console.log(1 + "" + 0)                         // * '10'
console.log(4 + 10 + 'px')                      // * '14px'
console.log('px' + 5 + 10)                      // * 'px510'
console.log("number" + 15 + 3)                  // * 'number153'
console.log(5 + 'px' + 5)                       // * '5px5'
console.log(null + 2)                           // * 2
console.log(undefined + 42)                     // * NaN
console.log(true + false)                       // * 0 + 1 = 1
console.log(+true)                              // * 1
console.log(!"John")                            // * false
console.log(1 + + 1)                            // * 2
console.log("foo" + + "bar")                    // * "FooNaN"
console.log([] + null + 1)                      // * null1 ([] - преобразуется в строку)
console.log(!+[])                               // * true
console.log([]+![])                             // * false
console.log(!+[]+[]+![])                        // * truefalse
console.log({} + [])                            // * [object Object]
console.log({}+[]+{}+[1])                       // * [object Object] [object Object]1
console.log(new Date(0) + 0)                    // * Thu Jan 01 1970 03:00:00 GMT+0300 (Москва, стандартное время)0


// ? Вычитание, умножения и деления
console.log('' - 1)                             // * -1 (0 - 1 => -1)
console.log('' - 1 + 0)                         // * -1 (0 - 1 + 0 => -1)
console.log('42' - 40)                          // * 2 (42 - 40)
console.log('42px' - 2)                         // * NaN 
console.log(new Date(0) - 0)                    // * 0
console.log('3' * '8')                          // * 24 (3 * 8 (преобразование в число))      
console.log(12 / 4)                             // * 3
console.log(12 / "6")                           // * 2
