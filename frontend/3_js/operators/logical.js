// ? Или (||) - возвращает первое истинное (truthy) найденное значение. Если они обы ложны, 
// ? то возвращает последнее
console.log(0 || 1)                                     // * 1
console.log(true || false)                              // * true
console.log(0 || 1 || 2 || 3)                           // * 1 
console.log('str' || 1 || null)                         // * 'str'
console.log(null || undefined)                          // * undefined
console.log(0 || '' || null)                            // * null

// ? И (&&) - возвращает первое ложное значение (falsy)
console.log(1 && 3)                                     // * 3
console.log(0 && 1)                                     // * 0
console.log(true && false)                              // * false
console.log(0 && 1 && 2 & 3)                            // * 0 
console.log('str' && 1 && null)                         // * null
console.log(null && undefined)                          // * null
console.log(0 && '' && null)                            // * 0

console.log(1 || 2 && 3)                                // * 1 (1 || 3) = 1
console.log(0 || 2 && 3)                                // * 3
console.log(0 || 1 || 2 && 3 && null)                   // * 1
console.log(1 && 2 || 0)                                // * 2
console.log(1 && false || 0)                            // * 0 (false || 0 => 0) (1 && 0) 
console.log(1 && false || 1)                            // * 1 