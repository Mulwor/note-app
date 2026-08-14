// ? Методы экземпляра
const successPromise = new Promise((resolve, reject) => {
  let pendingResult = 1 + 1;

  pendingResult === 2 ? resolve("Success") : reject("Failed")
});

successPromise
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

// ! ==================================================================================================

const failedPromise = new Promise((resolve, reject) => {
  let pendingResult = 1 + 2;

  pendingResult === 2 ? resolve("Success") : reject("Failed");
});

failedPromise
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

// ! ==================================================================================================

const finallyPromise = new Promise((resolve, reject) => {
  Math.random() > 0.5 ?  resolve('Mail has arrived') : reject(new Error('Failed to arrive'));
});

finallyPromise
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Experiment completed"))