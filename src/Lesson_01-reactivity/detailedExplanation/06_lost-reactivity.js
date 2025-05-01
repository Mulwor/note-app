import { ref, watchEffect, computed } from 'vue';

const counterButton = document.querySelector('button#counter');
const resetButton = document.querySelector('button#reset');

const initialState = {
  counter: 1
}

// Внутри рефа помимо основного прокси создает еще один прокси с initialState.
// Это чревато тем, что если в setInterval мы обновим через initialState, а не
// через counterState, то у меня сломается реактивность
const counterState = ref(initialState);
const isCounterTooBig = computed(() => counterState.value.counter > 10)

watchEffect(() => {
  renderCounter()
})

watchEffect(() => {
  updateCounterColor();
});

function renderCounter() {
  counterButton.textContent = `Счетчик: ${counterState.value.counter}`;
}

function updateCounterColor() {
  counterButton.classList.toggle('red', isCounterTooBig.value);
}

counterButton.addEventListener('click', () => {
  counterState.value.counter += 1;
})

resetButton.addEventListener('click', () => {
  counterState.value.counter += 0;
})

setInterval(() => {
  counterState.value.counter += 1;
})
