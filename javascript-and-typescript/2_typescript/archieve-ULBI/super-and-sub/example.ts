type SuperType = {
  name: string;
}

type SubType = {
  name: string;
  age: number;
}

const subType: SubType = { name: "Oleg", age: 25 }
const superType: SuperType = subType

const superType2: SuperType = { name: "Oleg" }
const subType2: SubType = superType2

// ================================================

let valueUnknownWithSuperType: unknown;
valueUnknownWithSuperType = 42;
valueUnknownWithSuperType = 'hello'
valueUnknownWithSuperType = true;
valueUnknownWithSuperType = { name: "Oleg" }

let valueUnknownWithSubType: unknown;
let str: string = valueUnknownWithSubType;