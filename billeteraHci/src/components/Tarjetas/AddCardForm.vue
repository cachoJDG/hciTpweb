<script setup>
  import AddCardField from "@/components/Tarjetas/AddCardField.vue";

  const fields = ref([
    {
      title: 'Nro. de tarjeta',
      rules: [v => !!v || defaultMsg, v => /^\d{10}$/.test(v) || 'Debe contener 10 dígitos']
    },
    {
      title: 'Titular de la tarjeta',
      rules: [v => !!v || defaultMsg]
    },
    {
      title: 'Fecha de vencimiento (mm/yy)',
      rules: [v => !!v || defaultMsg, v => /^(0[1-9]|1[0-2])\/\d{2}$/.test(v) || 'Debe ser una fecha valida']
    },
    {
      title: 'CVV',
      rules: [v => !!v || defaultMsg, v => /^\d{3}$/.test(v) || 'Debe ser un codigo de seguridad valido']
    }
  ]);
  const defaultMsg = 'Este campo es requerido';


</script>

<template>
  <v-container class="container">
  <v-form class="form">
    <AddCardField class="field" v-for="(field, index) in fields" :key="index" :title="field.title" :rules="field.rules"/>
  </v-form>
  <v-btn class="button" title="Agregar tarjeta" append-icon="mdi-plus-circle">
    <p class="text-black">Agregar Tarjeta</p>
    <template v-slot:append>
      <v-icon color="black"></v-icon>
    </template>
  </v-btn>
  </v-container>
</template>

<style scoped>
.form {

}
.container{
  width: 100%;
  justify-content: center;
  padding: 16px;
}
.field {
  margin-bottom: 16px;
}
.button{
  width: 100%;
  background-color: #a055f9;

}

</style>
