### Задача

Есть заранее описанный объект бесконечной вложенности. Конечные свойства всегда `string`. Нужно написать тип, который будет давать значения-пути для ключа конечного свойства типа `string`.

 ```json
{
    "greeting": {
        "hello": "Hello",
            "goodbye": "Goodbye"
    },
    "user": {
        "profile": "Profile",
            "settings": "Settings"
    }
}
```

  ---
 <!--  ------------------------------------------------------------------------------------------------------------------------------------------------------- -->

### Задача

Реализовать ResolvableKeysOf

```ts
class Test {
   public a = 1;
   public b = 2;
   public c = Promise.resolve(3);
   public d = () => 5;
   public e = () => Promise.resolve(6);


   public x = 'not';
   public y = Promise.resolve(null);
   public z = () => true;
}


type NumberKeys = ResolvableKeysOf<Test, number>; // "a" | "b" | "c" | "d" | "e"
type StringKeys = ResolvableKeysOf<Test, string>; // "x"
type NullKeys = ResolvableKeysOf<Test, null>; // "y"
type BooleanKeys = ResolvableKeysOf<Test, boolean>; // "z"
type StringOrNullKeys = ResolvableKeysOf<Test, string | null>; // "x" | "y"
```

  ---
 <!--  ------------------------------------------------------------------------------------------------------------------------------------------------------- -->


### Задача

Типизировать функцию

```ts
const someObject = { a: 1, b: 2, c: 3, d: 4, }
const someObject2 = { m: 1, b: 2, c: 3, d: 4, }

const getProperty = (obj, key) => {
    return obj[key];
}

getProperty(someObject, 'a') // OK
getProperty(someObject, 'm') // ERROR
getProperty(someObject2, 'm') // OK
```
=