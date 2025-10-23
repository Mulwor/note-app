// функция fuzzySearch - нечеткий поиск - первая строка подпоследовательность второй?
function findFull(target, str) {
  let l = 0;
  let r = 0;
  const stack = target.split('').reverse();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === stack[stack.length - 1]) {
      stack.pop();
    }
  }
  return stack.length === 0 ? true : false;
}

// console.log(findFull(target, str));
