<script setup>

import Cobro from "@/views/Movimientos/Cobro.vue";
import Transferencia from "@/views/Movimientos/Transferencia.vue";
import {useWalletStore} from "@/stores/walletStore";
import BarraLateral from "@/components/ContextComponents/BarraLateral.vue";
import ContextHeader from "@/components/ContextComponents/contextHeader.vue";

const walletStore = useWalletStore();
const transactions = walletStore.getTransactions();

</script>

<template>
  <barra-lateral/>
  <context-header title="Movimientos"/>
  <v-container>
    <v-card class="rounded-xl pr-2 movimeientosCard" color="white" style="border: 1px solid #ccc;">
      <v-card-title class="text-h5 font-weight-medium pb-0" style="color: #333;">Movimientos</v-card-title>
      <v-list bg-color="white" class="pt-0">
        <template v-if="transactions.length === 0">
          <v-list-item>
            <v-list-item-title style="color: #666;">Aquí se verán sus movimientos</v-list-item-title>
          </v-list-item>
        </template>
        <template v-else>
          <template v-for="(transaction, index) in transactions.slice().reverse()" :key="index">

            <Transferencia v-if="transaction.type === 'add'" :monto=transaction.amount persona="Juan Gago" :fecha="transaction.date" :tType="transaction.typeOfTransaction"/>
            <Cobro v-else-if="transaction.type === 'remove'" :monto=transaction.amount persona="Juan Gago" :fecha="transaction.date" :tType="transaction.typeOfTransaction"/>
          </template>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<style scoped>


.movimeientosCard{

}
</style>
