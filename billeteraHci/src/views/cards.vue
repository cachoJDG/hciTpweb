<script setup>
import BarraLateral from "@/components/ContextComponents/BarraLateral.vue";
import ContextHeader from "@/components/ContextComponents/contextHeader.vue";
import MyButton from "@/components/GeneralUse/myButton.vue";
import MyRectangle from "@/components/GeneralUse/MyRectangle.vue";
import AddCardForm from "@/components/Tarjetas/AddCardForm.vue";
import AddedCards from "@/components/Tarjetas/AddedCards.vue";
import { useUserInfoStore } from "@/stores/userInfo";

const userName = useUserInfoStore().userName;
const isVisible = ref(false); // Variable para controlar visibilidad del botón

function toggleVisibility() {
  isVisible.value = true; // Cambia a true cuando seleccionas la opción del menú
} 

function toggleOFF() {
  isVisible.value = false; // Cambia a false cuando seleccionas la opción del menú
}
</script>

<template>
  <ContextHeader title="Mis Tarjetas" />

  <div class="page">
    <BarraLateral active-section="a" :user-name="userName" />
    <div class="cards">
      <MyRectangle title="Tarjetas">
        <v-menu transition="slide-y-transition" right>
          <template v-slot:activator="{ props }">
            <v-icon v-bind="props" class="three-dots">
              mdi-dots-vertical
            </v-icon>
          </template>
          <!-- Opciones dentro del menú -->
          <v-list>
            <v-list-item @click="toggleVisibility">
              <v-list-item-title>Eliminar una tarjeta</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <AddedCards :num="3" :isVisible="isVisible" />
        <MyButton v-if="isVisible" @click="toggleOFF">Listo</MyButton>
      </MyRectangle>
      <MyRectangle title="Agregar Tarjeta">
        <add-card-form />
      </MyRectangle>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
}
.page {
  padding-left: 20px;
  justify-content: center;
}
.three-dots {
  cursor: pointer;
  color: #000;
  position: absolute;
  right: 8px;
  top: 16px;
}
</style>
