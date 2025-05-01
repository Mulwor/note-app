import { ref, watch, watchEffect, computed } from 'vue';

const counterButton = document.querySelector('button#counter');
const resetButton = document.querySelector('button#reset');

// 1. Создает объект, у которого есть поле value и в соответствии с этим полем 
// value, она делает изменения
const counterState = ref(5);

// 2. Computed - вычисляемое свойство (работает только с геттерами) - оно вызы-
// вается один раз только когда вычисления сработало. Похож на useMemo, useReducer
const isCounterTooBig = computed(() => counterState.value > 10)

// 2. Функция watch необходимо для отслеживания изменения. 
// Следи за объектом counterState и когда он изменился вызови функцию renderCounter
watch(counterState, () => {
  renderCounter()
})

// 2.1 Есть также функцию watchEffect, где передается только функция renderCounter
watchEffect(() => {
  renderCounter()
})
// На вопрос как vue понимает когда нужно вызывать renderCounter - мы можем отслеживать
// обращение и на set и на get и тем самым вызывать перерисовку. И что же делает vue -
// он видит что в него передали функцию renderCounter() и сразу же вызывает эту функцию

// Моя функцию внутри обращается к полю counterState.value (перехватываем через get), а это
// значит, что это функция зависит от counterState так как мы к нему обращаемся. Поэтому когда
// поле counterState будет изменятся, я буду автоматически вызывать перерисовку
function renderCounter() {
  console.log('render renderCounter')
  counterButton.textContent = `Счетчик: ${counterState.value}`;
}

watchEffect(() => {
  updateCounterColor();
});

function updateCounterColor() {
  console.log('render updateCounterColor')
  counterButton.classList.toggle('red', isCounterTooBig.value);
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

// Fine-grained reactivity - высоко точная реактивность - мы можем перерисовывать
// элементы страницы и элементы html только тогда когда данные, которые не 
// отображают изменились. Например - мы меняем цвет нашей кнопки когда изменилось
// вычислимое свойство от состояния isCounterTooBig