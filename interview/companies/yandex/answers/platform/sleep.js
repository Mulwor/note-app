function sleep(ms) {
    return new Promise((res) => setTimeout(res, ms))
}

function sumPromises(...promises) {
  return Promise.all(promises)
    .then((result) => result.reduce((a, b) => a + b), 0)
}

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);

sumPromises(promise1, promise2).then(console.log); // 3