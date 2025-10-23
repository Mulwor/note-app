// удалить смайлики :-(( и :-)))  из строки
function deleteSmile(str) {
  const arr = str.split('');
  for (let i = 0; i < arr.length - 4; i++) {
    let str = [arr[i], arr[i + 1], arr[i + 2], arr[i + 3]].join('');
    if (str === ':-((') {
      arr.splice(i, 4);
      i--;
    }
    str += arr[i + 4];
    if (str === ':-)))') {
      arr.splice(i, 5);
      i--;
    }
  }
  console.log(arr.join(''));
}

deleteSmile('Я работаю в чипугле :-)))');
deleteSmile('z ytn :-(( blya');
deleteSmile('z ytn :-(((:-)))) blya');
// deleteSmile('')
