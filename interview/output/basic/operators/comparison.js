console.log(2 == '2')                                    // * true
console.log(2 === '2')                                   // * false
console.log(undefined == null)                           // * true
console.log(undefined === null)                          // * false
console.log('0' == false)                                // * true
console.log('0' == 0)                                    // * true 
console.log(0 == 0)                                      // * true
console.log(null == 0)                                   // * false

console.log(false == '')                                 // * true
console.log(false == {})                                 // * false
console.log('' == 0)                                     // * true
console.log('' == {})                                    // * false
console.log(0 == {})                                     // * false                     

console.log(false == [])                                 // * true (Пустой массив преобразовывается в пустую строку. А та, в свою очередь - в false.)
console.log(0 == [])                                     // * true  
console.log(0 == [0])                                    // * true (преобразуется в строку)
console.log('' == [])                                    // * true

console.log(3 == new Number(3))                          // * true
console.log(3 == Number(3))                              // * true   
console.log(3 === new Number(3))                         // * false
console.log(3 === Number(3))                             // * true

console.log('true' == true)                             // * false (!true => false == true)
console.log(false == 'false')                           // * false  (!false => true === false)
console.log(null == '')                                 // * false  
console.log(!!"false" == !!"true")                      // * true
console.log([1] > null)                                 // * true
console.log(["x"] == "x")                               // * True
console.log([1,2,3] == [1,2,3])                         // * False
