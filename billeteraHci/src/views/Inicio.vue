<script setup lang="ts">
import { ref } from 'vue';
import Cobro from '../views/Movimientos/Cobro.vue';
import Transferencia from '../views/Movimientos/Transferencia.vue';
import BarraLateral from '../components/ContextComponents/BarraLateral.vue';
import ContextHeader from "@/components/ContextComponents/contextHeader.vue";
import { useWalletStore } from '@/stores/walletStore.js';
import MyButton from '@/components/GeneralUse/myButton.vue';
import router from '@/router';




const walletStore = useWalletStore();
const balance = walletStore.getBalance();
const transactions = walletStore.getTransactions();
const showBalance = ref(true);

const toggleBalanceVisibility = () => {
    showBalance.value = !showBalance.value;
};
</script>

<template>
        <ContextHeader title="Inicio"/>
        <BarraLateral/>
        <v-container class="container">
                        <v-col cols="4">
                                <v-card class="rounded-xl cardy" color="white">
                                        <v-card-title class="text-h4 font-weight-medium" style="color: #333;">
                                                Tu saldo
                                                <v-icon @click="toggleBalanceVisibility" class="eye-icon">
                                                        {{ showBalance ? 'mdi-eye' : 'mdi-eye-off' }}
                                                </v-icon>
                                        </v-card-title>
                                        <v-card-text class="text-h4 font-weight-bold" style="color: #4A148C;">
                                                {{ showBalance ? `$ ${balance}` : '****' }}
                                        </v-card-text>
                                        <v-card-actions>
                                                <v-row>
                                                        <v-col cols="6">
                                                                <MyButton class="btn" @click="router.push({ name: 'Transferir' })">
                                                                        Transferir
                                                                        <v-icon class="spacing">mdi-arrow-right</v-icon>
                                                                </MyButton>
                                                        </v-col>
                                                        <v-col cols="6">
                                                                <MyButton class="btn" @click="router.push({name: 'CVU' })">
                                                                        Ver mi CVU
                                                                        <v-icon class="spacing">mdi-arrow-right</v-icon>
                                                                </MyButton>
                                                        </v-col>
                                                </v-row>
                                        </v-card-actions>
                                </v-card>
                        </v-col>
        </v-container>
                <v-container>
                        <v-card class="rounded-xl pr-2 overflow-auto" color="white" style="border: 1px solid #ccc;">
                                <v-card-title class="text-h5 font-weight-medium pb-0" style="color: #333;">Movimientos</v-card-title>
                                <v-list bg-color="white" class="pt-0" max-height="400px">
                                        <template v-if="transactions.length === 0">
                                                <v-list-item>
                                                                <v-list-item-title style="color: #666;">Aquí se verán sus movimientos</v-list-item-title>
                                                </v-list-item>
                                        </template>
                                        <template v-else>
                                                <template v-for="(transaction, index) in transactions.slice().reverse().slice(0, 3)" :key="index">

                                                        <Transferencia v-if="transaction.type === 'add'" :monto=transaction.amount persona="Juan Gago" :fecha="transaction.date" :tType="transaction.typeOfTransaction"/>
                                                        <Cobro v-else-if="transaction.type === 'remove'" :monto=transaction.amount persona="Juan Gago" :fecha="transaction.date" :tType="transaction.typeOfTransaction"/>
                                                </template>
                                        </template>
                                </v-list>


                          <div class="text-end">
                          <my-button class="verMas text-end" @click="router.push({ name: 'Movimientos' });">
                            Ver mas
                          </my-button>
                          </div>
                        </v-card>

                </v-container>
</template>

<style scoped>
.container{
        width: 100%;
}
.btn {
        width: 100%;
}
.spacing {
        margin-left:10px;
}
.cardy {
        width: 600px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        padding: 16px;
}
.eye-icon {
        cursor: pointer;
        margin-left: 10px;
}
.verMas{
  margin: 10px;
}
</style>
