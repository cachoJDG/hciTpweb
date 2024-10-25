<script setup lang="ts">
import Cobro from '../views/Movimientos/Cobro.vue';
import Transferencia from '../views/Movimientos/Transferencia.vue';
import BarraLateral from '../components/BarraLateral.vue';
import ContextHeader from "@/components/contextHeader.vue";
import { useWalletStore } from '@/stores/walletStore.js';

const walletStore = useWalletStore();
const balance = walletStore.getBalance();
const transactions = walletStore.getTransactions();
</script>

<template>
    <ContextHeader title="Inicio"/>
    <BarraLateral/>
    <v-app>
        <div>
            <v-row justify="space-evenly" align="center" class="ma-4">
                <v-col cols="3">
                    <v-card class="rounded-xl" color="white" style="width:300px;">
                        <v-card-title class="text-h4 font-weight-medium">Tu saldo</v-card-title>
                        <v-card-text class="text-h4 font-weight-bold text-purple-lighten-3">$ {{ balance }}</v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-container>
                        <v-row>
                            <v-btn class="text-black ma-2" rounded="lg" height="80" width="300" size="x-large"
                                color="deep-purple-lighten-3">Ver mi
                                cvu</v-btn>
                        </v-row>
                        <v-row>
                            <v-btn class="text-black ma-2" rounded="lg" height="80" width="300" size="x-large"
                                color="deep-purple-lighten-3">Transferir
                                dinero</v-btn>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </div>
        <div>
            <v-container>
                <v-card class="rounded-xl pr-2 overflow-auto" color="white">
                    <v-card-title class="text-h5 font-weight-medium pb-0">Movimientos</v-card-title>
                    <v-list bg-color="white" class="pt-0" max-height="400px">
                        <template v-for="(transaction, index) in transactions" :key="index">
                            <Transferencia v-if="transaction.type === 'remove'" :monto="transaction.amount" persona="Juan Gago" :fecha="transaction.date"/>
                            <Cobro v-else-if="transaction.type === 'add'" :monto="transaction.amount" persona="Juan Gago" :fecha="transaction.date"/>
                        </template>
                    </v-list>
                    <div class="text-end mt-2">
                        <v-btn class="text-black mb-4 mr-4" color="deep-purple-lighten-2" size="large">Ver mas</v-btn>
                    </div>
                </v-card>
            </v-container>
        </div>
    </v-app>
</template>
