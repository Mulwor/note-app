<h2 align="center">Задачи по react</h2>
<h3 align="center">Базовые задачи на вывод в консоль</h3>

✅ Что выведет в console и почему

```js
export function App() {
  console.log("App")

  useEffect(() => console.log('useEffect'), [])
  useLayoutEffect(() => console.log("useLayoutEffect"), [])

  return <div>What is answer?</div>
}
```

Ответ: App => useLayoutEffect => useEffect

Пояснения: сначала выполняется тело компонента (App), затем useLayoutEffect (он синхронный и выполняет до отрисовки браузером), и только потом useEffect (он асинхронно и после отрисовки вызывается).

---

✅ Что выведет в console и почему

```js
export function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  console.log("Render")

  useEffect(() => {
    console.log('useEffect')
    
    return () => {
      console.log("Unmount")
    }
  }, [show, count])

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <button onClick={() => setShow(s => !s)}>Show: {show.toString()}</button>
    </div>
  );
}
```

Ответ: 
- При первом рендере вызывается: `Render и useEffect`.
- При изменении show/count: у нас в начале вызывается `Render`, затем происходит очистка (нужен для ): `Unmount`, потом новый `useEffect`.
- При размонтировании компонента: `Unmount` например когда мы переходим на другую страницу в браузере

---

✅ Какие будут логи, при монтировании и после клика на кнопку

```js
import { useEffect, useLayoutEffect, useState } from "react";

export function Logs1() {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log(state, "effect");

    return () => {
      console.log(state, "effect cleanup");
    };
  }, [state]);

  useLayoutEffect(() => {
    console.log(state, "layout effect");

    return () => {
      console.log(state, "layout cleanup");
    };
  }, [state]);

  return (
    <div>
      <button onClick={() => setState((prev) => prev + 1)}>click</button>
    </div>
  );
}
```

Ответ: layout effect => effect => layout cleanup => effect cleanup
- При первом загрузки компонент будет `0 layout effect => 0 effect`
- Когда мы меняем state по нажатию на кнопку производит в начале очистка у `0 layout cleanup, затем добавляется 1 layout effect`, а затем выполняет `0 effect cleanup, 1 effect`. Это происходит потому useLayoutEffect у нас синхронный, и он срабатывает до отрисовки браузера в то время useEffect асинхронный и срабатывает уже после отрисовки браузера

--- 

✅ Какой будет порядок вызова и почему

```js
import * as React from "react";
import { useState, useEffect } from "react";

export default function App() {
  console.log(1);

  useEffect(() => {
    console.log(2);
  }, []);

  return <Child />;
}

function Child() {
  console.log(3);

  useEffect(() => {
    console.log(4);
  }, []);

  return "Logs3";
}
```

Ответ: в начале выполняется все синхронные операции - это 1 и 3, затем уже ассинхронные операции 4 и 2 так как реакт под капотом идет от дочерних компонентов к родительским, по этому и порядок 1342

---

✅ Какой будет порядок вызова и почему

```js
import * as React from "react";
import { useState, useEffect } from "react";

export function Logs3() {
  const [count, setCount] = useState(1);

  console.log(1);

  useEffect(() => {
    console.log(2);

    return () => {
      console.log(3);
    };
  }, [count]);

  useEffect(() => {
    console.log(4);
    setCount((count) => count + 1);
  }, []);

  return <Child count={count} />;
}

function Child({ count }) {
  useEffect(() => {
    console.log(5);

    return () => {
      console.log(6);
    };
  }, [count]);

  return "Logs3";
}
```

Ответ: 15246352

---

<h3 align="center">Практические задачи</h3> 

1\. Необходимо написать todo-лист на react, со следующим функционалом: 
- Изменение статуса completed/uncompleted, в случае, если completed, то элемент перечеркнут
- список items
- input с возможностью добавление нового item 

```js
import { useState, useEffect } from "react";

export const TodoList = () => {
  return <div></div>;
};

export default TodoList;
```

2\. Необходимо написать таймер, который запускается/останавливает при клике на кнопку, если таймер запущен,то каждую секунду он увеличивается на 1 

```js
import { useState, useEffect } from "react";

export const Counter = () => {
  return (
    <div>
      <div>count: 0</div>
      <button>Toggle timer</button>
    </div>
  );
};

export default Counter;
```

