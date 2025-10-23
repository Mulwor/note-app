const get = async (url) => {
  return (
    (await (await fetch("https://jsonplaceholder.typicode.com/todos/1")).url) +
    url
  );
};

/*
Дан массив ссылок: ['url1', 'url2', ...] и лимит одновременных запросов (limit)
Необходимо реализовать функцию, которая опросит урлы в том порядке, в котором они идут в массиве, и вызовет callback c массивом ответов
['url1_answer', 'url2_answer', ...] так, чтобы в любой момент времени выполнялось не более limit
запросов (как только любой из них завершился, сразу же отправляется следующий)
Т.е. нужно реализовать шину с шириной равной limit.

Требования:
- Порядок в массиве ответов должен совпадать с порядком в массиве ссылок
Дополнительно:
- Функция должна обладать мемоизацией (один и тот же урл не опрашивать дважды)

Для опроса можно использовать fetch или $.get
Ошибки обрабатывать не нужно

*/
// declare function fetch(url: string): Promise<string>;
// declare function $.get(url: string, callback: (res: string) => void): void;

function solve(urls, n) {
  let i = 0;
  let succes = 0;
  let map = new Map();
  const len = urls.length;

  const wrap = (res) => {
    if (i >= len) {
      return;
    }
    const curUrl = urls[i];
    i += 1;

    if (map.has(curUrl)) {
      succes += 1;
      if (succes === len) {
        res(urls.map((url) => map.get(url)));
      }
      wrap(res);
      return;
    }

    map.set(curUrl, null);

    get(curUrl).then((data) => {
      map.set(curUrl, data);
      succes += 1;
      if (succes === len) {
        res(urls.map((url) => map.get(url)));
      }
      wrap(res);
    });
  };

  return new Promise((res) => {
    for (let j = 0; j < n; j++) {
      wrap(res);
    }
  });
}

setTimeout(() => {
  solve(["1", "2", "3", "4", "5", "1"], 3).then((data) => console.log(data));
}, 1000);
