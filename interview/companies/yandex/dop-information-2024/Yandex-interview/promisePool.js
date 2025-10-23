const prom = (ms, txt) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(txt), ms);
  });

function promisePool(arr, n) {
  const result = [];
  let k = 0;

  const len = arr.length;

  return new Promise((resolve, reject) => {
    function step() {
      if (arr.length === 0) return;
      const j = arr.length - 1;
      const p = arr.pop();
      p.then((data) => {
        result[j] = data;
        console.log(data);
        k++;
        if (arr.length > 0) {
          step();
        }
        if (k === len) resolve(result);
      });
    }
    for (let i = 0; i < n; i++) {
      step();
    }
  });
}

// promisePool([], 2).then((data) => console.log(data));

// promisePool(
//   [
//     prom(1000, 'p1'),
//     prom(4000, 'p2'),
//     prom(2000, 'p3'),
//     prom(3000, 'p4'),
//     prom(1000, 'p5'),
//     prom(10000, 'p6'),
//     prom(2500, 'p7'),
//     prom(1000, 'p8'),
//   ],
//   2
// ).then((data) => console.log(data));

function fPool(arr, n) {
  const result = [];
  let k = 0;

  const len = arr.length;

  return new Promise((resolve, reject) => {
    function step() {
      if (arr.length === 0) return;
      const j = arr.length - 1;
      const p = arr.pop();
      fetch(p)
        .then((data) => {
          result[j] = data;
          console.log(data);
          k++;
          if (arr.length > 0) {
            step();
          }
          if (k === len) resolve(result);
        })
        .catch((e) => console.log(e));
    }
    for (let i = 0; i < n; i++) {
      step();
    }
  });
}

const memo = (fn) => {
  const map = new Map();

  return async function (url) {
    if (map.has(url) && map.get(url).status < 400) {
      console.log(url);
      return map.get(url);
    }
    const res = await fn(url);
    map.set(url, res);
    return res;
  };
};

// const memoProm = memo(fPool);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response)
//   .then((json) => console.log(json));

function limit(url, n, cb) {
  const cache = {};
  const res = [];
  let count = 0;
  let i = 0;

  const len = Math.min(n, url.length);

  function step() {
    console.log(url[i]);
    const cur = url[i];
    const ind = i;
    i++;
    if (!cache.hasOwnProperty(cur)) {
      console.log('no cache');
      cache[cur] = fetch(cur);
    }

    cache[cur].then((resp) => {
      res[ind] = resp;
      count++;
      if (count === url.length - 1) {
        return cb(res);
      }
      step();
    });
  }

  for (let j = 0; j < len; j++) {
    step();
  }
}

const url = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/6',
  'https://jsonplaceholder.typicode.com/todos/7',
  'https://jsonplaceholder.typicode.com/todos/3',
];

const fn = (data) => {
  console.log(data.length);
  data.forEach((element) => console.log(element));
};

limit(url, 10, fn);
// parallelLimit(url, 3, fn);
