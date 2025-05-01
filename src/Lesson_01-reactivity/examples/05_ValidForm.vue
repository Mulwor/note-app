<script setup>
import { reactive, ref, watchEffect } from 'vue';

const form = reactive({
  name: '',
  email: '',
});

const isFormValid = ref(false);

// Автоматически следит за всеми изменениями
watchEffect(() => {
  isFormValid.value = form.name.length > 0 && form.email.includes('@');
});
</script>

<template>
  <div>
    <input v-model="form.name" placeholder="Имя" />
    <input v-model="form.email" placeholder="Email" />
    <p v-if="isFormValid">Форма валидна ✅</p>
    <p v-else>Заполните форму правильно ❌</p>
  </div>
</template>
