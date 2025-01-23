//================ что будет в консоли?
const a = { a: "a" };
const b = { b: "b" };
const c = {};

c[a] = a;
c[b] = b;

console.log(c[a].a, c[b].b); // undefined, b




//================ что будет в консоли?
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve(console.log(5)).then(() => console.log(6));

setTimeout(() => console.log(7));

console.log(8);

// 1 5 8 3 6 2 7 4




//================ Написать и типизировать sleep функцию
function sleep<T extends number>(ms: T): Promise<T> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(ms);
    }, ms)
  );
}




//================ Написать полифил Promise.all
const promiseAll = (proms: Promise<unknown>[]) => {
  const result = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    proms.forEach((pr, idx) => {
      pr.then((res) => {
        result[idx] = res;
        count += 1;
        if (count === proms.length) {
          resolve(result);
        }
      }).catch(reject);
    });
  });
};

promiseAll([
  new Promise((res) => res("promise1")),
  new Promise((res) => res("promise2")),
  new Promise((res) => res("promise3")),
]).then((res) => console.log(res));



//==================== функция для проверки валидности скобок
const checkBrackets = (str) => {
  const bracketsMap = { "[": "]", "(": ")", "{": "}" };
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const cur = str[i];

    if (bracketsMap[cur]) {
      stack.push(bracketsMap[cur]);
    } else if (stack.pop() !== cur) {
      return false;
    }
  }

  return !stack.length;
};

console.log(checkBrackets("()[]{}"), checkBrackets("((()))"), checkBrackets("()[]{]"), "valid ()"); // true false




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