<template>
  <h4 class="h44 mt-3">Your Balance</h4>
  <h1 id="balance" class="text-[32px] font-[600]">${{ total }}</h1>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>
