let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let myColor = 'red';

// ? Функция по изменению цвета
document.getElementById('color').oninput = function() {
  myColor = this.value;
}

// Функция по нажатию на мышки начинает рисовать - этакий перо
canvas.onmousedown = function(event) {
  // Рисует когда мы находимся внутри именно canvas
  canvas.onmousemove = function(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    ctx.fillRect(x-5, y-5, 10, 10);
    // Дадим пользователю выбирать цвет заливки
    ctx.fillStyle = myColor;
    ctx.fill();
  };
  // Когда отпускаем мышь, то оно перестает рисовать
  canvas.onmouseup = function() {
    canvas.onmousemove = null;
  };
}