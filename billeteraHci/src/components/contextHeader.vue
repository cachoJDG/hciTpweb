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
.profile-container {
  position: sticky; /* Se mantendrá visible mientras esté en el contenedor */
  top: 0; /* Posición desde la parte superior del contenedor */
  display: flex; /* Flexbox para que ambos textos queden alineados */
  align-items: center; /* Alineación vertical centrada */
  justify-content: space-between; /* Espacio entre elementos */
  height: 80px; /* Asegura que la altura sea la misma */
  background-color: #7e57c2; /* Color de fondo */
  padding: 10px; /* Espaciado interno */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera */
  z-index: 1000; /* Asegura que esté sobre otros elementos */
}

.profile-title {
  font-size: 28px; /* Tamaño de fuente */
  font-weight: bold; /* Texto en negrita */
  color: #ffffff; /* Color del texto */
}
</style>
  