let valueForNever: never;
let strForNever: string = value;

let strForNever1: string = '123';
let valueForNever1: never = str;

enum valueForNever_02 {
  FIRST,
  SECOND
}

function fnForNever(value: valueForNever_02) {
  switch(value) {
    case valueForNever_02.FIRST: 
      return 1;
    case valueForNever_02.SECOND: 
      return 1;
    default:
      // (parameter) value: never
      return value
  }
}

fnForNever(valueForNever_02.FIRST)
fnForNever(valueForNever_02.SECOND)

// ? С помощью следующего примера - мы можем гарантировать, что каждый кейс
// ? мы обработали. Если кто-то из разработчиков добавит новое значение у нас 
// ? ТС все места где это значение необходимо поддержать таким образом подсве-
// ? тит и мы не обнаружим ошибку в продакшане

enum valueForNever_03 {
  FIRST,
  SECOND,
  THIRD
}

function fnForNever2(value: valueForNever_03) {
  switch(value) {
    case valueForNever_03.FIRST: 
      return 1;
    case valueForNever_03.SECOND: 
      return 1;
    default:
      // Type 'valueForNever_03.THIRD' is not assignable to type 'never'
      const exhaustiveCheck: never = value;
      return value
  }
}

fnForNever2(valueForNever_03.FIRST)
fnForNever2(valueForNever_03.SECOND)