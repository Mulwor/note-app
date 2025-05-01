const counterButton = document.querySelector('button#counter');
const resetButton = document.querySelector('button#reset');

// Состояние
let counter = 5;

function isCounterTooBig() {
  return counter > 10;
}

// Отображает состояние на экране
function renderCounter() {
  counterButton.textContent = `Счетчик: ${counter}`;

  counterButton.classList.toggle('red', isCounterTooBig());
}

renderCounter();

// Обработчик событий, когда произошел клик, увеличь на единицу 
// и обнови counter => renderCounter
counterButton.addEventListener('click', () => {
  counter = counter + 1;
  renderCounter()
})

// Обработчик событий, когда произошел клик, присвой 0
// и обнови counter => renderCounter
resetButton.addEventListener('click', () => {
  counter = 0;
  renderCounter()
})

// Состояние можно менять также через setInterval
setInterval(() => {
  counter += 1;
  renderCounter();
})
