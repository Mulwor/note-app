// Исходный тип
type TObject = {
  id: string,
  name: string,
  value: string
}

// 1. Опишите тип который должен являться объектом и включать в себя id, 
// name из исходного типа

type TObj1 = Pick<TObject, "id" | "name">;

// 2. Опишите тип который должен являться объектом включающим в себя все 
// свойства исходного объекта, но при этом каждое свойство должен быть 
// опциональным

type TObj2 = Partial<TObject>

// 3. Опишите тип на основе предыдущего так, чтобы все свойства стали
// обязательными

type TObj3 = Required<TObject>

// 4. Опишите тип который должен валидировать строку в указанном формате 
// "name:object|value"
type value = string;
type TStringLiteral = `name:${any}|${value}`;

// 5. Опишите тип исключающий 'c' этого type TUnion = 'a' | 'b' | 'c'
type TUnion = 'a' | 'b' | 'c'
type TUnion1 = Exclude<TUnion, 'c'>

// 6. Опишите тип извлекающий значение промиса type TPromise = Promise<TObject>
type TPromise = Promise<TObject>
type TPromiseValue = Awaited<TPromise>