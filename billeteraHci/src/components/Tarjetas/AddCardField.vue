<script setup>
  defineProps({
    title: String,
    rules: {
      type: Array,
      default: () => []
    }
  });


</script>

<template>
    <v-card class="card">
      <v-card-title class="text-black">{{ title }}</v-card-title>
      <v-text-field
        :label="title"
        :rules="rules"
        outlined
        color="#510cc2"
        class="mb-1 text-black">
      </v-text-field>

    </v-card>
</template>

<style scoped>
.card {
  border-radius: 20px;
  background-color: #CCABF9;
}


</style>
