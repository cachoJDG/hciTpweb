<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: String,
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: String
});

const emit = defineEmits(['update:modelValue']);

const onInput = () => {
  emit('update:modelValue', event.target.value);
};

</script>

<template>
  <v-card class="card">
    <v-card-title class="text-black">{{ title }}</v-card-title>
    <v-text-field
      :label="title"
      :rules="rules"
      outlined
      color="#510cc2"
      class="mb-1 text-black"
      :model-value="modelValue"
      @input="onInput"
    />
  </v-card>
</template>

<style scoped>
.card {
  border-radius: 20px;
  background-color: #CCABF9;
}
</style>
