<template>
  <h3 class="h33">Добавить новую транзакцию</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label class="label2" for="text">Напишите текст</label>
      <input
        class="input4"
        type="text"
        id="text"
        v-model="text"
        placeholder="Enter text..."
      />
    </div>
    <div class="form-control">
      <label class="label2" for="amount">Нпишите сумму <br /> </label>
      <input
        class="input4"
        type="text"
        v-model="amount"
        id="amount"
        placeholder="Enter amount..."
      />
    </div>
    <Toast />
    <Button class="btn" label="Добавить транзакцию" @click="onSubmit()" />
  </form>
</template>
<script setup>
import { ref, defineEmits } from "vue";
import { useToast } from "primevue/usetoast";
const text = ref("");
const amount = ref("");
const emit = defineEmits(["transactionSubmitted"]);
const toast = useToast();

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.add({
      severity: "error",
      summary: "Error Message",
      detail: "text or amount cannot be empty",
      life: 3000,
    });
    return;
  } else
    toast.add({
      severity: "success",
      summary: "Transaction added!",
      detail: `${text.value} - ${amount.value}`,
      life: 3000,
    });

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };

  emit("transactionSubmitted", transactionData);

  text.value = "";
  amount.value = "";
};
</script>
