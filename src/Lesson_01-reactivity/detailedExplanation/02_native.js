// Если мы хотим получить возможность реагировать на изменения
// состояние. Реактивность - способность системы реагировать на
// изменения свое состояние

const counterButton = document.querySelector('button#counter');
const resetButton = document.querySelector('button#reset');

function useCounter() {
  let counter = 5; 

  function renderCounter() {
    counterButton.textContent = `Счетчик: ${counter}`;
  }

  return {
    getCounter() {
      return counter;
    },
    setCounter(newValue) {
      counter = newValue;
      renderCounter();
    }
  }
}

const { getCounter, setCounter } = useCounter();

counterButton.addEventListener('click', () => {
  setCounter(getCounter() + 1);
})

resetButton.addEventListener('click', () => {
  setCounter(0);
})

setInterval(() => {
  setCounter(getCounter() + 1);
})

// Тем самым мы достигаем того, что у нас нет физически возможности
// изменить состояние counter забыв его обновив на экране. Такого принципа
// придерживается реакт  
