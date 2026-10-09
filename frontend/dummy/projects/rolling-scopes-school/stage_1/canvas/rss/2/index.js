const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 120);
ctx.closePath();

ctx.fillStyle = "orange";
ctx.fill();

ctx.moveTo(150, 50);
ctx.lineTo(200, 50);
ctx.lineTo(150, 120);
ctx.closePath();

ctx.fillStyle = 'blue';
ctx.fill();