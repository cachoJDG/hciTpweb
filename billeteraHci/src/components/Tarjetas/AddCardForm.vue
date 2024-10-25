<script setup>
import AddCardField from "@/components/Tarjetas/AddCardField.vue";
import { ref, reactive } from 'vue';

const formValues = reactive({
  cardNumber: '',
  cardHolder: '',
  expirationDate: '',
  cvv: ''
});

const fields = [
  {
    model: 'cardNumber',
    title: 'Nro. de tarjeta',
    rules: [v => !!v || 'Este campo es requerido', v => /^\d{10}$/.test(v) || 'Debe contener 10 dígitos']
  },
  {
    model: 'cardHolder',
    title: 'Titular de la tarjeta',
    rules: [v => !!v || 'Este campo es requerido']
  },
  {
    model: 'expirationDate',
    title: 'Fecha de vencimiento (mm/yy)',
    rules: [v => !!v || 'Este campo es requerido', v => /^(0[1-9]|1[0-2])\/\d{2}$/.test(v) || 'Debe ser una fecha válida']
  },
  {
    model: 'cvv',
    title: 'CVV',
    rules: [v => !!v || 'Este campo es requerido', v => /^\d{3}$/.test(v) || 'Debe ser un código de seguridad válido']
  }
];

const handleSubmit = () => {
  console.log('Formulario enviado:', formValues);
};
</script>

<template>
  <v-container class="container">
    <v-form class="form">
      <AddCardField
        v-for="(field, index) in fields"
        :key="index"
        :title="field.title"
        :rules="field.rules"
        v-model="formValues[field.model]"
      />
    </v-form>
    <v-btn class="button" title="Agregar tarjeta" append-icon="mdi-plus-circle" @click="handleSubmit">
      <p class="text-black">Agregar Tarjeta</p>
      <template v-slot:append>
        <v-icon color="black"></v-icon>
      </template>
    </v-btn>
  </v-container>
</template>

<style scoped>
.form {
  width: 100%;
}
.container {
  width: 100%;
  justify-content: center;
  padding: 16px;
}
.field {
  margin-bottom: 16px;
}
.button {
  width: 100%;
  background-color: #a055f9;
}
</style>
