<script setup>

import BarraLateral from "@/components/BarraLateral.vue";
import MyRectangle from "@/components/MyRectangle.vue";
import AddCardForm from "@/components/Tarjetas/AddCardForm.vue";
</script>

<template>
  <div class="page">
    <BarraLateral active-section="a" user-name="a"/>
    <div class="cards">
      <MyRectangle title="Tarjetas">
        <p>disclaimerrrr</p>
        <h1>conmtent</h1>
      </MyRectangle>
      <MyRectangle title="Agregar Tarjeta">
        <add-card-form/>
      </MyRectangle>
    </div>
  </div>

</template>

<style scoped>
  .cards{
    display: flex;
    justify-content: center;
  }
  .page{
    padding-left: 20px;
    justify-content: center;

  }
</style>
