

<template>
  <v-container>
    <v-card class="white--text pa-2" :width="width" color="#D9D9D9" outlined>
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
  border-radius: 8px;
}
</style>
