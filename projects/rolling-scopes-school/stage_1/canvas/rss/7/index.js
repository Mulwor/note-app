const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';

ctx.beginPath();
ctx.arc(150, 75, 50, 0, Math.PI * 2)
ctx.fill()