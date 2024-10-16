<script setup>

  defineProps({
    index: Number,
    title: String,
    number: String,
  });
  defineEmits(['deleteCard']);

</script>

<template>
  <v-card class="card text-black">
    <v-card-title >{{ title }}</v-card-title>
    <v-card-text class="text">{{number}}</v-card-text>
    <v-btn class="btn"  density="compact" @click="$emit('deleteCard',index)">
      <v-icon color="black" size="50px">mdi-delete</v-icon>
    </v-btn>
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
  right: 15px;
  top: 30px;
  height: 60px;
  width: 20px;
  border-radius: 50%;
  background-color: #a055f9;
}
</style>
