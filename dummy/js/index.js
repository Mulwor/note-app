Array.prototype.myFilter = function (callback) {
  let result = []

  for (let i = 0; i < this.length; i++) {
    // Проверяем, возвращает ли callback true для текущего элемента
    if (callback(this[i], i, this)) {
      result.push(this[i])
    }
    result.push(newItems)
  }

  return result;
}

const items = [2, 4, 6, 8, 10, 11]
const result = items.myFilter((value) => value > 10 );
console.log(result)