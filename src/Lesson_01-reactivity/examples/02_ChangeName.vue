<script setup>
import { reactive } from 'vue';

const user = reactive({
  name: 'Иван',
  age: 30
});

function updateName() {
  user.name = 'Алексей';
}
</script>

<template>
  <div>
    <p>Имя: {{ user.name }}</p>
    <p>Возраст: {{ user.age }}</p>
    <button @click="updateName">Сменить имя</button>
  </div>
</template>
