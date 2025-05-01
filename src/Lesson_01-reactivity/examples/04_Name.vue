<script setup>
import { ref, watch } from 'vue';

const username = ref('');

watch(username, (newVal, oldVal) => {
  console.log(`Имя изменилось с "${oldVal}" на "${newVal}"`);
  
  if (newVal.length > 10) {
    alert('Имя слишком длинное!');
  }
});
</script>

<template>
  <div>
    <input v-model="username" placeholder="Введите имя..." />
    <p>Вы ввели: {{ username }}</p>
  </div>
</template>