3\. Необходимо ответить на следующие вопросы:
- что произойдет при клике на Click to reverse;
- что произойдет при клике на Count + 1;
- проанализировать и найти ошибки в коде;

```js
import { useState } from "react";

let count = 1;

export default function App() {
  const [list, setList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

  const handleReverseClick = () => {
    setList((old) => old.reverse());
  };

  const handleAdd = () => {
    count += 1;
  };

  return (
    <div className="App">
      <h1>I have a bug, click reverse list</h1>
      <h2>Count: {count}</h2>
      <ul>
        {list.map((item, index) => {
          return <Item item={item} />;
        })}
      </ul>
      <button onClick={handleReverseClick}>Click to reverse</button>
      <button onClick={handleAdd}>Count+1</button>
    </div>
  );
}

const Item = ({ item }) => {
  return <li>{item.id}</li>;
};
```

4\. Вывести значения полей в консоль, при клиике на форму, учитывая что первый input controlled, а второй input uncontrolled.

```js
export default function App() {
  const onClickForm = () => {
    console.log("controlled: " /* вставить value1 */);
    console.log("uncontrolled: " /* вставить value2 */);
  };

  return (
    <form onClick={onClickForm}>
      <input placeholder="controlled" />
      <input placeholder="uncontrolled" />

      <button>Отправить заявку на кредит</button>
    </form>
  );
}
```

5\. Необходимо отрефакторить код

```js
import React, { useState } from "react";

const fetchNumber = () => Promise.resolve(Math.random()); // имитация бэкенд запроса

const heavyFunc = () => {
  // имитация тяжелой функции
  return Math.random();
};

const App = () => {
  const [number, setNumber] = useState();
  const [scroll, setScroll] = useState();

  const [data, setData] = useState(heavyFunc());

  React.useEffect(async () => {
    setNumber(await fetchNumber());

    window.addEventListener("scroll", () => setScroll(window.scrollY));

    return () => {
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
    };
  }, []);

  return (
    <div>
      <div>{number}</div>
      <div>{scroll}</div>

      {[1, 2, 3, 4].map((el) => (
        <div>{el}</div>
      ))}
    </div>
  );
};

export default App;
```

6\. Чему будет равен count после 1 клика и выведется ли в консоль Count-render после клика / если да, то как этого избежать

```js
import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>App1</h1>
      <div>{count}</div>
      <button onClick={onClick}>increment</button>

      <Count onClick={onClick} />
    </div>
  );
};

export const Count = () => {
  console.log("Count-render");

  return <div>Count component</div>;
};
```

7\. Необходимо реализовать хук useFetch для запроса на сервер, а также предусмотреть обработку ошибок и загрузку

```js
import { useState, useEffect } from "react";

function useFetch(url) {}

function Component({ url }) {
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Имя: {data?.name}</div>;
}
```

8\. Нужно найти, объяснить и исправить как можно больше проблем в реализации имитация запроса к серверу. просто получаем число асинхронно

```js
const fetchRandomNumber = () => Promise.resolve(Math.random());

export const NumberAndScroll = () => {
  const [number, setNumber] = useState();
  const [scroll, setScroll] = useState();

  useEffect(async () => {
    setNumber(await fetchRandomNumber());

    window.addEventListener("scroll", () => setScroll(window.scrollY));

    return () =>
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
  });

  return (
    <div>
      <div> Number: {number} </div>
      <div> Scroll: {scroll} </div>
    </div>
  );
};
```

9\. Написать таймер который увеличивается каждую секунду При размонтировании должны отправляться метрики, с текущим значением currentDate. Начальный код:

```js
export const Counter = () => {
  const [currentDate, setCurrentDate] = useState(() => new Date().toISOString());

  return <h1>{currentDate}</h1>;
};
```

<details>
<summary>Ответ</summary>

```js
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
```
</details>

10\. Необходимо реализовать компонент счетчика. При единичном клике на кнопку add значение counter должно увеличиваться  на единицу, при клике на кнопку sub - уменьшаться на единицу. При зажатии кнопок (когда жмем и не отпускаем), значение должно изменяться автоматически (1 раз в 1 секунду). После того, как кнопка отпущена, изменение значения останавливается.

```js
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
```