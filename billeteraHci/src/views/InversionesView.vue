<script setup>

import {ref} from "vue";
import { useWalletStore } from '@/stores/walletStore.js';

const walletStore = useWalletStore();

const showInvestPopup = ref(false);

const investedAmmount = ref(walletStore.getInvestedAmount());
const amountToInvest = ref(null);

const showWithdrawPopup = ref(false);
const ammountToWithdraw = ref(null);

const fechas = ref([
  { fecha: "1/08/2024", ganancia: 300 },
  { fecha: "1/09/2024", ganancia: 700 },
  { fecha: "1/10/2024", ganancia: 1000 },
]);

const totalMoney = ref(walletStore.getBalance());
import MyRectangle from '@/components/GeneralUse/MyRectangle.vue';
import MyButton from '@/components/GeneralUse/myButton.vue';
import BarraLateral from "@/components/ContextComponents/BarraLateral.vue";
import ContextHeader from "@/components/ContextComponents/contextHeader.vue";

function handleInvest() {
    showInvestPopup.value = false;
    console.log('invested: ', amountToInvest.value);
    if (walletStore.investMoney(parseInt(amountToInvest.value))) {
        investedAmmount.value = walletStore.getInvestedAmount();
        amountToInvest.value = null;
        totalMoney.value = walletStore.getBalance();
    } else {
        console.error('Not enough balance to invest');
    }
}

function handleWithdraw() {
  showWithdrawPopup.value = false;
  console.log('withdrawed: ', ammountToWithdraw.value);
  if (walletStore.withdrawInvestment(parseInt(ammountToWithdraw.value))) {
      investedAmmount.value = walletStore.getInvestedAmount();
      totalMoney.value = walletStore.getBalance();
      ammountToWithdraw.value = null;
  } else {
      console.error('Not enough invested amount to withdraw');
  }
}

</script>

<template>
    <ContextHeader title="Inversiones" />
    <BarraLateral />

  <v-dialog v-model="showInvestPopup" max-width="400px" class="custom-dialog">
    <v-card class="pa-0 ma-0">
      <v-card-title class="headline">Invertir dinero</v-card-title>
      <v-card-text class="text-h7 font-weight-medium pb-0 ">Actualmente estas invirtiendo: </v-card-text>
      <v-card-text class="text-h5 font-weight-bold pt-0 pb-5 ma-0" style="color: #14808c;">{{ investedAmmount }}$</v-card-text>
      <v-card-text class="text-h7 font-weight-medium pb-0">Tienes disponibles para invertir: </v-card-text>
      <v-card-text class="text-h5 font-weight-bold pt-0 pb-5 ma-0" style="color: #4A148C;">{{ totalMoney }}$</v-card-text>
      <v-card-text class="mt-0">
        <v-form>
          <v-text-field v-model="amountToInvest" label="¿Cuanto deseas inverir?" type="number" outlined dense class="mt-2"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="error" text="" @click="showInvestPopup = false">Cancelar</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" text="" @click="handleInvest">Invertir</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="showWithdrawPopup" max-width="400px" class="custom-dialog">
    <v-card class="pa-0 ma-0">
      <v-card-title class="headline">Retirar dinero</v-card-title>
      <v-card-text class="text-h7 font-weight-medium pb-0 ">Actualmente estas invirtiendo: </v-card-text>
      <v-card-text class="text-h5 font-weight-bold pt-0 pb-5 ma-0" style="color: #14808c;">{{ investedAmmount }}$</v-card-text>

      <v-card-text class="mt-0">
        <v-form>
          <v-text-field v-model="ammountToWithdraw" label="¿Cuanto deseas retirar?" type="number" outlined dense class="mt-2"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="error" text="" @click="showWithdrawPopup = false">Cancelar</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" text="" @click="handleWithdraw">Retirar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

    <v-row align="center" justify="space-evenly">
        <v-col cols="auto">
            <MyRectangle title="Dinero invertido total">
                <v-card-text class="text-h5 font-weight-medium">$ {{investedAmmount}}</v-card-text>
                <v-row>
                    <v-col>
                        <MyButton @click="showInvestPopup = true">Invertir</MyButton>
                    </v-col>
                    <v-col class="text-end">
                        <MyButton @click="showWithdrawPopup = true">Retirar dinero</MyButton>
                    </v-col>
                </v-row>
            </MyRectangle>
            <MyRectangle title="Rendimientos recientes">

            <v-card class="bg-deep-purple-lighten-3 mb-3 pa rendimientoCard" v-for="(item, index) in fechas" :key="index">
              <v-row >
                <v-col cols="auto">
                  <v-card-text class="text-black text-h6">{{item.fecha}}</v-card-text>
                </v-col>
                <v-col >
                  <v-card-text class="text-h6 text-end font-weight-bold" style="color: #14808c;">+ {{item.ganancia}}$</v-card-text>
                </v-col>
              </v-row>
            </v-card>

            </MyRectangle>
        </v-col>
    </v-row>
</template>

<style scoped>
.custom-dialog .v-card {
  padding: 24px;
  background-color: #b39ddb; /* Lighter blue with more transparency */
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
}

.custom-dialog .v-card-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-bottom: 0px;
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
  border-radius: 0px;
}

.rendimientoCard{
  height: auto;
  align-items: center;
  align-content: center;

}

</style>
