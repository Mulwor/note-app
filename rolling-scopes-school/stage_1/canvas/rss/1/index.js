const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 200;

ctx.font = '42px Arial';
ctx.fillText("Hello, I'm canvas!", 50, 100);