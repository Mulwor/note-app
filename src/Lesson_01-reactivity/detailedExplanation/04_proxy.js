// Proxy - оборачивает наш объект в дополнительную обертку, которая 
// позволяет перехватывать обращение к произвольным полям объекта к
// которому обращаются. Например мы обращаемся counterState, мы можем
// выполнить определенную логику на get и set

const counterButton = document.querySelector('button#counter');
const resetButton = document.querySelector('button#reset');

const state = {
  value: 5,
};

const counterState = new Proxy(state, {
  get(target, prop) {
    return target[prop];
  },
  set(target, prop, value) {
    target[prop] = value;
    
    if (prop === 'value') {
      renderCounter();
    }
    
    return true;
  }
});

function renderCounter() {
  counterButton.textContent = `Счетчик: ${counterState.value}`;
  counterButton.classList.toggle('red', isCounterTooBig());
}

function isCounterTooBig() {
  return counterState.value > 10;
}

counterButton.addEventListener('click', () => {
  counterState.value += 1;
});

resetButton.addEventListener('click', () => {
  counterState.value = 0;
});

setInterval(() => {
  counterState.value += 1;
}, 1000);
