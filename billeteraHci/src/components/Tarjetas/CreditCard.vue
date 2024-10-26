<script setup>

  defineProps({
    index: Number,
    title: String,
    number: String,
    isVisible:{
      type: Boolean,
      default: false
    }
  });
  defineEmits(['deleteCard']);

</script>

<template>
  <v-card class="card text-black">
    <v-card-title >{{ title }}</v-card-title>
    <v-card-text class="text">{{number}}</v-card-text>
      <v-icon color="secondary" class="btn" v-if="isVisible" @click="$emit('deleteCard', index)">mdi-delete</v-icon>
  </v-card>
</template>

<style scoped>
.card {
  border-radius: 20px;
  background-color: #CCABF9;
  padding: 0;
  height: 130px;
  margin-bottom: 20px;
}
.text{
  font-size: 20px;
  margin-top: 30px;
}
.btn{
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 30px;
}
</style>
