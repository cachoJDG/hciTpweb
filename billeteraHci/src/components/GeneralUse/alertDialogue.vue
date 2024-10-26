<template>
    <v-dialog v-model="visible" max-width="400px">
      <v-card :class="dialogClass">
        <v-card-title class="headline">{{ title }}</v-card-title>
        <v-card-text>{{ message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="visible = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup>
  import { ref, watch, computed } from 'vue';
  
  const props = defineProps({
    message: String,
    type: {
      type: String,
      default: 'success',
    },
    visible: Boolean,
  });
  
  const emit = defineEmits(['update:visible']);
  
  const visible = ref(props.visible);
  
  watch(() => props.visible, (newVal) => {
    visible.value = newVal;
  });
  
  watch(visible, (newVal) => {
    emit('update:visible', newVal);
  });
  
  const dialogClass = computed(() => {
    return props.type === 'success' ? 'success-dialog' : 'failure-dialog';
  });
  
  const title = computed(() => {
    return props.type === 'success' ? 'Éxito' : 'Error';
  });
  </script>
  
  <style scoped>
  .success-dialog {
    background-color: #d4edda;
    color: #155724;
  }
  
  .failure-dialog {
    background-color: #f8d7da;
    color: #721c24;
  }
  </style>