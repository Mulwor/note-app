const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'yellow';
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';

ctx.beginPath();
ctx.moveTo(100, 10);
ctx.lineTo(10, 150);
ctx.lineTo(190, 150);
ctx.fill()