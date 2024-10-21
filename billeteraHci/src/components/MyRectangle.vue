

<template>
  <v-container>
    <v-card class="--text pa-2" color="white" :width="width" outlined>
      <v-card-title class="black--text">{{ title }}</v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
  defineProps({
    title: String,
    width: {
      type: String,
      default: '550px'
    }
  });
</script>

<style scoped>
.v-card {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
    border-radius: 8px; /* Bordes suaves */
    position: relative; /* Para el posicionamiento absoluto del botón de edición */
    margin-bottom: 25px;
}
</style>
