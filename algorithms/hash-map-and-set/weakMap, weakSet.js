// ! weakMap и weakSet - должны быть объектами в отличии от классических map/set у которого
// ! может выступать в качестве примитива

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok");                // ! Work
weakMap.set("test", "Whoops");         // ! Don't work

// ! Второе отличие он не поддерживает перебор - keys, values, entries. Так что нет способа взять 
// ! ключи от туда

// ! У weakMap есть только 4 метода
// * weakMap.get(key)
// * weakMap.set(key, value)
// * weakMap.delete(key)
// * weakMap.has(key)
// ! Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.