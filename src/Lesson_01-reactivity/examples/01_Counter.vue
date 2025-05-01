<script setup>
import { ref, onMounted } from 'vue'

// реактивное состояние
const count = ref(0)

// функции которые мутируют состояние и вызывают обновления
function increment() {
  count.value++
}

// хуки жизненного цикла
onMounted(() => {
  console.log(`Стартовое значение счётчика — ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Счётчик: {{ count }}</button>
</template>