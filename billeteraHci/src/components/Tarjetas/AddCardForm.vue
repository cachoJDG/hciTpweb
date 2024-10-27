<script setup>
import AddCardField from "@/components/Tarjetas/AddCardField.vue";
import { useCreditCardStore } from '@/stores/creditCardStorage.js';
import { ref, reactive, watch } from 'vue';
import MyButton from "../GeneralUse/myButton.vue";

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
    rules: [v => !!v || 'Este campo es requerido', v => /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(v) || 'Debe contener 16 dígitos en formato 0000 0000 0000 0000']
  },
  {
    model: 'cardHolder',
    title: 'Titular de la tarjeta',
    rules: [
      v => !!v || 'Este campo es requerido',
      v => /^[a-zA-Z\s]+$/.test(v) || 'Solo se permiten letras y espacios'
    ]
  },
  {
    model: 'expirationDate',
    title: 'Fecha de vencimiento (mm/yyyy)',
    rules: [
      v => !!v || 'Este campo es requerido',
      v => /^(0[1-9]|1[0-2])\/\d{4}$/.test(v) || 'Debe ser una fecha válida en formato mm/yyyy'
    ]
  },
  {
    model: 'cvv',
    title: 'CVV',
    rules: [v => !!v || 'Este campo es requerido', v => /^\d{3}$/.test(v) || 'Debe ser un código de seguridad válido']
  }
];

const creditCardStore = useCreditCardStore();

const handleSubmit = () => {
  const isValid = fields.every(field => {
    const value = formValues[field.model];
    return field.rules.every(rule => rule(value) === true);
  });

  if (!isValid) {
    return;
  }

  const cardNumberWithoutSpaces = formValues.cardNumber.replace(/\s/g, '');
  creditCardStore.addCreditCard(
    cardNumberWithoutSpaces,
    formValues.cardHolder,
    formValues.expirationDate,
    formValues.cvv
  );
};

watch(() => formValues.cardNumber, (newVal) => {
  formValues.cardNumber = newVal.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
});

watch(() => formValues.expirationDate, (newVal) => {
  if (/^\d{2}$/.test(newVal)) {
    formValues.expirationDate = newVal + '/';
  }
});

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
    <MyButton class="button" @click="handleSubmit">Agregar Tarjeta
      <v-icon class="ml-2" right>mdi-credit-card-plus</v-icon>
    </MyButton>
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
}
</style>
