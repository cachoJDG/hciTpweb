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

const onInput = (event) => {
  emit('update:modelValue', event.target.value);
};

</script>

<template>
  <div class="form-field">
    <label class="form-label">{{ title }}</label>
    <v-text-field
      :label="title"
      :rules="rules"
      outlined
      color="#510cc2"
      class="mb-1 text-black"
      :model-value="modelValue"
      @input="onInput"
    />
  </div>
</template>

<style scoped>
.form-field {
  margin-bottom: 20px;
}

.form-label {
  font-weight: bold;
  color: #510cc2;
  margin-bottom: 5px;
  display: block;
}
</style>
