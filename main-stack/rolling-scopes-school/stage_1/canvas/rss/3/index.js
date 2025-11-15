const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 200;

ctx.fillStyle = 'blue'

ctx.fillRect(50, 50, 100, 100);
ctx.clearRect(75, 75, 50, 50);