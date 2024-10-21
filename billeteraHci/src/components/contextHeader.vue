<template>
  <div class="profile-container">
    <h1 class="profile-title">{{ title }}</h1>
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
.profile-container {
  display: flex; /* Flexbox para que ambos textos queden alineados */
  align-items: center; /* Alineación vertical centrada */
  justify-content: space-between; /* Espacio entre elementos */
  height: 80px; /* Asegura que la altura sea la misma */
  background-color: #7e57c2; /* Color de fondo similar */
  padding: 10px; /* Espaciado interno */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera */

  width: 100%;
  
}

.profile-title {
  font-size: 28px; /* Tamaño de fuente */
  font-weight: bold; /* Texto en negrita */
  color: #ffffff; /* Color del texto */
}

.header-title {
  margin: 0;
  font-size: 28px;
  font-weight: bold;
}
</style>
