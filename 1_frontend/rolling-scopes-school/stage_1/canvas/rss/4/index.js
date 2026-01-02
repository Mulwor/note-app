const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(10, 15, 150, 100);