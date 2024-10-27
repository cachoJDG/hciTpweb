<template>
    <ContextHeader title="Transferir" />
    <BarraLateral />
    <v-container class="ml-10 mt-1">
      <v-row justify="center" align="center" no-gutters>
        <v-card class="rounded-xl" color="white" width="1080px">
          <v-card-title class="text-h5">Por alias o cvu</v-card-title>
          <v-card-text class="text-subtitle-1">A cuentas bancarias o digitales</v-card-text>
          <v-card class="bg-deep-purple-lighten-4 rounded-xl text-black ma-8">
            <v-row justify="space-around" align="center">
              <v-col cols="7">
                <v-card-item class="font-weight-medium text-subtitle-1">Ingresa el alias o cvu</v-card-item>
                <v-text-field></v-text-field>
              </v-col>
              <v-col cols="2" class="d-flex align-center">
                <MyButton @click="showPopup = true">
                  <v-icon icon="mdi-arrow-right" size="large"></v-icon>
                </MyButton>
              </v-col>
            </v-row>
          </v-card>
        </v-card>
      </v-row>
    </v-container>
    <v-container class="ml-10 mt-0">
      <v-row justify="center" align="center" no-gutters>
        <v-card class="rounded-xl" color="white" width="1080px">
          <v-card-title class="text-h5">Por enlace</v-card-title>
          <v-card-text class="text-subtitle-1">A otras cuentas</v-card-text>
          <v-card class="bg-deep-purple-lighten-4 rounded-xl text-black ma-8">
            <v-row justify="space-around" align="center">
              <v-col cols="7">
                <v-card-item class="font-weight-medium text-subtitle-1">Ingresa el enlace de pago</v-card-item>
                <v-text-field v-model="paymentLink"></v-text-field>
              </v-col>
              <v-col cols="2" class="d-flex align-center">
                <MyButton @click="validatePaymentLink">
                  <v-icon icon="mdi-arrow-right" size="large"></v-icon>
                </MyButton>
              </v-col>
            </v-row>
          </v-card>
        </v-card>
      </v-row>
    </v-container>


      <v-dialog v-model="showPopup" max-width="400px" class="custom-dialog">
      <v-card>
        <v-card-title class="headline">Ingresar Dinero</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="amount" label="Monto" type="number" outlined dense class="mt-2"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="error" text @click="showPopup = false">Cancelar</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="handlesendMoney">Pagar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



    <v-dialog v-model="showPaymentOptions" max-width="500px">
      <v-card color="white">
        <v-card-title class="headline">Opciones de Pago</v-card-title>
        <v-card-text>
          <v-row justify="space-around" align="center">
            <v-col cols="5">
              <v-btn color="blue darken-1" text @click="showCreditCardDropdown = true">
                <v-icon left>mdi-credit-card</v-icon>
                Tarjeta
              </v-btn>
            </v-col>
            <v-col cols="5">
              <v-btn color="green darken-1" text @click="payWithAccountBalance">
                <v-icon left>mdi-bank</v-icon>
                Dinero en Cuenta
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="showPaymentOptions = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <v-dialog v-model="showCreditCardDropdown" max-width="500px">
      <v-card color="white">
        <v-card-title class="headline">Selecciona una Tarjeta</v-card-title>
        <v-card-text>
          <v-select
            v-model="selectedCreditCard"
            :items=userCreditCardNumbers
            item-text="cardNumber"
            label="Tarjetas de Crédito"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" text @click="payWithSelectedCreditCard">Pagar</v-btn>
          <v-btn color="red darken-1" text @click="showCreditCardDropdown = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <AlertDialogue :message="alertMessage" :type="alertType" v-model:visible="showAlert" />
  </template>

  <script setup>
  import { ref } from 'vue';
  import BarraLateral from '@/components/ContextComponents/BarraLateral.vue';
  import ContextHeader from "@/components/ContextComponents/contextHeader.vue";
  import { useWalletStore } from '@/stores/walletStore.js';
  import { useCreditCardStore } from '@/stores/creditCardStorage.js'
  import MyButton from '@/components/GeneralUse/myButton.vue';
  import AlertDialogue from '@/components/GeneralUse/alertDialogue.vue';

  const showPopup = ref(false);
  const showPaymentOptions = ref(false);
  const showCreditCardDropdown = ref(false);
  const showAlert = ref(false);
  const alertMessage = ref('');
  const alertType = ref('success');
  const amount = ref(0);
  const paymentLink = ref('');
  const selectedCreditCard = ref(null);
  const walletStore = useWalletStore();
  const creditCardStorage = useCreditCardStore();

  const userCreditCards = creditCardStorage.getUserCreditCards();
  const userCreditCardNumbers = userCreditCards.map(card => card.cardNumber);

  const handlesendMoney = () => {
      if (amount.value <= 0) {
          alertMessage.value = 'Ingresa una cantidad de dinero válida';
          alertType.value = 'failure';
          showAlert.value = true;
          return;
      }
      const success = walletStore.removeMoney(amount.value, "Transferencia enviada");
      if (!success) {
          alertMessage.value = 'Saldo insuficiente';
          alertType.value = 'failure';
          showAlert.value = true;
      } else {
          showPopup.value = false;
          alertMessage.value = 'Dinero enviado con éxito';
          alertType.value = 'success';
          showAlert.value = true;
      }
  };

  const handlePaymentLink = () => {
      showPaymentOptions.value = true;
  };

  const extractPaymentLinkDetails = (link) => {
      const urlParts = link.split('/');
      if (urlParts.length < 3) {
          alertMessage.value = 'Link de pago incorrecto';
          alertType.value = 'failure';
          showAlert.value = true;
          return null;
      }
      const alias = urlParts[urlParts.length - 2];
      const amount = parseInt(urlParts[urlParts.length - 1], 10);
      if (isNaN(amount)) {
          alertMessage.value = 'Link de pago incorrecto';
          alertType.value = 'failure';
          showAlert.value = true;
          return null;
      }
      return { alias, amount };
  };

  const validatePaymentLink = () => {
      const paymentDetails = extractPaymentLinkDetails(paymentLink.value);
      if (paymentDetails) {
          handlePaymentLink();
      }
  };

  const payWithCreditCard = () => {
      if (userCreditCards.length === 0) {
          alertMessage.value = 'No tienes tarjetas de crédito disponibles';
          alertType.value = 'failure';
          showAlert.value = true;
          return;
      }

      showCreditCardDropdown.value = true;
  };

  const payWithSelectedCreditCard = () => {
      if (!selectedCreditCard.value) {
          alertMessage.value = 'Selecciona una tarjeta de crédito';
          alertType.value = 'failure';
          showAlert.value = true;
          return;
      }

      const paymentDetails = extractPaymentLinkDetails(paymentLink.value);
      if (!paymentDetails) return;

      walletStore.payWithCreditCard(selectedCreditCard.value, paymentDetails.amount);

      console.log(selectedCreditCard.value)
      console.log(paymentDetails.amount)

      console.log(walletStore.getTransactions());

      showCreditCardDropdown.value = false;
      showPaymentOptions.value = false;
      alertMessage.value = `Pagaste con tarjeta de crédito a: ${paymentDetails.alias}, esta cantidad: ${paymentDetails.amount}`;
      alertType.value = 'success';
      showAlert.value = true;
  };

  const payWithAccountBalance = () => {
      const paymentDetails = extractPaymentLinkDetails(paymentLink.value);
      if (!paymentDetails) return;

      const success = walletStore.removeMoney(paymentDetails.amount, "Pago por Link");
      if (!success) {
          alertMessage.value = 'Saldo insuficiente';
          alertType.value = 'failure';
          showAlert.value = true;
      } else {
          showPaymentOptions.value = false;
          alertMessage.value = `Le mandaste a: ${paymentDetails.alias}, esta cantidad: ${paymentDetails.amount}`;
          alertType.value = 'success';
          showAlert.value = true;
      }
  };
  </script>

  <style scoped>
  .custom-dialog .v-card {
      padding: 24px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }

  .custom-dialog .v-card-title {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      color: black;
      margin-bottom: 8px;
  }

  .custom-dialog .v-card-text {
      color: black;
  }

  .custom-dialog .v-card-actions {
      justify-content: space-between;
  }

  .custom-dialog .v-btn {
      font-weight: bold;
  }

  .custom-dialog .v-text-field input {
      color: black;
      background-color: black;
      border-radius: 4px;
  }
  </style>
