<script setup>

import {ref} from "vue";

const showInvestPopup = ref(false);

const investedAmmount = ref(0);
const amountToInvest = ref(0);

const showWithdrawPopup = ref(false);
const ammountToWithdraw = ref(0);

const fechas = ref([
  "27/09/2021",
  "28/09/2021",
  "29/09/2021",
]);





const totalMoney = ref(5000);
import MyRectangle from '@/components/GeneralUse/MyRectangle.vue';
import MyButton from '@/components/GeneralUse/myButton.vue';
import BarraLateral from "@/components/ContextComponents/BarraLateral.vue";
import ContextHeader from "@/components/ContextComponents/contextHeader.vue";




function handleInvest() {
    showInvestPopup.value = false;
    console.log('invested: ', ammountToWithdraw.value);
    investedAmmount.value += amountToInvest.value;
    amountToInvest.value = 0;
    totalMoney.value -= investedAmmount.value;
}

function handleWithdraw() {
  showWithdrawPopup.value = false;
  console.log('withdrawed: ', investedAmmount.value);
  investedAmmount.value -= ammountToWithdraw.value;
  totalMoney.value += ammountToWithdraw.value;
  ammountToWithdraw.value = 0;

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
<!--      <v-card-text class="text-h7 font-weight-medium mb-0">¿Cuanto deseas inverir?</v-card-text>-->
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
      <v-card-title class="headline">Invertir dinero</v-card-title>
      <v-card-text class="text-h7 font-weight-medium pb-0 ">Actualmente estas invirtiendo: </v-card-text>
      <v-card-text class="text-h5 font-weight-bold pt-0 pb-5 ma-0" style="color: #14808c;">{{ investedAmmount }}$</v-card-text>
      <v-card-text class="text-h7 font-weight-medium pb-0">Tienes disponibles para invertir: </v-card-text>
      <v-card-text class="text-h5 font-weight-bold pt-0 pb-5 ma-0" style="color: #4A148C;">{{ totalMoney }}$</v-card-text>
      <!--      <v-card-text class="text-h7 font-weight-medium mb-0">¿Cuanto deseas inverir?</v-card-text>-->
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


            <v-card class="bg-deep-purple-lighten-3 mb-3 pa rendimientoCard" v-for="(fecha, index) in fechas">
              <v-row >
                <v-col cols="auto">
                  <v-card-text class="text-black text-h6">{{fecha}}</v-card-text>
                </v-col>
                <v-col >
                  <v-card-text class="text-h6 text-end font-weight-bold" style="color: #14808c;">+ 300$</v-card-text>
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
