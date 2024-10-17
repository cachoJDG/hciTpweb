<template>
  <div class="header-container">
    <h1 class="header-title">{{ title }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.header-container {
  width: 100%;
  background-color: #e492e0;
  color: white;
  text-align: center;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.header-title {
  margin: 0;
  font-size: 28px;
  font-weight: bold;
}
</style>
