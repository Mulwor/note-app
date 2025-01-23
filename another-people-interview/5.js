/**
 Реализуйте функцию deepEqual на JavaScript, которая принимает два параметра и проверяет, являются ли они "глубоко" равными.

 Входные параметры не могут быть объектами типа Set, Map и их Weak-версиями.

 Функция должна учитывать следующие правила:
 - Примитивные типы (числа, строки, булевы значения, null, undefined) сравниваются по значению.
 - Массивы считаются равными, если они имеют одинаковую длину и их элементы попарно равны (в том же порядке).
 - Объекты считаются равными, если они имеют одинаковый набор ключей и значения по этим ключам попарно равны.
 - Функция должна корректно обрабатывать рекурсивные структуры (объекты и массивы, которые содержат ссылки на самих себя).
 */

export const deepEqual = (val1, val2) => {};

export const recursive = (object, property) => {
  object[property] = object;
  return object;
};

export const testData = [
  { value1: 42, value2: 42, expected: true },
  { value1: 'hello', value2: 'hello', expected: true },
  { value1: true, value2: true, expected: true },
  { value1: null, value2: null, expected: true },
  { value1: undefined, value2: undefined, expected: true },
  { value1: null, value2: {}, expected: false },
  { value1: null, value2: undefined, expected: false },
  { value1: { a: 1, b: 2 }, value2: { a: 1, b: 2 }, expected: true },
  { value1: { a: 1, b: 2 }, value2: { b: 2, a: 1 }, expected: true },
  { value1: { a: 1, b: 2 }, value2: { a: 1, b: 3 }, expected: false },
  { value1: [1, 2, 3], value2: [1, 2, 3, 4], expected: false },
  { value1: [1, 2, [3, 4]], value2: [1, 2, [3, 4]], expected: true },
  {
    value1: {
      a: { b: { c: [{ d: 'e', f: [1, 2, '321', null], g: undefined }] } },
      h: [{ i: 'j', k: { l: 'm', n: [null, false, ''] } }],
      o: { p: 'q', r: [1, 2, [3, 4, [5, 6]]] },
      s: { t: [{ u: 'v', w: { x: 'y', z: [true, false, null] } }] }
    },
    value2: {
      a: { b: { c: [{ d: 'e', f: [1, 2, '321', null], g: undefined }] } },
      h: [{ i: 'j', k: { l: 'm', n: [null, false, ''] } }],
      o: { p: 'q', r: [1, 2, [3, 4, [5, 6]]] },
      s: { t: [{ u: 'v', w: { x: 'y', z: [true, false, null] } }] }
    },
    expected: true
  },
  {
    value1: recursive(
      {
        a: { b: { c: [{ d: 'e', f: [1, 2, '321', null], g: undefined }] } },
        h: [{ i: 'j', k: { l: 'm', n: [null, false, ''] } }],
        o: { p: 'q', r: [1, 2, [3, 4, [5, 6]]] },
        s: { t: [{ u: 'v', w: { x: 'y', z: [true, false, null] } }] }
      },
      'self'
    ),
    value2: recursive(
      {
        a: { b: { c: [{ d: 'e', f: [1, 2, '321', null], g: undefined }] } },
        h: [{ i: 'j', k: { l: 'm', n: [null, false, ''] } }],
        o: { p: 'q', r: [1, 2, [3, 4, [5, 6]]] },
        s: { t: [{ u: 'v', w: { x: 'y', z: [true, false, null] } }] }
      },
      'self'
    ),
    expected: true
  },
  {
    value1: recursive(
      {
        a: { b: { c: [{ d: 'e', f: [1, 2, '321', null], g: undefined }] } },
        h: [{ i: 'j', k: { l: 'm', n: [null, false, ''] } }],
        o: { p: 'q', r: [1, 2, [3, 4, [5, 6]]] }
      },
      'self'
    ),
    value2: recursive(
      {
        a: { b: { c: [{ d: 'e', f: [1, 2, '321', null], g: undefined }] } },
        h: [{ i: 'j', k: { l: 'm', n: [null, true, ''] } }],
        o: { p: 'q', r: [1, 2, [3, 4, [5, 6]]] }
      },
      'self'
    ),
    expected: false
  }
];


// ! ========================================================================================

// Написать функцию, которая принимает массив чисел и
// возвращает массив, содержащий только те числа, которые встречаются в исходном массиве только один раз.
// Например, для массива [1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 5, 6] результат должен быть [2, 4].

export const TEST_ARRAY = [1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 5, 6];

export const nonrep = (testArr) => {};

nonrep(TEST_ARRAY);


// ! ========================================================================================

/**
 * 1. Необходимо реализовать компонент счетчика. При единичном клике на кнопку add значение counter должно увеличиваться на единицу, при клике на кнопку sub - уменьшаться на единицу.
 * 2. При зажатии кнопок (когда жмем и не отпускаем), значение должно изменяться автоматически (1 раз в 1 секунду). После того, как кнопка отпущена, изменение значения останавливается.
 */

import React from 'react';

export const Test = ({}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20
      }}>
      <h1>Counter</h1>
      <h2>0</h2>
      <div style={{ display: 'flex', gap: 10 }}>
        <button>sub</button>
        <button>add</button>
      </div>
    </div>
  );
};


// ! ========================================================================================

// Необходимо объяснить что делает данная функция и сделать рефакторинг кода

export const attributesLookup = (matchingAttributes, filters) =>
  matchingAttributes.map((item) => {
    const resultChecked =
      filters?.reduce((acc, curr) => {
        if (curr.code === item.code) {
          acc = { ...item, value: curr.value };
        }
        return acc;
      }, {}) ?? {};

    if (Object.keys(resultChecked)?.length === 0) {
      return item;
    } else {
      return resultChecked;
    }
  });


// Новую функцию пишем ниже
export const attributesLookup_Refactor = (matchingAttributes, filters) => {};
