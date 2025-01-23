// ! https://www.youtube.com/watch?v=GlQDFYg33Bw&feature=youtu.be

// ========= Задача 7 - написать class EventEmitter
class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(event, cb) {
    if (this.events[event]) {
      this.events[event].push(cb);
      return this;
    }

    this.events[event] = [cb];

    return { release: () => this.events[event].pop() };
  }

  emit(event, ...args) {
    this.events[event]?.forEach((cb) => cb(...args));
  }
}


// Задача 8 - Найти ошибки в коде
type SomeDTO = { id: number };

export default function App() {
  const [list, setList] = useState<SomeDTO[]>([{ id: 1 }, { id: 2 }]);

  const handleReverseClick = () => {
    setList((old) => old.reverse());
  };

  return (
    <div className="App">
      <h1>I have a bug, click on any item first and then reverse list</h1>
      <ul>
        {list.map((item) => {
          <Item key={index} item={item} />;
        })}
      </ul>

      <button onClick={handleReverseClick}>Click to reverse</button>
    </div>
  );
}


// ! =======================================================================================
// ! =======================================================================================
// ! =======================================================================================

// ========================================== Задача 1
// Нужно реализовать банкомат с функционалом пополнения и выдачи

class ATM {
  vault = {
    5000: 0,
    2000: 0,
    1000: 0,
    500: 0, 
    100: 0,
    50: 0
  }
  
  deposit(bills) {
    // реализуй метод
  }
  
  whithdrow(amount) {
    // реализуй метод
  }
  
  // возвращает массив купюр который доступен на прием/выдачу
  get accept() {
    // реализуй геттер
  }
  
  // возвращает сколько всего денег во внутреннем хранилище
  get total() {
    // реализуй геттер
  }
  
  // возвращает касету с деньгами в виде объекта при инкассации
  get collect() {
    // реализуй геттер
  }
}

const atm = new ATM();
atm.accept; // [ 50, 100, 500, 1000, 2000, 5000 ]
atm.whithdrow(3500); // Error: Не могу выдать нужную сумму, недостаточно средств
atm.deposit([]); // Error: Положите деньги в купюроприемник
atm.deposit([5000, 1000, 5000, 500, 100, 50, 50]); // Внесено 11700
atm.deposit([500, 10, 5]); // Внесено 500, Заберите нераспознанные купюры [10, 5]
atm.whithdrow(3500); // Error: Не могу выдать нужную сумму, недостаточно купюр
atm.whithdrow(2100); // [1000, 500, 500, 100]
atm.whithdrow(0); // Error: Укажите корректную сумму
atm.total; //10100
atm.collect; // { '50': 2, '100': 0, '500': 0, '1000': 0, '2000': 0, '5000': 2 }


// ! =======================================================================================
// ! =======================================================================================
// ! =======================================================================================


/** 
Написать таймер который увеличивается каждую секунду
При размонтировании должны отправляться метрики, с текущим значением currentDate

Начальный код:

    export const Counter = () => {
        const [currentDate, setCurrentDate] = useState(() => new Date().toISOString());

        return <h1>{currentDate}</h1>;
    };

*/

export const Counter = () => {
  const [currentDate, setCurrentDate] = useState(() => new Date().toISOString());
  const dateRef = useRef(currentDate);

  useEffect(() => {
    let interval = setInterval(() => {
      const curDate = new Date().toISOString();
      setCurrentDate(curDate);
      dateRef.current = curDate;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    return () => {
      logMetric(dateRef.current);
    };
  }, []);

  return <h1>{currentDate}</h1>;
};

// ! =======================================================================================
// ! =======================================================================================
// ! =======================================================================================


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
  // Answer
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