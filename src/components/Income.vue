<template>
  <div class="inc-exp-container">
    <div class="div3">
      <h4 class="h44">Доход</h4>
      <p id="money-plus" class="money plus">+${{ income }}</p>
    </div>
    <div class="div3">
      <h4 class="h44">Расход</h4>
      <p id="money-minus" class="money minus">${{ expenses }}</p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
});
</script>
