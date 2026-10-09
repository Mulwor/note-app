let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');

// ? ================================= Рисуем прямоугольник ==================================
ctx.beginPath()  // ! Указываем что мы хотим начать новый путь 

// ! Прямоугольник залитой цветом
ctx.fillStyle = "red"                    // ! Меняем цвет с черного на красный
// ? ctx.fillRect(Координат x; Координат y; Ширина прямоугольника; Высота прямоугольника*/);
ctx.fillRect(100, 50, 150, 75);          // ! Рисуем прямоугольник с определенными координатами

ctx.fillStyle = "blue"
ctx.fillRect(150, 100, 100, 50);

ctx.clearRect(0, 0, 400, 200)           // ! Если необходимо удалить все что мы нарисовали, то мы можем использовать следующий метод

// ! Прямоугольник как можно обвести, так и залить
// ~ Команда, которая говорит где рисовать
ctx.beginPath()
ctx.rect(5, 10, 100, 100)
// ~ Цвет обводки
ctx.strokeStyle = "green"
// ~ Толщина обводки
ctx.lineWidth = 10;

// ~ Чтобы нарисовать данный прямоугольник необходимо применить метод stroke
ctx.stroke();

// ~ Нарисовать внутри
ctx.fillStyle = "blue";
ctx.fill()
ctx.clearRect(0, 0, 400, 200)   

// ? ================================== Рисуем линию =========================================
// ~ Для того, чтобы нарисовать линию необходимо:
// ~ 1. Позиционировать перо где мы будем рисовать линию внутри canvas
ctx.beginPath()  
ctx.moveTo(100, 50)           // ! moveTo (Координата x, координата y)
// ~ 2. Показать куда мы рисуем линию (конечная координата) - команда рисование линии и обводим его
ctx.strokeStyle = "red"
ctx.lineWidth = "5"
ctx.lineTo(150, 150)
ctx.stroke();
ctx.lineTo(300, 50)
ctx.lineCap = "round";
ctx.stroke()
// ~ 3. После этого обвести линию с помощью команды

ctx.beginPath()  
ctx.strokeStyle = "blue"
ctx.moveTo(200, 50)
ctx.lineTo(300, 50)
// lineCap - позволяет изменять конечные точки
ctx.lineCap = "round";
ctx.lineCap = "square"
ctx.stroke()
ctx.clearRect(0, 0, 400, 200)

// ? ================================== Рисуем треугольник =========================================
ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(150, 50);
ctx.lineTo(200, 150);
ctx.lineTo(50, 150);
ctx.lineWidth = "5";
ctx.lineCap = "butt";
ctx.fillStyle = "yellow";
ctx.stroke();
ctx.fill(); 
