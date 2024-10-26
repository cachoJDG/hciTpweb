<script setup >

import CreditCard from "@/components/Tarjetas/CreditCard.vue";
import { useCreditCardStore } from '@/stores/creditCardStorage.js';

const props = defineProps({
  num: {
    type: Number,
    default: 0
  },
  isVisible: {
    type: Boolean,
    default: false
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

const creditCardStore = useCreditCardStore();
const cards = ref([]);

cards.value = creditCardStore.getUserCreditCards();


function deleteCard(index) {
  console.log("deleteCard", index);
  console.log(cards[index]);
  console.log("Card number to be deleted:", cards.value[index].cardNumber);

  creditCardStore.removeCreditCard(cards.value[index].cardNumber);

  cards.value = creditCardStore.getUserCreditCards();

  modal.value.show = false;
  isVisible.value = false;
  console.log(isVisible.value);
}




</script>
<template>
  <v-container class="container" >
  
    <div v-if="cards.length > 0">
      <CreditCard v-for="(card,index) in cards"
                  :key="index"
                  :index="index"
                  :title="card.cardHolder"
                  :number="card.cardNumber"
                  :isVisible="isVisible"
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
  </v-container>
</template>

<style scoped>

.container{
  width: 100%;
  justify-content: center;
  position: relative;
}
.modal{
  max-width: 600px;
  justify-content: center;
}




</style>
