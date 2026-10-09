const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(20, 25, 500, 150);