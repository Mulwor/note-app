Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const conditional = callback(this[i], i, this)

    if (!conditional) {
      return false
    }
  }

  return true;
}

const numbers = [2, 4, 6, 8, 10];
const result_01 = numbers.myEvery(num => num % 2 === 0);
const result_02 = numbers.myEvery(num => num > 3);
console.log(`Результат 1_`, result_01, `Результат 2_`, result_02)  