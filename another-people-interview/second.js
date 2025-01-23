// ! https://www.youtube.com/watch?v=GlQDFYg33Bw&feature=youtu.be


// ========= Задача 1 - функция для удаления дубликатов
const arr = [1, 1, 2, 3, 4, 4, 5, 5];

const removeDuplicates = (arr) => {
  const mapa = {};

  return arr.reduce((acc, cur) => {
    if (!mapa[cur]) {
      mapa[cur] = true;
      acc.push(cur);
    }

    return acc;
  }, []);
};



// ========= Задача 2 - функция переворота слов в строке
const str = "Welcome to this JavaScript Guide!"; // => "emocleW ot siht ...."

const reverseWords = (str) => {
  const words = str.split(" ");

  return words
    .reduce((acc, cur) => {
      const reversed = cur.split("").reverse().join("");
      acc.push(reversed);

      return acc;
    }, [])
    .join(" ");
};

console.log(reverseWords(str));



// ========= Задача 3 - порядок вывода
const promise = new Promise((resolve) => {
  console.log(1);

  setTimeout(() => {
    console.log("timerStart");

    resolve("success");

    console.log("timerEnd");
  });

  console.log(2);
});

promise.then((res) => console.log(res));

console.log(4);



// ========= Задача 4 - функция мемоизации
const count = (a, b) => {
  return a + b;
};

const memo = (fn) => {
  const cache = new Map();

  return (...args) => {
    const strArgs = JSON.stringify(args);

    if (cache.has(strArgs)) {
      console.log("c4che");
      return cache.get(strArgs);
    }

    const res = fn(...args);
    cache.set(strArgs, res);
    return res;
  };
};



// ========= Задача 5 - написать функцию pipe
const pipe = (functions) => (input) => functions.reduce((chain, func) => func(chain), input);

const times = (y) => (x) => x * y;
const calculationOne = pipe([times(2), times(3)]);

console.log(calculationOne(2)); // 12



// ========= Задача 6 - написать полифилл Promise.race
const promiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((pr) => {
      pr.then((res) => {
        resolve(res);
      }).catch(reject);
    });
  });
};



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



// Задача 9 - написать аналог Pick в Typescript
type MyPick<T, Keys extends keyof T> = { [k in Keys]: T[k] };