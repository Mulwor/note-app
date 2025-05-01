<script setup>
import { ref, computed } from 'vue';

const price = ref(100);
const quantity = ref(2);

const total = computed(() => {
  return price.value * quantity.value;
});

function updatePrice() {
  price.value += 10;
}
</script>

<template>
  <div>
    <p>Цена за единицу: {{ price }}</p>
    <p>Количество: {{ quantity }}</p>
    <p><strong>Итого: {{ total }}</strong></p>
    <button @click="updatePrice">Повысить цену</button>
  </div>
</template>
