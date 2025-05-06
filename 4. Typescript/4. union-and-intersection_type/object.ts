type MainInfo = { 
  firstName: string;
  lastName: string;
}

type AdditionalInfo = {
  age: number;
}

// ! Пример с Union
type FullInfoUnion = AdditionalInfo | MainInfo;

const info0: FullInfoUnion = {
  firstName: '123',
  lastName: '123',
  age: 123
}

const info1: FullInfoUnion = {
  firstName: '123',
  lastName: '123'
}

const info2: FullInfoUnion = {
  age: 123
}

// ! Пример с Intersection
type FullInfoIntersection = AdditionalInfo & MainInfo;

const info3: FullInfoIntersection = {
  firstName: '123',
  lastName: '123',
  age: 123
}

const info4: FullInfoIntersection = {
  firstName: '123',
  lastName: '123'
}

const info5: FullInfoIntersection = {
  age: 123
}