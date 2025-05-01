const counterButton = document.querySelector('button#counter');
const resetButton = document.querySelector('button#reset');

// Но вью придерживалось другого подхода. Они подумали, что
// вдруг будет не переменная, а объект, а его мы должны мутировать.
// И предложили альтернативу через геттеры и сеттеры.
const counterState = {
  _value: 5,

  // Возвращает значение
  get value() {
    return this._value
  },
  // Присваивает значение
  set value(newValue) {
    this._value = newValue;
    renderCounter();
  }
}

function renderCounter() {
  counterButton.textContent = `Счетчик: ${counterState.value}`;

  counterButton.classList.toggle('red', isCounterTooBig());
}

function isCounterTooBig() {
  return counterState.value > 10;
}

counterButton.addEventListener('click', () => {
  counterState.value += 1;
})

resetButton.addEventListener('click', () => {
  counterState.value += 0;
})

setInterval(() => {
  counterState.value += 1;
})

// Однако данный метод имеет определенные недостатки - это если
// у counterState появится новое поле. Оно не будет реактивным, 
// мы его не сможем отслеживать. У нас не будет геттеров и сеттеров
// мы должны будем позаботиться о его установке, но с EcmaScript2015
// есть метод получше - это proxy. 

// Он оборачивает наш объект в дополнительную
// обертку, которая позволяет перехватывать обращение к произвольным полям
// объекта к которому обращаются. Например мы обращаемся counterState, мы можем
// выполнить определенную логику на get и set