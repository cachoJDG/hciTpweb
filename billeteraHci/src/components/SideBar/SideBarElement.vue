<script setup>

import {VIcon} from "vuetify/components";

defineProps({
  elementName: {
    type: String,
    required: true
  },
  elementIcon: {
    type: String,
    required: true
  }
});

</script>

<template>
  <v-card class="card" >
    <v-icon :icon="elementIcon"></v-icon>

    <p>{{ elementName }}</p>
  </v-card>
</template>

<style scoped>
  .card {
    display: flex;
    width: 100%;
    height: 10%;
    margin: 0;
    padding: 20px;



  }
</style>
