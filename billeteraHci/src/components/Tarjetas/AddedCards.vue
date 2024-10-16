<script setup >

import AddCardField from "@/components/Tarjetas/AddCardField.vue";
import CreditCard from "@/components/Tarjetas/CreditCard.vue";

const props = defineProps({
  num: {
    type: Number,
    default: 0
  }
});

function openModal() {
  console.log("openModal");
}

const cards = ref([]);

for (let i = 0; i < props.num; i++) {
  cards.value.push({
    title: "mercadoPago",
    cardNumber: "23123123123213",
  });
}
</script>

<template>
  <v-container class="container" @deleteCard="openModal">
    <div v-if="num > 0">
      <CreditCard v-for="(card,index) in cards" :key="index" :title="card.title" :number="card.cardNumber">

      </CreditCard>
    </div>
    <div v-else>
      <h1>No hay tarjetas agregadas</h1>
    </div>

<!--    <v-form class="form">-->
<!--      <AddCardField class="field" v-for="(field, index) in fields" :key="index" :title="field.title" :rules="field.rules"/>-->
<!--    </v-form>-->
<!--    <v-btn class="button" title="Agregar tarjeta" append-icon="mdi-plus-circle">-->
<!--      <p class="text-black">Agregar Tarjeta</p>-->
<!--      <template v-slot:append>-->
<!--        <v-icon color="black"></v-icon>-->
<!--      </template>-->
<!--    </v-btn>-->
  </v-container>
</template>

<style scoped>
.form {

}
.container{
  width: 100%;
  justify-content: center;
}



</style>
