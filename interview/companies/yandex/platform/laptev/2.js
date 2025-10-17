// Необходимо сверху вниз пройтись и рассказать максимально подробно
// объяснить, что происходит в каждой строчке кода, как она исполняется
// и куда она передается в управления, какие строчку может не попадать

Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => { throw x } )
  .then((x) => console.log(x))
  .catch((err) => console.log(err))
  .then(x => Promise.resolve(x))
  .catch((err) => console.log(err))
  .then((x) => console.log(x))