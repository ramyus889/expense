<script setup>
import { reactive, ref, onMounted, computed, provide, shallowRef } from "vue";
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import Income from "./components/Income.vue";
import Transaction from "./components/Transaction.vue";
import AddTransaction from "./components/AddTransaction.vue";
import { useToast } from "primevue/usetoast";
const toast = useToast();

const transactions = ref([]);

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem("transactions"));

  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});

const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

const expenses = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  });

  savedTransactionsToLocalStorage();
};

const generateUniqueId = () => {
  return Math.floor(Math.random() * 100000000);
};

const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );

  savedTransactionsToLocalStorage();
  toast.add({
    severity: "success",
    summary: "Transaction deleted!",
    detail: "Your transaction has been successfully removed.",
    life: 3500,
  });
};

const savedTransactionsToLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};
</script>

<template>
  <div class="m-8">
    <div class="container2">
      <Header />
      <Balance :total="+total" />
      <Income :income="+income" :expenses="+expenses" />
      <Transaction
        :transactions="transactions"
        @transactionDeleted="handleTransactionDeleted"
      />
      <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
    </div>
  </div>
</template>
<style></style>
