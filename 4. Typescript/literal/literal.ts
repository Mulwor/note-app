type Color = 'red' | 'green' | 'blue';
type Size = 4 | 8 | 16;

const colorForLiteral_01: Color = 'green';
const colorForLiteral_02: Color = 'orange';

const values = {
  color: 'green'
}

// Но если мы хотим такое же поведение то необходимо после 
// объекта добавлять as const
// const values = {
//   color: 'green';
// } as const
// Если нам нужно объявить его в самом типе или интерфейсе,
// то мы можем использовать readonly
// interface User {
//   readonly id: string;
// }

values.color = 'afd'

function paint(color: Color) {}

paint(values.color);

// Шаблонные литералы
type EventName = 'click' | 'change';
type EventHandler = `on${EventName}`;