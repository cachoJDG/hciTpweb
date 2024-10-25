<script setup >

import AddCardField from "@/components/Tarjetas/AddCardField.vue";
import CreditCard from "@/components/Tarjetas/CreditCard.vue";
import { useCreditCardStore } from '@/stores/creditCardStorage.js';

const props = defineProps({
  num: {
    type: Number,
    default: 0
  }
});

const modal = ref({
  show: false,
  index: 0
});

function openModal(index) {
  console.log("openModal", index);
  modal.value = {
    show: true,
    index: index
  };
}

function deleteCard(index) {
  console.log("deleteCard", index);
  modal.value.show = false;
}

const creditCardStore = useCreditCardStore();
const cards = ref([]);

cards.value = creditCardStore.getUserCreditCards();

</script>

<template>
  <v-container class="container" >
    <div v-if="cards.length > 0">
      <CreditCard v-for="(card,index) in cards"
                  :key="index"
                  :index="index"
                  :title="card.cardHolder"
                  :number="card.cardNumber"
                  @deleteCard="openModal">
      </CreditCard>
    </div>
    <div v-else>
      <h1>No hay tarjetas agregadas</h1>
    </div>
    <v-dialog v-model="modal.show" class="modal" >
      <v-card color="#a055f9" class="text-black">
        <v-card-title>¿Estás seguro que deseas eliminar esta tarjeta?</v-card-title>
        <v-card-actions>
          <v-btn @click="deleteCard(modal.index)">Sí</v-btn>
          <v-btn @click="modal.show = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


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

.container{
  width: 100%;
  justify-content: center;
}
.modal{
  max-width: 600px;
  justify-content: center;
}



</style>
